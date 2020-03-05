import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BalanceContext } from 'state/context/balance'
import { ModalContext } from 'state/context/modal'
import useForm from 'hooks/useForm'
import { DEPOSIT, WITHDRAW } from 'constants/transaction-types'
import { getDayAndMonthFromDate } from 'utils'
import { Container } from 'styles/modal'
import { Button } from 'styles/button'
import cross from 'assets/cross.svg'

const Modal = ({ type, visibility }) => {
  const { addMoney, withdrawMoney } = useContext(BalanceContext)
  const { closeAllModals } = useContext(ModalContext)
  const { values, handleChange } = useForm({
    id: '',
    date: '',
    item: '',
    amount: '',
    type: ''
  })

  const { date, item, amount } = values

  // this function needs to find out if its credit/debit
  // add the item to the transaction array
  // not submit if any field is empty

  const handleSubmit = (e) => {
    e.preventDefault()
    if (type === 'deposit') {
      const newItem = {
        id: uuidv4(),
        date: getDayAndMonthFromDate(),
        item,
        amount,
        type: DEPOSIT
      }
      addMoney(newItem)
    } else {
      const newItem = {
        id: uuidv4(),
        date: getDayAndMonthFromDate(),
        item,
        amount,
        type: WITHDRAW
      }
      withdrawMoney(newItem)
    }
    closeAllModals()
  }

  return (
    <Container className={visibility ? 'active' : ''}>
      <button className="exit" onClick={() => closeAllModals()}>
        <img src={cross} alt="exit" />
      </button>
      <p>{type} blurb...</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          name="item"
          onChange={handleChange}
        />
        <input 
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <Button type="submit">
          {type === 'deposit' ? 'deposit' : 'withdraw'}
        </Button>
      </form>
    </Container>
  )
}

export default Modal
