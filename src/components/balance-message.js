import React, { useState, useEffect, useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { numberWithCommas } from 'utils'
import { IN_OVERDRAFT, SAVING_REACHED } from 'constants/transaction-types'
import { ErrorMessage } from 'styles/header'

const BalanceMessage = () => {
  const { balance, difference } = useContext(BalanceContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (difference) {
      setMessage(`We were only able to withdraw £${numberWithCommas(difference)}`)
    } else if (balance <= IN_OVERDRAFT) {
      setMessage("You're in your overdraft")
    } else if (balance >= SAVING_REACHED) {
      setMessage('Savings reached! Time to save')
    } else {
      setMessage(`You're £${numberWithCommas(SAVING_REACHED - balance)} away from your goal!`)      
    }
  }, [balance, difference])

  return (
    <ErrorMessage>
      {message}
    </ErrorMessage>
  )
}

export default BalanceMessage
