import React from 'react'
import './TransferFilter.scss'

const TransferFilter = () => {
  return (
    <aside className='transfer-filter'>
      <h3 className='transfer-filter__header'>Количество пересадок</h3>
      <label htmlFor='all' className='transfer-filter__checkbox-label'>
        <input className='transfer-filter__check-input' type='checkbox' name='' id='all' />
        <span className='transfer-filter__checkbox'></span>
        Все
      </label>
      <label htmlFor='none' className='transfer-filter__checkbox-label'>
        <input className='transfer-filter__check-input' type='checkbox' name='none' id='none' />
        <span className='transfer-filter__checkbox'></span>
        Без пересадок
      </label>
      <label htmlFor='one' className='transfer-filter__checkbox-label'>
        <input className='transfer-filter__check-input' type='checkbox' name='one' id='one' />
        <span className='transfer-filter__checkbox'></span>1 пересадка
      </label>
      <label htmlFor='two' className='transfer-filter__checkbox-label'>
        <input className='transfer-filter__check-input' type='checkbox' name='two' id='two' />
        <span className='transfer-filter__checkbox'></span>2 пересадки
      </label>
      <label htmlFor='three' className='transfer-filter__checkbox-label'>
        <input className='transfer-filter__check-input' type='checkbox' name='three' id='three' />
        <span className='transfer-filter__checkbox'></span>3 пересадки
      </label>
    </aside>
  )
}

export default TransferFilter