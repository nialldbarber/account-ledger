import React from 'react'
import styled from 'styled-components'
import Balance from 'components/balance'
import AddWithdraw from 'components/add-withdraw'

const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 4fr;
  border-bottom: 1px solid ${props => props.theme.grey};
`

const Header = () => (
  <Container>
    <Balance />
    <AddWithdraw />
  </Container>
)

export default Header
