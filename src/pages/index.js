import * as React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/react'
import { Link, graphql } from 'gatsby'

const IndexPage = ({ data }) => {
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
            padding: 1rem 0;
          }
        `}
      >
        <h1>audioManager</h1>
        <ul>
          {data.allMdx.nodes.map(node => {
            return (
              <li key={node.slug}>
                <article>
                  <h2>
                    <Link to={`/blog/${node.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </h2>
                  <p>Posted: {node.frontmatter.date}</p>
                </article>
                <hr />
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
          date(formatString: "MMMM DD, YYYY")
          title
        }
        slug
      }
    }
  }
`

export default IndexPage
