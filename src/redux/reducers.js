/*eslint-disable*/
const initialState = {
  tickets: [],
  transferFilter: {
    all: true,
    direct: true,
    one: true,
    two: true,
    three: true,
  },
  ticketSortBtn: 'cheapest',
  stopLoading: false,
  loading: 0,
  visibleTickets: 5,
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CHECBOX_TOGGLE':
      let obj = { ...state.transferFilter }
      if (Object.values(state.transferFilter).every((item) => item === true)) {
        for (let key in obj) {
          obj[key] = false
        }
      } else {
        for (let key in obj) {
          obj[key] = true
        }
      }
      return { ...state, transferFilter: obj }
    case 'FILTER_CHECKBOX_TOGGLE':
      const name = action.payload
      let newObj = { ...state.transferFilter, [name]: !state.transferFilter[name] }
      if (Object.values(newObj).filter((item) => item === true).length === 4) {
        newObj = {
          ...state.transferFilter,
          all: !state.transferFilter.all,
          [name]: !state.transferFilter[name],
        }
      }
      return { ...state, transferFilter: newObj }
    case 'SORT_BTN_CLICK':
      return { ...state, ticketSortBtn: action.payload }
    case 'SHOW_MORE_TICKETS':
      return { ...state, visibleTickets: state.visibleTickets + 5 }
    case 'GET_TICKETS':
      if (!state.stopLoading) {
        return {
          ...state,
          tickets: [...state.tickets, ...action.tickets],
          stopLoading: action.stopLoading,
          loading: state.loading + 1,
        }
      }
    default:
      return state
  }
}

export default reducer
