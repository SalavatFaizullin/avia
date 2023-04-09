/* eslint-disable */
import React, { useEffect } from 'react'
import Ticket from '../ticket'
import styles from './TicketList.module.scss'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import nextId from 'react-id-generator'

const TicketList = ({ tickets, getTickets, visibleTicketsCount, filter, sort }) => {
  useEffect(() => {
    getTickets()
  }, [tickets])

  const visibleTickets = tickets
    .filter((ticket) => {
      if (filter.all) return true
      if (filter.direct && ticket.segments[0].stops.length === 0 && ticket.segments[1].stops.length === 0) return true
      if (filter.one && ticket.segments[0].stops.length === 1 && ticket.segments[1].stops.length === 1) return true
      if (filter.two && ticket.segments[0].stops.length === 2 && ticket.segments[1].stops.length === 2) return true
      if (filter.three && ticket.segments[0].stops.length === 3 && ticket.segments[1].stops.length === 3) return true
      return false
    })
    .sort((a, b) => {
      switch (sort) {
        case 'cheapest':
          return a.price - b.price
        case 'fastest':
          const durationSumA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
          const durationSumB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
          return durationSumA - durationSumB
        case 'optimal':
          return a.price - b.price
        default:
          return 0
      }
    })
    .slice(0, visibleTicketsCount)
    .map((ticket) => {
      const { price, carrier, segments } = ticket
      return <Ticket key={nextId()} price={price} carrier={carrier} segments={segments} />
    })

  return <ul className={styles['ticket-list']}>{visibleTickets}</ul>
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    filter: state.filter,
    visibleTicketsCount: state.visibleTicketsCount,
    sort: state.sort,
  }
}

export default connect(mapStateToProps, actions)(TicketList)
