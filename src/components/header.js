import React, { useContext } from 'react'
import { BalanceContext } from 'state/context/balance'
import Balance from 'components/balance'
import AddWithdraw from 'components/add-withdraw'
import { OVERDRAFT } from 'constants/transaction-types'
import { Container, AccountDetails } from 'styles/header'

const Header = () => {
  const { balance } = useContext(BalanceContext)

  return (
    <>
      <Container>
        <Balance />
        <AddWithdraw />
      </Container>
      <AccountDetails>
        <p>Overdraft: £250</p>
        <p>Available: £{balance - OVERDRAFT}</p>
        <p>Saving Target: £4,000</p>
      </AccountDetails>    
    </>
  )
}

export default Header
