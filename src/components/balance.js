import React, { useContext } from 'react'
import styled from 'styled-components'
import { BalanceContext } from 'state'
import { getAccountClassName } from 'utils'
import { ACCOUNT_COLOUR_MAP } from 'constants/transaction-types'

const BalanceAmount = styled.p`
  font-style: italic;

  &.saving-reached {
    color: blue;
  }

  &.overdraft-reached {
    color: red;
  }  
`

const Balance = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <div>
      <h1>Balance</h1>
      <BalanceAmount className={ACCOUNT_COLOUR_MAP[getAccountClassName(balance)]}>{balance}</BalanceAmount>
      <p>{balance}</p>
    </div>
  )
}

export default Balance
