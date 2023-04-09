/* eslint-disable */
import React from 'react'
import styles from './Sort.module.scss'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import classNames from 'classnames'

const Sort = ({ sort, toggleSort }) => {
  const buttonsData = [
    { name: 'cheapest', label: 'Самый дешевый' },
    { name: 'fastest', label: 'Самый быстрый' },
    { name: 'optimal', label: 'Оптимальный' },
  ]
  const buttons = buttonsData.map(({ name, label }) => {
    const activeStyle = classNames({
      'sort__button--active': sort === name,
    })
    return (
      <button
        key={name}
        name={name}
        type='button'
        className={[styles['sort__button'], styles[`${activeStyle}`]].join(' ')}
        onClick={toggleSort}
      >
        {label}
      </button>
    )
  })
  return <div className={styles.sort}>{buttons}</div>
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  }
}

export default connect(mapStateToProps, actions)(Sort)
