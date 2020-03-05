import styled from 'styled-components'

export const BalanceAmount = styled.p`
  margin: 0;
  font-size: 2rem;
  font-style: italic;
  text-align: center;

  &.saving-reached {
    color: blue;
  }

  &.overdraft-reached {
    color: red;
  }  
`
