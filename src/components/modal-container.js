import React, { useContext } from 'react'
import { BalanceContext } from 'state'
import Modal from 'components/modal'

const ModalContainer = () => {
  const { depositModal, withdrawModal } = useContext(BalanceContext)  

  return (
    <div>
      <Modal type="deposit" visibility={depositModal} />
      <Modal type="withdraw" visibility={withdrawModal} />
    </div>
  )
}

export default ModalContainer
