import * as React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  return (
    <Layout>
      <main
        css={css`
          h1 {
            font-size: 3rem;
            margin-top: 5vh;
            border-bottom: 1rem solid black;
            max-width: 500px;
          }

          li {
            margin: 2rem 0;
          }
        `}
      >
        <h1>audioManager</h1>
        <ul>
          {posts.map(post => {
            return (
              <li key={post.id}>
                <Link to={post.slug}>{post.frontmatter.title}</Link>
                <p>Posted: {post.frontmatter.date}</p>
              </li>
            )
          })}
        </ul>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM DD YYYY")
          title
        }
        slug
        id
      }
    }
  }
`

export default IndexPage
