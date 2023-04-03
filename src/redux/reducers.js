/*eslint-disable*/
const initialState = {
  transferFilter: [true, true, true, true, true],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL':
      let newArr = []
      if (state.transferFilter.filter((item) => item === true).length === 5) {
        newArr = [false, false, false, false, false]
      } else {
        newArr = [true, true, true, true, true]
      }
      return { ...state, transferFilter: newArr }
    case 'NONE':
      let newNoneArr = [
        state.transferFilter[0],
        !state.transferFilter[1],
        state.transferFilter[2],
        state.transferFilter[3],
        state.transferFilter[4],
      ]
      if (newNoneArr.filter((item) => item === true).length === 4) {
        newNoneArr = [
          !state.transferFilter[0],
          !state.transferFilter[1],
          state.transferFilter[2],
          state.transferFilter[3],
          state.transferFilter[4],
        ]
      }
      return { ...state, transferFilter: newNoneArr }
    case 'ONE':
      let newOneArr = [
        state.transferFilter[0],
        state.transferFilter[1],
        !state.transferFilter[2],
        state.transferFilter[3],
        state.transferFilter[4],
      ]
      if (newOneArr.filter((item) => item === true).length === 4) {
        newOneArr = [
          !state.transferFilter[0],
          state.transferFilter[1],
          !state.transferFilter[2],
          state.transferFilter[3],
          state.transferFilter[4],
        ]
      }
      return { ...state, transferFilter: newOneArr }
    case 'TWO':
      let newTwoArr = [
        state.transferFilter[0],
        state.transferFilter[1],
        state.transferFilter[2],
        !state.transferFilter[3],
        state.transferFilter[4],
      ]
      if (newTwoArr.filter((item) => item === true).length === 4) {
        newTwoArr = [
          !state.transferFilter[0],
          state.transferFilter[1],
          state.transferFilter[2],
          !state.transferFilter[3],
          state.transferFilter[4],
        ]
      }
      return { ...state, transferFilter: newTwoArr }
    case 'THREE':
      let newThreeArr = [
        state.transferFilter[0],
        state.transferFilter[1],
        state.transferFilter[2],
        state.transferFilter[3],
        !state.transferFilter[4],
      ]
      if (newThreeArr.filter((item) => item === true).length === 4) {
        newThreeArr = [
          !state.transferFilter[0],
          state.transferFilter[1],
          state.transferFilter[2],
          state.transferFilter[3],
          !state.transferFilter[4],
        ]
      }
      return { ...state, transferFilter: newThreeArr }
    default:
      return state
  }
}

export default reducer
