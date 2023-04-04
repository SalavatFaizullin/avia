/*eslint-disable*/
import { filterCheckboxToggle, allCheckboxToggle } from '../../redux/actions'
import styles from './TransferFilter.module.scss'
import { useSelector, useDispatch } from 'react-redux'

const TransferFilter = () => {
  const { transferFilter } = useSelector((state) => state)
  const dispatch = useDispatch()

  const checkboxArr = [
    { name: 'direct', label: 'Без пересадок' },
    { name: 'one', label: '1 пересадка' },
    { name: 'two', label: '2 пересадки' },
    { name: 'three', label: '3 пересадки' },
  ]

  const checkBoxes = checkboxArr.map(({ name, label }) => {
    return (
      <label key={name} htmlFor={name} className={styles['transfer-filter__checkbox-label']}>
        <input
          key={name}
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name={name}
          id={name}
          checked={transferFilter[`${name}`]}
          onChange={(e) => dispatch(filterCheckboxToggle(e))}
        />
        <span className={styles['transfer-filter__checkbox']}></span>
        {label}
      </label>
    )
  })

  return (
    <aside className={styles['transfer-filter']}>
      <h3 className={styles['transfer-filter__header']}>Количество пересадок</h3>
      <label key='all' htmlFor='all' className={styles['transfer-filter__checkbox-label']}>
        <input
          key='all'
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name='all'
          id='all'
          checked={transferFilter['all']}
          onChange={(e) => dispatch(allCheckboxToggle(e))}
        />
        <span className={styles['transfer-filter__checkbox']}></span>
        Все
      </label>
      {checkBoxes}
    </aside>
  )
}

export default TransferFilter
