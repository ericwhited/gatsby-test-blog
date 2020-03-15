/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// This query grabs all of our MD files in the Posts folder.
// putting the query into a variable to make things more clean
const POST_ARCHIVE_QUERY = graphql`
# query name
  query BlogPostArchive {
    # query itself
      # limits the posts to 5 and starts the sort
      allMarkdownRemark(limit: 5, sort: {
        # sets the order that posts are sorted IN
        order: DESC,
        # sets what the posts are ordered BY
        fields: [frontmatter___date]
      }) {
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
