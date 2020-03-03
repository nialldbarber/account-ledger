import styled from 'styled-components'

export const BalanceAmount = styled.p`
  font-style: italic;

  &.saving-reached {
    color: blue;
  }

  &.overdraft-reached {
    color: red;
  }  
`
