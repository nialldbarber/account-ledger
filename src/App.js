import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BalanceProvider } from 'state/context/balance'
import { ModalProvider } from 'state/context/modal'
import { theme } from 'styles/utils/variables'
import { GlobalStyle } from 'styles/base'
import Header from 'components/header'
import Row from 'components/row'
import ModalContainer from 'components/modal-container'
import Footer from 'components/footer'

const App = () => (
  <ThemeProvider theme={theme}>
  <GlobalStyle />
    <BalanceProvider>
      <ModalProvider>
        <main>
          <Header />
          <Row />
          <ModalContainer />
        </main>
        <Footer />
      </ModalProvider>
    </BalanceProvider>
  </ThemeProvider>
)

export default App
