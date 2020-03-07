import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { getAccountClassName, numberWithCommas } from 'utils'
import { ACCOUNT_COLOUR_MAP } from 'constants/transaction-types'
import { Container, BalanceAmount } from 'styles/balance-amount'
import { Header } from 'styles/header'
import logo from 'assets/retro-save.png'
import robot from 'assets/dancing-robot.gif'
import dollar from 'assets/dollar.gif'

const Balance = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <Container>
      <Header>
        <img src={robot} className="dancing-robot" alt="Dancing Robot" />
        <img src={logo} alt="Logo" />        
        <img src={dollar} className="dollar-sign" alt="Dollar sign" />
      </Header>
      <p className="strapline">Current Balance</p>
      <BalanceAmount className={ACCOUNT_COLOUR_MAP[getAccountClassName(balance)]}>
        <span>£{numberWithCommas(balance)}</span>
      </BalanceAmount>
    </Container>
  )
}

export default Balance
