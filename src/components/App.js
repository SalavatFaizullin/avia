/* eslint-disable */

import logo from '../img/logo.png'
import airlinelogo from '../img/airlinelogo.png'

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <header className='header'>
          <img src={logo} alt='logo' />
        </header>
        <main className='main'>
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
          <div>
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
            <ul className='ticket-list'>
              <li>
                <table>
                  <thead>
                    <tr>
                      <td colSpan='2'>13 400 ₽</td>
                      <td>
                        <img src={airlinelogo} alt='airline-logo' align='right' />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>MOW - HKT</div>
                        <div>11:20 – 00:50</div>
                      </td>
                      <td>
                        <div>в пути</div>
                        <div>21ч 15м</div>
                      </td>
                      <td>
                        <div>2 пересадки</div>
                        <div>HKG, JNB</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div>MOW - HKT</div>
                        <div>11:20 – 00:50</div>
                      </td>
                      <td>
                        <div>в пути</div>
                        <div>21ч 15м</div>
                      </td>
                      <td>
                        <div>2 пересадки</div>
                        <div>HKG, JNB</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
