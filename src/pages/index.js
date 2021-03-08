import * as React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'

const IndexPage = () => {
  return (
    <Layout>
      <main
        css={css`
          h1 {
            font-size: 3rem;
          }
        `}
      >
        <h1>audioManager</h1>
      </main>
    </Layout>
  )
}

export default IndexPage
