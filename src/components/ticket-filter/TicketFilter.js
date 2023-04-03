/* eslint-disable */
import React from 'react'
import styles from './TicketFilter.module.scss'

const TicketFilter = () => {
  return (
    <div className={styles['ticket-filter']}>
      <button type='button' className={[styles['ticket-filter__button'], styles['ticket-filter__button--active']].join(' ')}>
        Самый дешевый
      </button>
      <button type='button' className={styles['ticket-filter__button']}>
        Самый быстрый
      </button>
      <button type='button' className={styles['ticket-filter__button']}>
        Оптимальный
      </button>
    </div>
  )
}

export default TicketFilter
