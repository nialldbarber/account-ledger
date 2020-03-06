import { css } from 'styled-components'

export const borderMixin = css`
  border-color: #cbcbcb #4e474e #4e474e #cbcbcb;
  border-style: solid;
  border-width: 5px;
`

export const buttonMixin = css`
  background: ${props => props.theme.grey};
  width: 20px;
  height: 20px;
  margin: 6px 6px 0 0;
  cursor: pointer;
  background-color: silver;
  border-top: 1px solid ${props => props.theme.white};
  border-left: 1px solid ${props => props.theme.white};
  border-right: 1px solid gray;
  border-bottom: 1px solid gray; 
  box-shadow: 1px 1px 0 ${props => props.theme.black};
`
