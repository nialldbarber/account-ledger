import styled from 'styled-components'

export const Container = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &.active {
    opacity: 1;
  }
`
