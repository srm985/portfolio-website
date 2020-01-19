const {
    createFilePath
} = require('gatsby-source-filesystem');

exports.onCreateNode = ({
    node, getNode, actions
}) => {
    const {
        createNodeField
    } = actions;
    if (node.internal.type === 'MarkdownRemark') {
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
