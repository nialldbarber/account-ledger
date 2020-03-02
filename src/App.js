import React from 'react'
import { BalanceProvider } from 'state'
import Header from 'components/header'
import Row from 'components/row'
import ModalContainer from 'components/modal-container'

const App = () => (
  <BalanceProvider>
    <Header />
    <Row />
    <ModalContainer />
  </BalanceProvider>
)

export default App
