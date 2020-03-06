import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { OVERDRAFT, SAVING_REACHED } from 'constants/transaction-types'

const PopUps = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <div>
      {balance <= OVERDRAFT ? 'Overdraft reached ☹️' : ''}

      {balance >= SAVING_REACHED ? 'Savings reached!' : ''}
    </div>
  )
}

export default PopUps
