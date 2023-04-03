/* eslint-disable */
import logo from '../../img/logo.png'
import styles from './App.module.scss'
import TicketFilter from '../ticket-filter'
import TicketList from '../ticket-list'
import TransferFilter from '../transfer-filter'

function App() {
  const Header = () => {
    return (
      <header className={styles.header}>
        <img src={logo} alt='logo' />
      </header>
    )
  }
  const Main = () => {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <TransferFilter />
          <div>
            <TicketFilter />
            <TicketList />
            <button>Показать ещё 5 билетов!</button>
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

export default App
