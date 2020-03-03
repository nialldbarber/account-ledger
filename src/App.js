import React from 'react'
import { BalanceProvider } from 'state/context/balance'
import { ModalProvider } from 'state/context/modal'
import Header from 'components/header'
import Row from 'components/row'
import ModalContainer from 'components/modal-container'

const App = () => (
  <BalanceProvider>
    <ModalProvider>
      <Header />
      <Row />
      <ModalContainer />
    </ModalProvider>
  </BalanceProvider>
)

export default App
