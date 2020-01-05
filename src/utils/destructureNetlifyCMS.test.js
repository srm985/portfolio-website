import destructureNetlifyCMS from './destructureNetlifyCMS';

const MOCKED_RESPONSE = {
    edges: [
        {
            node: {
                childMarkdownRemark: {
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
        const payload = destructureNetlifyCMS(MOCKED_RESPONSE);

        expect(Object.keys(payload).length).toBe(2);
    });

    it('should return an empty object if keys are missing', () => {
        const payload = destructureNetlifyCMS();

        expect(typeof payload).toBe('object');
        expect(Object.keys(payload).length).toBe(0);
    });
});
