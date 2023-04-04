/*eslint-disable*/
const initialState = {
  transferFilter: {
    all: true,
    direct: true,
    one: true,
    two: true,
    three: true,
  },
  ticketSortBtn: 'cheapest',
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_CHECBOX_TOGGLE':
      let obj = { ...state.transferFilter }
      if (Object.values(state.transferFilter).filter((item) => item === true).length === 5) {
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
    default:
      return state
  }
}

export default reducer
