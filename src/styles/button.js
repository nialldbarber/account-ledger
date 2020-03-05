import styled from 'styled-components'

export const Button = styled.button`
  width: calc(50% - 10px);
  margin-top: 10px;
  background: ${props => props.theme.grey};
  height: 40px;
  position: relative;
  outline: 2px solid ${props => props.theme.blue};
  text-transform: uppercase;
  color: ${props => props.theme.blue};
  font-family: ${props => props.theme.font};
  font-size: 1rem;

  &:hover {
    color: ${props => props.theme.yellow};
    outline-color: ${props => props.theme.yellow};
  }
`
