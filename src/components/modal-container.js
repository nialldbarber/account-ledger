import React, { useContext } from 'react'
import { ModalContext } from 'state/context/modal'
import Modal from 'components/modal'
import { Container, Wrapper, WrapperInner, ModalBackground } from 'styles/modal-container'

const ModalContainer = () => {
  const { depositModal, withdrawModal } = useContext(ModalContext)

  return (
    <Container className={depositModal || withdrawModal ? 'active' : ''}>
      <ModalBackground />
      <Wrapper>
        <WrapperInner>
          <Modal type="deposit" visibility={depositModal} />
          <Modal type="withdraw" visibility={withdrawModal} />
        </WrapperInner>
      </Wrapper>
    </Container>
  )
}

export default ModalContainer
