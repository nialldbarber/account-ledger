import React, { useContext } from 'react'
import { ModalContext } from 'state/context/modal'

const AddWithdraw = () => {
  const { openDepositModal, openWithdrawModal } = useContext(ModalContext)

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
