/*eslint-disable*/
import ApiService from '../apiService'

const api = new ApiService()

export const allCheckboxToggle = () => ({ type: 'ALL_CHECBOX_TOGGLE' })
export const filterCheckboxToggle = (e) => ({ type: 'FILTER_CHECKBOX_TOGGLE', payload: e.target.name })
export const sortBtnClick = (e) => ({ type: 'SORT_BTN_CLICK', payload: e.target.name })
export const showMoreTickets = () => ({type: 'SHOW_MORE_TICKETS'})
export const getTickets = () => {
  return (dispatch) => {
    api.getTickets().then((response) => {
      dispatch({
        type: 'GET_TICKETS',
        tickets: response.tickets,
        stopLoading: response.stop
      })
    })
  }
}
