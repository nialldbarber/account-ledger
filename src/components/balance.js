import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import { getAccountClassName } from 'utils'
import { ACCOUNT_COLOUR_MAP } from 'constants/transaction-types'
import { Container, BalanceAmount } from 'styles/balance-amount'
import { Header } from 'styles/header'
import logo from 'assets/retro-save.png'

const Balance = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
      </Header>
      <p className="strapline">Current Balance</p>
      <BalanceAmount className={ACCOUNT_COLOUR_MAP[getAccountClassName(balance)]}>£{balance}</BalanceAmount>
    </Container>
  )
}

export default Balance
