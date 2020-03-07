import styled from 'styled-components'
import { borderMixin } from 'styles/utils/mixins'

export const Container = styled.div`
  .strapline {
    margin: 1rem 0 0 1rem;
    text-align: right;
    font-style: italic;
    color: ${props => props.theme.darkerGrey};
    font-size: 1.5rem;
    padding-right: 1.5rem;
  }
`

export const BalanceAmount = styled.p`
  margin: 0 0 2rem;
  padding-right: 2rem;
  font-size: 2rem;
  font-style: italic;
  text-align: center;
  font-size: 5rem;
  color: ${props => props.theme.darkerGrey};
  text-align: right;
  background: ${props => props.theme.white};
  ${borderMixin};

  &.saving-reached {
    color: ${props => props.theme.blue};
  }

  &.overdraft-reached {
    color: ${props => props.theme.red};
  }  
`
