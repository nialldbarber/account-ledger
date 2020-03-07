import styled from 'styled-components'
import { buttonMixin } from 'styles/utils/mixins'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .controls {
    margin-top: 1rem;
  }

  hr {
    margin-left: 2rem;
  }
`

export const Controls = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
  border: 1px solid ${props => props.theme.black};
  font-size: 1.5rem;
  margin-left: 1rem;
  ${buttonMixin};
  width: 30px;
  height: 30px;
  margin-left: 1rem;
`
