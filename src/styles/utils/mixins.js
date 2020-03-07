import { css } from 'styled-components'

export const borderMixin = css`
  border-color: ${props => props.theme.lightGrey} ${props => props.theme.darkerGrey} ${props => props.theme.darkerGrey} ${props => props.theme.lightGrey};
  border-style: solid;
  border-width: 5px;
`

export const buttonMixin = css`
  background: ${props => props.theme.grey};
  width: 20px;
  height: 20px;
  margin: 0.5rem 0;
  cursor: pointer;
  background-color: silver;
  border-top: 1px solid ${props => props.theme.white};
  border-left: 1px solid ${props => props.theme.white};
  border-right: 1px solid ${props => props.theme.grey};
  border-bottom: 1px solid ${props => props.theme.grey}; 
  box-shadow: 1px 1px 0 ${props => props.theme.black};
`
