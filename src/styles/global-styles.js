import { css } from '@emotion/react'

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --fontFamily: 'Fascinate', cursive;
  }

  body {
    font-family: var(--fontFamily);
  }
`
export default globalStyles
