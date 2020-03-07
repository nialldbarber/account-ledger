import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { DEPOSIT } from 'constants/transaction-types'
import { RowLine } from 'styles/row'

const Row = () => {
  const { transactions } = useContext(BalanceContext)

  return (
    <div>
      {transactions.reverse().map(({ id, date, amount, item, type }) => (
        <RowLine key={id}>
          <p>{date}</p>
          <p>{item}</p>
          <p style={{ color: type === DEPOSIT ? '#04BA4D' : 'black' }}>{amount}</p>
        </RowLine>
      ))}
    </div>
  )
}

export default Row
