import React from 'react'
import { BalanceProvider } from 'state'
import Header from 'components/header'
import Row from 'components/row'
import Modal from 'components/modal'

const App = () => (
  <BalanceProvider>
    <Header />
    <Row />
    <Modal />
  </BalanceProvider>
)

export default App
