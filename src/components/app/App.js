/* eslint-disable */
import React from 'react'
import logo from '../../img/logo.png'
import styles from './App.module.scss'
import Sort from '../sort'
import TicketList from '../ticket-list'
import Filter from '../filter'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import * as actions from '../../redux/actions'
import { connect } from 'react-redux'

function App({ stopLoading, showMoreTickets }) {
  const Header = () => {
    return (
      <header className={styles.header}>
        <img src={logo} alt='logo' />
      </header>
    )
  }
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
  const Main = () => {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <Filter />
          <div>
            <Sort />
            {spinner}
            <TicketList />
            <button type='button' onClick={showMoreTickets}>
              Показать ещё 5 билетов!
            </button>
          </div>
        </main>
      </>
    )
  }

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Main />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    stopLoading: state.stopLoading,
  }
}

export default connect(mapStateToProps, actions)(App)
