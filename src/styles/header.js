import styled from 'styled-components'
import { resizeDollar } from 'styles/utils/keyframes'

export const Header = styled.h1`
  position: absolute;
  top: -6rem;
  left: 50%;
  transform: translateX(-50%) skewX(-10deg) rotate(14deg);
  width: 340px;
  margin: 0;

  img {
    width: 100%;
    height: auto;
  }

  .dollar-sign {
    position: absolute;
    width: 30px;
    top: 15px;
    right: -55px;
    animation: 1s ${resizeDollar} infinite;
  }

  .dancing-robot {
    position: absolute;
    width: 100px;
    top: 90px;
    left: -100px;
    transform: rotate(-25deg);
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 7fr 4fr;
  margin: 0 1rem 1rem;
  border-bottom: 1px solid ${props => props.theme.darkGrey};
`

export const ErrorMessage = styled.div`
  margin: 0;
  padding: 1rem;
  text-align: center;

  p {
    margin: 0;    
  }
`

export const AccountDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;

  p {
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.white};
    background: ${props => props.theme.grey};
    border-top: 1px solid ${props => props.theme.white};
    border-left: 1px solid ${props => props.theme.white};
    border-right: 1px solid ${props => props.theme.grey};
    border-bottom: 1px solid ${props => props.theme.grey};
    box-shadow: 1px 1px 0 ${props => props.theme.black};

    &.overdraft {
      background: ${props => props.theme.red};
      border: 1px solid ${props => props.theme.red};
    }

    &.available {
      background: ${props => props.theme.green};
      border: 1px solid ${props => props.theme.green};

    }
    
    &.target {
      background: ${props => props.theme.lighterBlue}; 
      border: 1px solid ${props => props.theme.lighterBlue};
    }
  }
`
