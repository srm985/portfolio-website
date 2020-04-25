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
                const pageName = slug.replace(PROJECT_SLUG, '').replace(/^\//, '');

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

exports.createSchemaCustomization = ({
    actions
}) => {
    const {
        createTypes
    } = actions;
    const typeDefs = `
        type MarkdownRemark implements Node {
            frontmatter: Frontmatter
        }
        type Frontmatter {
            heroImageBlock: HeroImageBlock
            pageSEO: PageSEO
        }
        type HeroImageBlock {
            citation: Citation
            imageAlt: String
            imageOpacity: Int
            imageTitle: String
            imageAlignment: String
        }
        type Citation {
            authorLink: String
            authorName: String
            hostingSiteLink: String
            hostingSiteName: String
            isCited: Boolean
        }
        type PageSEO {
            pageAuthor: String
            pageDescription: String
            pageImage: String
            pageKeywords: String
            pageSiteURL: String
            pageTitle: String
            pageType: String
        }
    `;
    createTypes(typeDefs);
};
