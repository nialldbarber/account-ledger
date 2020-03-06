import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const Controls = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;

  &.disabled {
    opacity: 0.4;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 5;
    }
  }

  p {
    margin: 0;
  }
`

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid black;
`
