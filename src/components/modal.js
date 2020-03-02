import React, { useContext } from 'react'
import { BalanceContext } from 'state'
import useForm from 'hooks/useForm'

const Modal = ({ type }) => {
  const { addMoney, withdrawMoney } = useContext(BalanceContext)
  const { value, handleChange } = useForm('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (type === 'deposit') addMoney(value)
    else withdrawMoney(value)
  }

  return (
    <div>
      <p>Some blurb...</p>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">
          {type === 'deposit' ? 'deposit' : 'withdraw'}
        </button>
      </form>
    </div>
  )
}

export default Modal
