/*eslint-disable*/
export const allCheckboxToggle = () => ({type: 'ALL_CHECBOX_TOGGLE'})
export const filterCheckboxToggle = (e) => ({ type: 'FILTER_CHECKBOX_TOGGLE', payload: e.target.name })
export const sortBtnClick = (e) => ({ type: 'SORT_BTN_CLICK', payload: e.target.name })