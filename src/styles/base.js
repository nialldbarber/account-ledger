import { createGlobalStyle } from 'styled-components'
import background from 'assets/background.jpg'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;

    &:before, 
    &:after {
      box-sizing: inherit;
    }
  }

  html {
    box-sizing: border-box;
  }

  body {
    position: relative;
    background-image: url(${background});
    background-repeat: repeat;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font};
  }

  a {
    text-decoration: none;
    transition: color .1s ease;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  input,
  textarea {
    border: none;
    outline: none;
  }

  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  main {
    max-width: 800px;
    background: white;
    margin: 4rem auto;
    border: 5px solid black;
  }
`
