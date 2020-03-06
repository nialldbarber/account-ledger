import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { ModalContext } from 'state/context/modal'
import { OVERDRAFT } from 'constants/transaction-types'
import { Container, Controls, Button } from 'styles/add-withdraw'

const AddWithdraw = () => {
  const { balance } = useContext(BalanceContext)
  const { openDepositModal, openWithdrawModal } = useContext(ModalContext)

  return (
    <Container>
      <div className="controls">
        <Controls>
          <p>Deposit</p>
          <Button onClick={() => openDepositModal()}>+</Button>
        </Controls>
        <Controls className={balance <= OVERDRAFT ? 'disabled' : ''}>
          <p>Withdraw</p>
          <Button onClick={() => openWithdrawModal()}>-</Button>
        </Controls>
      </div>
    </Container>
  )
}

export default AddWithdraw
