import React, { createContext, useReducer } from 'react'
import uuid4 from 'uuidv4'
import { balanceReducer } from 'state/reducers/balance'
import { DEPOSIT, WITHDRAW } from 'constants/transaction-types'

const initialState = {
  balance: 2000,
  // transactions: [
    // {
    //   id: uuid4(),
    //   date: '20/2',
    //   item: 'Yardsale Pizza',
    //   amount: 12.45,
    //   type: WITHDRAW
    // },
    // {
    //   id: uuid4(),
    //   date: '20/2',
    //   item: 'EE Phone bill',
    //   amount: 45,
    //   type: WITHDRAW
    // },
    // {
    //   id: uuid4(),
    //   date: '20/2',
    //   item: 'Uber',
    //   amount: 7.91,
    //   type: WITHDRAW
    // },
    // {
    //   id: uuid4(),
    //   date: '19/2',
    //   item: 'Drinks! 😎🍺',
    //   amount: 20,
    //   type: DEPOSIT
    // },
  // ]
}

export const BalanceContext = createContext(initialState)

export const BalanceProvider = (props) => {
  const [state, dispatch] = useReducer(balanceReducer, initialState)
  
  const addMoney = (amount) => dispatch({ type: DEPOSIT, amount })
  const withdrawMoney = (amount) => dispatch({ type: WITHDRAW, amount })

  return <BalanceContext.Provider value={{ balance: state.balance, addMoney, withdrawMoney }} {...props} />
}
