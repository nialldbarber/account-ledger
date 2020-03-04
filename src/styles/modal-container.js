import styled from 'styled-components'

export const Container = styled.div`
  display: none;

  &.active {
    display: block;
  }
`

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 500px;
  height: 350px;
  z-index: 5;
`

export const WrapperInner = styled.div`
  position: relative
`

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);  
`
