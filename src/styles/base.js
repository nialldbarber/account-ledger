import { createGlobalStyle } from 'styled-components'
import { fontFaces } from 'styles/font'
import { borderMixin } from 'styles/utils/mixins'
import background from 'assets/cool-background.png'
import fire from 'assets/divider.gif'

export const GlobalStyle = createGlobalStyle`
  ${fontFaces};

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
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.font};

    &:after {
      content: '';
      position: absolute;
      background-image: url(${fire});
      bottom: 0;
      left: 0;
      right: 0;
      height: 50px;
    }
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
    padding: 0 1rem;
    font-size: 1rem;
    font-family: ${props => props.theme.font};
  }

  button {
    appearance: none;
    outline: none;
    border: none;
    cursor: pointer;
  }

  main {
    max-width: 720px;
    background: ${props => props.theme.grey};
    margin: 5rem auto 0rem;
    background-color: silver;
    padding: 3rem 1rem 1rem 1rem;
    ${borderMixin};
  }
`
