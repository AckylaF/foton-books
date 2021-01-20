import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle(
  () => css`
    * {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Roboto', sans-serif;
      color: #333;
      background-color: #ffe207;
      padding: 1.5rem 1rem;
      -webkit-font-smoothing: antialiased;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    ul {
      list-style-type: none;
    }
  `
)

export default GlobalStyle
