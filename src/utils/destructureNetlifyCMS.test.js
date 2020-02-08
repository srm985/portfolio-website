import destructureNetlifyCMS from './destructureNetlifyCMS';

const MOCKED_RESPONSE_1 = {
    edges: [
        {
            node: {
                childMarkdownRemark: {
                    fields: {
                        additional: 123
                    },
                    frontmatter: {
                        bar: 1,
                        foo: 2
                    }
                }
            }
        }
    ]
};

const MOCKED_RESPONSE_2 = {
    edges: [
        {
            node: {
                childMarkdownRemark: {
                    fields: {
                        additional: 123
                    },
                    frontmatter: {
                        bar: 1,
                        foo: 2
                    }
                }
            }
        },
        {
            node: {
                childMarkdownRemark: {
                    fields: {
                        additional: 123
                    },
                    frontmatter: {
                        bar: 1,
                        foo: 2
                    }
                }
            }
        }
    ]
};

describe('Util destructureNetlifyCMS', () => {
    it('should return object keys when present', () => {
        const [
            payload
        ] = destructureNetlifyCMS(MOCKED_RESPONSE_1);

        expect(Object.keys(payload).length).toBe(3);
    });

    it('should return an empty object if keys are missing', () => {
        const [
            payload
        ] = destructureNetlifyCMS();

        expect(typeof payload).toBe('object');
        expect(Object.keys(payload).length).toBe(0);
    });

    it('should return an array of two multiple objects if multiple edges are provided', () => {
        const payloadList = destructureNetlifyCMS(MOCKED_RESPONSE_2);

        const [
            payload1,
            payload2
        ] = payloadList;

        expect(Object.keys(payloadList).length).toBe(2);
        expect(Object.keys(payload1).length).toBe(3);
        expect(Object.keys(payload2).length).toBe(3);
    });
});
