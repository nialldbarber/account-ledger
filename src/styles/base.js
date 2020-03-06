import { createGlobalStyle } from 'styled-components'
import { fontFaces } from 'styles/font'
import { borderMixin } from 'styles/utils/mixins'
import { perspectiveChange } from 'styles/utils/keyframes'

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
    
    background-repeat: repeat;
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.font};

    background: linear-gradient(270deg, #6feae6, #f6a3ef);
    background-size: 400% 400%;
    animation: ${perspectiveChange} 3s ease infinite;
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
    max-width: 750px;
    background: ${props => props.theme.grey};
    margin: 4rem auto;    
    background-color: silver;
    padding: 3rem 1rem 1rem 1rem;
    ${borderMixin};
  }
`
