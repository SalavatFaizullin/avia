/* eslint-disable */
import React, { useEffect } from 'react'
import Ticket from '../ticket'
import styles from './TicketList.module.scss'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import nextId from 'react-id-generator'

const TicketList = ({ tickets, getTickets, loading, visibleTickets }) => {
  useEffect(() => {
    getTickets()
  }, [loading])

  const shownTickets = tickets
    .map((ticket) => {
      const { price, carrier, segments } = ticket
      return <Ticket key={nextId()} price={price} carrier={carrier} segments={segments} />
    })
    .slice(0, visibleTickets)

  return <ul className={styles['ticket-list']}>{shownTickets}</ul>
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    searchId: state.searchId,
    loading: state.loading,
    visibleTickets: state.visibleTickets,
  }
}

export default connect(mapStateToProps, actions)(TicketList)
