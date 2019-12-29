const destructureNetlifyCMS = (queryPayload = {}) => {
    const {
        allFile: {
            edges: [
                {
                    node: {
                        childMarkdownRemark: {
                            frontmatter: extractedPayload = {}
                        } = {}
                    } = {}
                } = {}
            ] = []
        } = {}
    } = queryPayload;

    return extractedPayload;
};

export default destructureNetlifyCMS;
