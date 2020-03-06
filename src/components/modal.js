import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BalanceContext } from 'state/context/balance'
import { ModalContext } from 'state/context/modal'
import useForm from 'hooks/useForm'
import { DEPOSIT, WITHDRAW, OVERDRAFT } from 'constants/transaction-types'
import { getDayAndMonthFromDate } from 'utils'
import { Container } from 'styles/modal'
import { Button } from 'styles/button'
import cross from 'assets/cross.svg'

const Modal = ({ type, visibility }) => {
  const { balance, addMoney, withdrawMoney } = useContext(BalanceContext)
  const { closeAllModals } = useContext(ModalContext)
  const { values, handleChange } = useForm({
    id: '',
    date: '',
    item: '',
    amount: '',
    type: ''
  })

  const { item, amount } = values

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: uuidv4(),
      date: getDayAndMonthFromDate(),
      item,
      amount: parseFloat(amount),
    }

    if (type === 'deposit') {
      newItem.type = DEPOSIT
      addMoney(newItem)
    } else {      
      newItem.type = WITHDRAW
      if (balance - amount < OVERDRAFT) {
        newItem.amount = parseFloat(balance - OVERDRAFT)
      }
      withdrawMoney(newItem)     
    }

    closeAllModals()
  }

  return (
    <Container className={visibility ? 'active' : ''}>
      <div className="message">
        <p>{type}</p>
        <button className="exit" onClick={() => closeAllModals()}>
          <img src={cross} alt="exit" />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={item}
          name="item"
          onChange={handleChange}
          placeholder="Item"
          required
        />
        <input 
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
          placeholder="Amount"
          required
        />
        <Button type="submit">
          {type === 'deposit' ? 'deposit' : 'withdraw'}
        </Button>
      </form>
    </Container>
  )
}

export default Modal
