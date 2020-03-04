import React, { useContext } from 'react'
import { ModalContext } from 'state/context/modal'
import { Container, Controls, Button } from 'styles/add-withdraw'

const AddWithdraw = () => {
  const { openDepositModal, openWithdrawModal } = useContext(ModalContext)

  return (
    <Container>
      <Controls>
        <p>Deposit</p>
        <Button onClick={() => openDepositModal()}>+</Button>
      </Controls>
      <Controls>
        <p>Withdraw</p>
        <Button onClick={() => openWithdrawModal()}>-</Button>
      </Controls>
    </Container>
  )
}

export default AddWithdraw
