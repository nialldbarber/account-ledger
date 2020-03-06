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

  .message {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    color: ${props => props.theme.white};
    background: linear-gradient(to right,${props => props.theme.darkBlue},${props => props.theme.lightBlue});

    p {
      margin: 0.5rem 1rem;
      text-transform: capitalize;
    }
  }

  .exit {
    position: absolute;
    right: 0.5rem;
    top: 0.3rem;
    margin: 0;
    padding: 0;
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
