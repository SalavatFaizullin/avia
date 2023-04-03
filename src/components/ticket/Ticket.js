/*eslint-disable*/
import React from 'react'
import airlinelogo from '../../img/airlinelogo.png'

const Ticket = () => {
  return (
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
  )
}

export default Ticket
