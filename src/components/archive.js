/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
# query name
  query BlogPostArchive {
    # query itself
      allMarkdownRemark {
        edges{
          node {
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `

const Archive = ({ children }) => {
  // data is the result of this query
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <>
      <aside>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>{edge.node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
        <h3>Archive</h3>
      </aside>
    </>
  )
}

export default Archive
