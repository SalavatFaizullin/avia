/*eslint-disable*/
import { onAll, onOne, onTwo, onThree, onNone } from '../../redux/actions'
import styles from './TransferFilter.module.scss'
import { useSelector, useDispatch } from 'react-redux'

const TransferFilter = () => {
  const { transferFilter } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <aside className={styles['transfer-filter']}>
      <h3 className={styles['transfer-filter__header']}>Количество пересадок</h3>
      <label htmlFor='all' className={styles['transfer-filter__checkbox-label']}>
        <input
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name='all'
          id='all'
          checked={transferFilter[0]}
          onChange={() => dispatch(onAll())}
        />
        <span className={styles['transfer-filter__checkbox']}></span>
        Все
      </label>
      <label htmlFor='none' className={styles['transfer-filter__checkbox-label']}>
        <input
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name='none'
          id='none'
          checked={transferFilter[1]}
          onChange={() => dispatch(onNone())}
        />
        <span className={styles['transfer-filter__checkbox']}></span>
        Без пересадок
      </label>
      <label htmlFor='one' className={styles['transfer-filter__checkbox-label']}>
        <input
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name='one'
          id='one'
          checked={transferFilter[2]}
          onChange={() => dispatch(onOne())}
        />
        <span className={styles['transfer-filter__checkbox']}></span>1 пересадка
      </label>
      <label htmlFor='two' className={styles['transfer-filter__checkbox-label']}>
        <input
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name='two'
          id='two'
          checked={transferFilter[3]}
          onChange={() => dispatch(onTwo())}
        />
        <span className={styles['transfer-filter__checkbox']}></span>2 пересадки
      </label>
      <label htmlFor='three' className={styles['transfer-filter__checkbox-label']}>
        <input
          className={styles['transfer-filter__check-input']}
          type='checkbox'
          name='three'
          id='three'
          checked={transferFilter[4]}
          onChange={() => dispatch(onThree())}
        />
        <span className={styles['transfer-filter__checkbox']}></span>3 пересадки
      </label>
    </aside>
  )
}

export default TransferFilter
