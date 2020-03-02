import React, { useContext } from 'react'
import { BalanceContext } from 'state'

const AddWithdraw = () => {
  const { openDepositModal, openWithdrawModal } = useContext(BalanceContext)

  return (
    <div>
      <div>
        <p>Deposit</p>
        <button onClick={() => openDepositModal()}>+</button>
      </div>
      <div>
        <p>Withdraw</p>
        <button onClick={() => openWithdrawModal()}>-</button>
      </div>
    </div>
  )
}

export default AddWithdraw
