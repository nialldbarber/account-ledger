import React, { useContext } from 'react'
import { BalanceContext } from 'state'

const Balance = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <div>
      <h1>Balance</h1>
      <p>{balance}</p>
      <p>Overdraft reached!</p>
    </div>
  )
}

export default Balance
