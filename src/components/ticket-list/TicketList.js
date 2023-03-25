/* eslint-disable */
import React from 'react'
import Ticket from '../ticket'
import './TicketList.scss'

const TicketList = () => {
  return (
    <ul className='ticket-list'>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  )
}

export default TicketList
