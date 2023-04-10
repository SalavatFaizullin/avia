import ApiService from '../apiService'

const api = new ApiService()

export const toggleAll = () => ({ type: 'TOGGLE_ALL' })
export const toggleFilter = (e) => ({ type: 'TOGGLE_FILTER', payload: e.target.name })
export const toggleSort = (e) => ({ type: 'TOGGLE_SORT', payload: e.target.name })
export const showMoreTickets = () => ({ type: 'SHOW_MORE_TICKETS' })
const getTickets = (response) => ({ type: 'GET_TICKETS', tickets: response.tickets, stopLoading: response.stop })
const onError = () => ({ type: 'ON_ERROR' })
export const fetchTickets = () => {
  return async (dispatch) => {
    try {
      const response = await api.getTickets()
      dispatch(getTickets(response))
    } catch {
      dispatch(onError())
    }
  }
}
