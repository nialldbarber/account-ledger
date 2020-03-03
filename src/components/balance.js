import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { getAccountClassName } from 'utils'
import { ACCOUNT_COLOUR_MAP } from 'constants/transaction-types'
import { BalanceAmount } from 'styles/balance-amount'

const Balance = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <div>
      <h1>Balance</h1>
      <BalanceAmount className={ACCOUNT_COLOUR_MAP[getAccountClassName(balance)]}>{balance}</BalanceAmount>
    </div>
  )
}

export default Balance
