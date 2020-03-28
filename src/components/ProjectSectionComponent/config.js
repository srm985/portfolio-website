export const IMAGE_ALIGNMENT_FULL = 'full';
export const IMAGE_ALIGNMENT_LEFT_NARROW = 'left-narrow';
export const IMAGE_ALIGNMENT_LEFT_WIDE = 'left-wide';
export const IMAGE_ALIGNMENT_RIGHT_NARROW = 'right-narrow';
export const IMAGE_ALIGNMENT_RIGHT_WIDE = 'right-wide';

export const IMAGE_ALIGNMENT_OPTIONS = [
    IMAGE_ALIGNMENT_FULL,
    IMAGE_ALIGNMENT_LEFT_NARROW,
    IMAGE_ALIGNMENT_LEFT_WIDE,
    IMAGE_ALIGNMENT_RIGHT_NARROW,
    IMAGE_ALIGNMENT_RIGHT_WIDE
];

export const BREAKPOINTS_DEFAULT = {
    extraLarge: {
        start: 3,
        stop: 11
    },
    medium: {
        start: 2,
        stop: 12
    }
};

export const BREAKPOINTS_TEXT = {
    [IMAGE_ALIGNMENT_FULL]: BREAKPOINTS_DEFAULT,
    [IMAGE_ALIGNMENT_LEFT_NARROW]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 6,
            stop: 11
        },
        large: {
            start: 6,
            stop: 12
        }
    },
    [IMAGE_ALIGNMENT_LEFT_WIDE]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 8,
            stop: 11
        },
        large: {
            start: 8,
            stop: 12
        }
    },
    [IMAGE_ALIGNMENT_RIGHT_NARROW]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 3,
            stop: 8
        },
        large: {
            start: 2,
            stop: 8
        }
    },
    [IMAGE_ALIGNMENT_RIGHT_WIDE]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 3,
            stop: 6
        },
        large: {
            start: 2,
            stop: 6
        }
    }
};

export const BREAKPOINTS_IMAGE = {
    [IMAGE_ALIGNMENT_FULL]: BREAKPOINTS_DEFAULT,
    [IMAGE_ALIGNMENT_LEFT_NARROW]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 1,
            stop: 6
        },
        large: {
            start: 1,
            stop: 6
        }
    },
    [IMAGE_ALIGNMENT_LEFT_WIDE]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 1,
            stop: 8
        },
        large: {
            start: 1,
            stop: 8
        }
    },
    [IMAGE_ALIGNMENT_RIGHT_NARROW]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 8,
            stop: 13
        },
        large: {
            start: 8,
            stop: 13
        }
    },
    [IMAGE_ALIGNMENT_RIGHT_WIDE]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 6,
            stop: 13
        },
        large: {
            start: 6,
            stop: 13
        }
    }
};
