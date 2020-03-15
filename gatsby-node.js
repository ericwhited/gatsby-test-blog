// this helps create pages programmatically?
// path is from node
const path = require('path');

// gatsby build tool
exports.createPages = ({ graphql, actions}) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges{
                        node {
                            frontmatter {
                            slug
                            }
                        }
                    }
                }
            }
        `).then(results => {
            results.data.allMarkdownRemark.edges.forEach(({node}) =>{
                createPage({
                    path: `/posts${node.frontmatter.slug}`,
                    component: path.resolve('./src/components/postLayout.js'),
                    // lets us pass data into the template itself that we'll be able to query
                    context: {
                        // gonna use this slug to query off of
                        slug: node.frontmatter.slug
                    }
                });
            })
            resolve();
        })
    })

    
}