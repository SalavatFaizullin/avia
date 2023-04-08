/*eslint-disable*/
import React from 'react'
import styles from './TransferFilter.module.scss'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'

const TransferFilter = ({transferFilter, allCheckboxToggle, filterCheckboxToggle}) => {
  const checkboxData = [
    { name: 'direct', label: 'Без пересадок' },
    { name: 'one', label: '1 пересадка' },
    { name: 'two', label: '2 пересадки' },
    { name: 'three', label: '3 пересадки' },
  ]
  const createCheckbox = (name, label, handler) => {
    return (
      <label key={name} htmlFor={name} className={styles['transfer-filter__checkbox-label']}>
        <input
          key={name}
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name={name}
          id={name}
          checked={transferFilter[`${name}`]}
          onChange={handler}
        />
        <span className={styles['transfer-filter__checkbox']}></span>
        {label}
      </label>
    )
  }
  const checkBoxes = checkboxData.map(({ name, label }) => {
    return (
      createCheckbox(name, label, filterCheckboxToggle)
    )
  })
  return (
    <aside className={styles['transfer-filter']}>
      <h3 className={styles['transfer-filter__header']}>Количество пересадок</h3>
      {createCheckbox('all', 'Все', allCheckboxToggle)}
      {checkBoxes}
    </aside>
  )
}

const mapStateToProps = (state) => {
  return {
    transferFilter: state.transferFilter
  }
}

export default connect(mapStateToProps, actions)(TransferFilter)
