import React from 'react'

import logo from '../../img/logo.png'
import Sort from '../sort'
import TicketList from '../ticket-list'
import Filter from '../filter'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img src={logo} alt='logo' />
        </header>
        <main className={styles.main}>
          <Filter />
          <div>
            <Sort />
            <TicketList />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
