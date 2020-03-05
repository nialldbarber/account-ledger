import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { getAccountClassName } from 'utils'
import { ACCOUNT_COLOUR_MAP } from 'constants/transaction-types'
import { BalanceAmount } from 'styles/balance-amount'
import { Header } from 'styles/header'
import balanceText from 'assets/balance.png'

const Balance = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <div>
      <Header>
        <img src={balanceText} alt="Balance image"/>
      </Header>
      <BalanceAmount className={ACCOUNT_COLOUR_MAP[getAccountClassName(balance)]}>{balance}</BalanceAmount>
    </div>
  )
}

export default Balance
