const PROJECT_SLUG = 'projects';
const path = require('path');

const {
    createFilePath
} = require('gatsby-source-filesystem');

exports.onCreateNode = (props) => {
    const {
        actions: {
            createNodeField
        },
        getNode,
        node,
        node: {
            internal: {
                type: internalNodeType
            }
        }
    } = props;

    if (internalNodeType === 'MarkdownRemark') {
        const slug = createFilePath({
            basePath: 'pages',
            getNode,
            node
        });

        createNodeField({
            name: 'slug',
            node,
            value: slug
        });
    }
};

exports.createPages = async (props) => {
    const {
        actions: {
            createPage
        },
        graphql
    } = props;

    const {
        data: {
            allMarkdownRemark: {
                edges
            }
        }
    } = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);

    edges.forEach((nodeData) => {
        const {
            node: {
                fields: nodeFields
            }
        } = nodeData;

        const convertSlugToPathName = (slug) => slug.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)+/g, '');

        if (nodeFields && Object.keys(nodeFields).length) {
            const {
                slug
            } = nodeFields;

            const isProjectSlug = slug.includes(PROJECT_SLUG);

            // Create pages for projects.
            if (isProjectSlug) {
                const pageName = slug.replace(PROJECT_SLUG, '').replace(/\//g, '');

                createPage({
                    component: path.resolve('./src/connected/ProjectTemplateConnected.js'),
                    context: {
                        slug
                    },
                    path: `/${PROJECT_SLUG}/${convertSlugToPathName(pageName)}`
                });
            }
        }
    });
};
