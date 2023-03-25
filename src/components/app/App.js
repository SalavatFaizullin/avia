/* eslint-disable */
import logo from '../../img/logo.png'
import './App.scss'
import TicketFilter from '../ticket-filter'
import TicketList from '../ticket-list'
import TransferFilter from '../transfer-filter'

function App() {
  const Header = () => {
    return (
      <header className='header'>
        <img src={logo} alt='logo' />
      </header>
    )
  }
  const Main = () => {
    return (
      <>
        <Header />
        <main className='main'>
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
    <div className='App'>
      <div className='wrapper'>
        <Main />
      </div>
    </div>
  )
}

export default App
