/* eslint-disable */
import React from 'react'
import styles from './TicketSort.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import classNames from 'classnames'

const TicketSort = ({ ticketSortBtn, sortBtnClick }) => {
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
        onClick={sortBtnClick}
      >
        {label}
      </button>
    )
  })
  return <div className={styles['ticket-sort']}>{buttons}</div>
}

const mapStateToProps = (state) => {
  return {
    ticketSortBtn: state.ticketSortBtn,
  }
}

export default connect(mapStateToProps, actions)(TicketSort)
