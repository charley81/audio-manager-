import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const blogPostTemplate = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.image)

  return (
    <Layout>
      <p>Posted: {data.frontmatter.date}</p>
      <GatsbyImage image={image} alt="music" />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        date(formatString: "MMMM DD YYYY")
        title
        image {
          childrenImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default blogPostTemplate
