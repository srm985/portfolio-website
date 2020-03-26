export const IMAGE_ALIGNMENT_FULL = 'full';
export const IMAGE_ALIGNMENT_LEFT = 'left';
export const IMAGE_ALIGNMENT_MIDDLE = 'middle';
export const IMAGE_ALIGNMENT_RIGHT = 'right';

export const IMAGE_ALIGNMENT_OPTIONS = [
    IMAGE_ALIGNMENT_FULL,
    IMAGE_ALIGNMENT_LEFT,
    IMAGE_ALIGNMENT_MIDDLE,
    IMAGE_ALIGNMENT_RIGHT
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
    [IMAGE_ALIGNMENT_LEFT]: {
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
    [IMAGE_ALIGNMENT_MIDDLE]: BREAKPOINTS_DEFAULT,
    [IMAGE_ALIGNMENT_RIGHT]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 3,
            stop: 8
        },
        large: {
            start: 2,
            stop: 8
        }
    }
};

export const BREAKPOINTS_IMAGE = {
    [IMAGE_ALIGNMENT_FULL]: BREAKPOINTS_DEFAULT,
    [IMAGE_ALIGNMENT_LEFT]: {
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
    [IMAGE_ALIGNMENT_MIDDLE]: BREAKPOINTS_DEFAULT,
    [IMAGE_ALIGNMENT_RIGHT]: {
        ...BREAKPOINTS_DEFAULT,
        extraLarge: {
            start: 8,
            stop: 13
        },
        large: {
            start: 8,
            stop: 13
        }
    }
};
