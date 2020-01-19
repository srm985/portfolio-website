import isMobileDevice, {
    MOBILE_BREAKPOINT
} from './isMobileDevice';

describe('Util isMobileDevice', () => {
    it(`should return true if viewport width is less than ${MOBILE_BREAKPOINT}px`, () => {
        const isMobile = isMobileDevice(MOBILE_BREAKPOINT - 100);

        expect(isMobile).toBe(true);
    });

    it(`should return false if viewport width is greater than ${MOBILE_BREAKPOINT}px`, () => {
        const isMobile = isMobileDevice(MOBILE_BREAKPOINT + 100);

        expect(isMobile).toBe(false);
    });

    it(`should return false if viewport width is equal to ${MOBILE_BREAKPOINT}px`, () => {
        const isMobile = isMobileDevice(MOBILE_BREAKPOINT);

        expect(isMobile).toBe(false);
    });
});
