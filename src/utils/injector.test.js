import injector from './injector';

describe('injector', () => {
    it('should replace tokens with given values', () => {
        const TOKENIZED_STRING = 'Magna magna aliqua non {foo} nulla enim aute {bar} quis in duis.';
        const INJECTED_STRING_EXPECTED = 'Magna magna aliqua non deserunt nulla enim aute nostrud quis in duis.';

        const tokenList = {
            bar: 'nostrud',
            foo: 'deserunt'
        };

        const injectedString = injector(TOKENIZED_STRING, tokenList);

        expect(injectedString).toBe(INJECTED_STRING_EXPECTED);
    });
});
