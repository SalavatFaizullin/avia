import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import nextId from 'react-id-generator'
import { Spin, Alert } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import * as actions from '../../redux/actions'
import Ticket from '../ticket'

import styles from './TicketList.module.scss'

function TicketList({ tickets, fetchTickets, visibleTicketsCount, filter, sort, showMoreTickets, stopLoading, error }) {
  useEffect(() => {
    fetchTickets()
  }, [tickets])

  const spinnerIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  )

  const spinner = !stopLoading ? (
    <div className={styles.spinner}>
      <Spin indicator={spinnerIcon} />
    </div>
  ) : null

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
        case 'fastest': {
          const durationSumA = a.segments.reduce((acc, segment) => acc + segment.duration, 0)
          const durationSumB = b.segments.reduce((acc, segment) => acc + segment.duration, 0)
          return durationSumA - durationSumB
        }
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

  const errorAlert = error ? (
    <div className={styles['alert-message']}>
      <Alert
        message='Извините, данные недоступны по нашей вине. Мы работаем над этим. Пожалуйста, повторите позднее.'
        type='error'
        showIcon
      />
    </div>
  ) : null

  const noTicketsAlert = Object.values(filter).every((item) => item === false) ? (
    <div className={styles['alert-message']}>
      <Alert message='Нет рейсов по заданным параметрам. Выберите количество пересадок.' type='info' showIcon />
    </div>
  ) : null

  const content = !(errorAlert || noTicketsAlert) ? (
    <>
      <ul className={styles['ticket-list']}>
        {spinner}
        {visibleTickets}
      </ul>
      <button type='button' onClick={showMoreTickets}>
        Показать ещё 5 билетов!
      </button>
    </>
  ) : null

  return (
    <>
      {errorAlert}
      {noTicketsAlert}
      {content}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    filter: state.filter,
    visibleTicketsCount: state.visibleTicketsCount,
    sort: state.sort,
    stopLoading: state.stopLoading,
    error: state.error,
  }
}

export default connect(mapStateToProps, actions)(TicketList)
