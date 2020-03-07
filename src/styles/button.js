import styled from 'styled-components'
import button from 'assets/button.png'

export const Button = styled.button`
  width: calc(50% - 10px);
  margin-top: 10px;
  margin-left: auto;
  height: 40px;
  position: relative;
  outline: 2px solid ${props => props.theme.blue};
  text-transform: uppercase;
  color: ${props => props.theme.blue};
  font-family: ${props => props.theme.font};
  font-size: 1rem;
  background: url(${button}) 0 0/100% auto no-repeat;
  position: relative;
  outline: 2px solid ${props => props.theme.blue};

  &:hover {
    color: ${props => props.theme.yellow};
    outline-color: ${props => props.theme.yellow};
  }
`
