/* eslint-disable */
import React from 'react'
import Ticket from '../ticket'
import styles from './TicketList.module.scss'

const TicketList = () => {
  return (
    <ul className={styles['ticket-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  )
}

export default TicketList
