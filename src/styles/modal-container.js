import styled from 'styled-components'
import { borderMixin } from 'styles/utils/mixins'

export const Container = styled.div`
  display: none;

  &.active {
    display: block;
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - 3rem);
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${props => props.theme.grey};
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  width: 500px;
  height: 350px;
  z-index: 5;
  ${borderMixin};
`
 
export const WrapperInner = styled.div`
  position: relative
`

export const ModalBackground = styled.div`
  position: fixed;
  top: -5rem;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);  
`
