import React, { useState, useEffect, useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { numberWithCommas } from 'utils'
import { IN_OVERDRAFT } from 'constants/transaction-types'
import { ErrorMessage } from 'styles/header'

const BalanceMessage = () => {
  const { balance, difference } = useContext(BalanceContext)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (difference) {
      setMessage(`We were only able to withdraw £${numberWithCommas(difference)}`)
    } else if (balance <= IN_OVERDRAFT) {
      setMessage("You're in your overdraft")
    } else {
      setMessage('')
    }
  }, [balance, difference])

  return (
    <ErrorMessage>
      {message}
    </ErrorMessage>
  )
}

export default BalanceMessage
