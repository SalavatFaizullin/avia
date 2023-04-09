/*eslint-disable*/
import ApiService from '../apiService'

const api = new ApiService()

export const toggleAll = () => ({ type: 'TOGGLE_ALL' })
export const toggleFilter = (e) => ({ type: 'TOGGLE_FILTER', payload: e.target.name })
export const toggleSort = (e) => ({ type: 'TOGGLE_SORT', payload: e.target.name })
export const showMoreTickets = () => ({ type: 'SHOW_MORE_TICKETS' })
export const getTickets = () => {
  return async (dispatch) => {
    const response = await api.getTickets()
    dispatch({
      type: 'GET_TICKETS',
      tickets: response.tickets,
      stopLoading: response.stop,
    })
  }
}
