import React from 'react'
import styled from 'styled-components'
import Balance from 'components/balance'
import AddWithdraw from 'components/add-withdraw'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const Header = () => (
  <Container>
    <div />
    <Balance />
    <AddWithdraw />
  </Container>
)

export default Header
