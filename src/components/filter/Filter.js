import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../redux/actions'

import styles from './Filter.module.scss'

function Filter({ filter, toggleAll, toggleFilter }) {
  const checkboxData = [
    { name: 'direct', label: 'Без пересадок' },
    { name: 'one', label: '1 пересадка' },
    { name: 'two', label: '2 пересадки' },
    { name: 'three', label: '3 пересадки' },
  ]
  const createCheckbox = (name, label, handler) => {
    return (
      <label key={name} htmlFor={name} className={styles['filter__checkbox-label']}>
        <input
          key={name}
          className={styles['filter__check-input']}
          type='checkbox'
          name={name}
          id={name}
          checked={filter[`${name}`]}
          onChange={handler}
        />
        <span className={styles.filter__checkbox} />
        {label}
      </label>
    )
  }
  const checkBoxes = checkboxData.map(({ name, label }) => {
    return createCheckbox(name, label, toggleFilter)
  })
  return (
    <aside className={styles.filter}>
      <h3 className={styles.filter__header}>Количество пересадок</h3>
      {createCheckbox('all', 'Все', toggleAll)}
      {checkBoxes}
    </aside>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  }
}

export default connect(mapStateToProps, actions)(Filter)
