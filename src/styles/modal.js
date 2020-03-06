import styled from 'styled-components'

export const Container = styled.div`  
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;  
  display: none;

  &.active {
    display: block;
  }

  .exit {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    margin: 0;
    padding: 0;
    background: ${props => props.theme.grey};

    img {
      width: 20px;
      height: 20px;
    }
  }

  form {
    display: grid;
    grid-template-rows: repeat(3, 40px);
    grid-gap: 20px;
    padding: 1rem 3rem;
  }
`
