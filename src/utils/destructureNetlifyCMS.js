const destructureNetlifyCMS = (queryPayload = {}) => {
    const {
        edges: [
            {
                node: {
                    childMarkdownRemark: {
                        frontmatter: extractedPayload = {}
                    } = {}
                } = {}
            } = {}
        ] = []
    } = queryPayload;

    return extractedPayload;
};

export default destructureNetlifyCMS;
