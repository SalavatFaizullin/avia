import React from 'react'
import './TicketFilter.scss'

const TicketFilter = () => {
  return (
    <div className='ticket-filter'>
      <button type='button' className='ticket-filter__button ticket-filter__button--active'>
        Самый дешевый
      </button>
      <button type='button' className='ticket-filter__button'>
        Самый быстрый
      </button>
      <button type='button' className='ticket-filter__button'>
        Оптимальный
      </button>
    </div>
  )
}

export default TicketFilter
