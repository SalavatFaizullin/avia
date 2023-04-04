/* eslint-disable */
import React from 'react'
import styles from './TicketSort.module.scss'
import { sortBtnClick } from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'

const TicketSort = () => {
  const { ticketSortBtn } = useSelector((state) => state)
  const dispatch = useDispatch()
  const btnsArr = [
    { name: 'cheapest', label: 'Самый дешевый' },
    { name: 'fastest', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ]
  const buttons = btnsArr.map(({ name, label }) => {
    const btnClassActive = classNames({
      'ticket-sort__button--active': ticketSortBtn === name,
    })
    return (
      <button
        key={name}
        name={name}
        type='button'
        className={[styles['ticket-sort__button'], styles[`${btnClassActive}`]].join(' ')}
        onClick={(e) => dispatch(sortBtnClick(e))}
      >
        {label}
      </button>
    )
  })
  return <div className={styles['ticket-sort']}>{buttons}</div>
}

export default TicketSort
