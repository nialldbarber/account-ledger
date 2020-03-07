import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { numberWithCommas } from 'utils'
import { DEPOSIT } from 'constants/transaction-types'
import { RowLine } from 'styles/row'

const Row = () => {
  const { transactions } = useContext(BalanceContext)

  return (
    <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
      {transactions.map(({ id, date, amount, item, type }) => (
        <RowLine key={id}>
          <p>{date}</p>
          <p>{item}</p>
          <p>{type === DEPOSIT ? `+ ${numberWithCommas(amount)}` : numberWithCommas(amount)}</p>
        </RowLine>
      ))}
    </div>
  )
}

export default Row
