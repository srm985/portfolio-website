const destructureNetlifyCMS = (queryPayload = {}) => {
    const {
        edges = []
    } = queryPayload;

    const extractedFieldsList = edges.map((edge) => {
        const {
            node: {
                childMarkdownRemark: {
                    fields = {},
                    frontmatter = {}
                } = {}
            } = {}
        } = edge;

        return ({
            ...fields,
            ...frontmatter
        });
    });

    const [
        firstEntry
    ] = extractedFieldsList;

    return firstEntry ? extractedFieldsList : [
        {}
    ];
};

export default destructureNetlifyCMS;
