/*eslint-disable*/
const initialState = {
  tickets: [],
  filter: {
    all: true,
    direct: true,
    one: true,
    two: true,
    three: true,
  },
  sort: '',
  stopLoading: false,
  visibleTicketsCount: 5,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_ALL':
      const filters = { ...state.filter }
      for (let key in filters) {
        filters[key] = Object.values(state.filter).every((item) => item === true) ? false : true
      }
      return { ...state, filter: filters }
    case 'TOGGLE_FILTER':
      const name = action.payload
      let updatedFilters = { ...state.filter, [name]: !state.filter[name] }
      if (Object.values(updatedFilters).filter((item) => item === true).length === 4) {
        updatedFilters = {
          ...state.filter,
          all: !state.filter.all,
          [name]: !state.filter[name],
        }
      }
      return { ...state, filter: updatedFilters }
    case 'TOGGLE_SORT':
      return { ...state, sort: action.payload }
    case 'SHOW_MORE_TICKETS':
      return { ...state, visibleTicketsCount: state.visibleTicketsCount + 5 }
    case 'GET_TICKETS':
      if (!state.stopLoading) {
        return {
          ...state,
          tickets: [...state.tickets, ...action.tickets],
          stopLoading: action.stopLoading,
        }
      }
    default:
      return state
  }
}

export default reducer
