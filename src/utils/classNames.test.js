import classNames from './classNames';

describe('Util classNames', () => {
    it('should return an empty string if no arguments are passed', () => {
        expect(classNames()).toBe('');
    });

    it('should return one string if one string is passed', () => {
        expect(classNames('foo')).toBe('foo');
    });

    it('should return multiple strings if multiple passed', () => {
        expect(classNames(
            'foo',
            'bar'
        )).toBe('foo bar');
    });

    it('should return strings and evaluated object values if passed', () => {
        expect(classNames(
            'foo',
            'bar',
            {
                functionalTrue: () => true,
                isFalse: false,
                test: true
            }
        )).toBe('foo bar functionalTrue test');
    });

    it('should ignore truthy and falsy values if passed', () => {
        expect(classNames(
            'foo',
            false,
            null,
            true,
            undefined,
            {
                bar: null,
                test: 'something'
            }
        )).toBe('foo test');
    });
});
