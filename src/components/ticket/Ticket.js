/*eslint-disable*/
import React from 'react'
import { format } from 'date-fns'

const Ticket = ({ price, carrier, segments }) => {
  const transfers = (array) => {
    if (!array.length) {
      return 'пересадки'
    } else if (array.length === 1) {
      return '1 пересадка'
    } else if (array.length < 5) {
      return `${array.length} пересадки`
    } else {
      return `${array.length} пересадок`
    }
  }
  return (
    <li>
      <table>
        <thead>
          <tr>
            <td colSpan='2'>{price.toLocaleString()} ₽</td>
            <td>
              <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt='carrier-logo' align='right' />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                {segments[0].origin} - {segments[0].destination}
              </div>
              <div>
                {format(Date.parse(segments[0].date), 'HH:mm')} -{' '}
                {format(new Date(Date.parse(segments[0].date) + segments[0].duration * 60000), 'HH:mm')}
              </div>
            </td>
            <td>
              <div>в пути</div>
              <div>{`${Math.floor(segments[0].duration / 60)}ч ${segments[0].duration % 60}м`}</div>
            </td>
            <td>
              <div>{transfers(segments[0].stops)}</div>
              <div>{segments[0].stops.length ? segments[0].stops.map((item) => item).join(', ') : 'Без пересадок'}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                {segments[1].origin} - {segments[1].destination}
              </div>
              <div>
                {format(Date.parse(segments[1].date), 'HH:mm')} -{' '}
                {format(new Date(Date.parse(segments[1].date) + segments[1].duration * 60000), 'HH:mm')}
              </div>
            </td>
            <td>
              <div>в пути</div>
              <div>{`${Math.floor(segments[0].duration / 60)}ч ${segments[0].duration % 60}м`}</div>
            </td>
            <td>
              <div>{transfers(segments[0].stops)}</div>
              <div>{segments[0].stops.length ? segments[0].stops.map((item) => item).join(', ') : 'Без пересадок'}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </li>
  )
}

export default Ticket
