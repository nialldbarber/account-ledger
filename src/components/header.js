import React from 'react'
import styled from 'styled-components'
import Balance from 'components/balance'
import AddWithdraw from 'components/add-withdraw'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #9c9b9b;
`

const Header = () => (
  <Container>
    <div />
    <Balance />
    <AddWithdraw />
  </Container>
)

export default Header
