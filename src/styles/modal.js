import styled from 'styled-components'
import { buttonMixin } from 'styles/utils/mixins'

export const Container = styled.div`  
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;  

  &.active {
    display: block;
  }

  .message {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    color: ${props => props.theme.white};
    background: linear-gradient(to right, ${props => props.theme.darkBlue}, ${props => props.theme.lightBlue});

    p {
      margin: 0.5rem 1rem;
      text-transform: capitalize;
    }
  }

  .exit {
    position: absolute;
    right: 0.5rem;
    top: 0.2rem;
    margin: 0;
    padding: 0;
    ${buttonMixin};

    img {
      width: 100%;
      height: auto;
      padding: 5px;
    }
  }

  form {
    display: grid;
    grid-template-rows: repeat(3, 40px);
    grid-gap: 20px;
    padding: 6rem 3rem 5rem;
  }
`
