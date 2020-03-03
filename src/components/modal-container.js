import React, { useContext } from 'react'
import { ModalContext } from 'state/context/modal'
import Modal from 'components/modal'

const ModalContainer = () => {
  const { depositModal, withdrawModal } = useContext(ModalContext)  

  return (
    <div>
      <Modal type="deposit" visibility={depositModal} />
      <Modal type="withdraw" visibility={withdrawModal} />
    </div>
  )
}

export default ModalContainer
