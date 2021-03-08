import React from 'react'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import globalStyles from '../styles/global-styles'

const Wrap = styled.div`
  padding: 1rem;
`

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Global styles={globalStyles} />
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </Wrap>
  )
}

export default Layout
