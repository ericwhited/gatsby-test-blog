import React, { Component } from 'react'
import Layout from './layout';
import { graphql } from 'gatsby';


export default class postLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data;

        return (
            <Layout>
                <h1>{markdownRemark.frontmatter.title}</h1>
                {/* dangerouslySetInnerHTML is a react thing */}
                <div dangerouslySetInnerHTML={{
                    __html: markdownRemark.html
                }} />
            </Layout>
        )
    }
}

export const query = graphql`
# $slug is a parameter, String is the type and ! means that it is required.
#  QueryName($param: type
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: {
            slug: {
            # eq is equal to and is gatsby specific       
            eq: $slug
            }
            }) {
                html
                frontmatter {
                title
                date
                slug
                }
            }
}
`