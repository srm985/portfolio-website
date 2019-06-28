import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    select,
    text
} from '@storybook/addon-knobs';

import ButtonComponent from './index';

import {
    BUTTON_STYLE_TYPE_INLINE,
    BUTTON_STYLE_TYPE_PRIMARY,
    BUTTON_STYLE_TYPE_SECONDARY,
    BUTTON_STYLE_TYPES
} from './config';

const stories = storiesOf(ButtonComponent.displayName, module);

stories.add('button - inline', () => {
    const label = text('label', 'Inline Button');

    const styleTypeList = {};

    BUTTON_STYLE_TYPES.forEach((styleType) => {
        styleTypeList[styleType] = styleType;
    });

    const styleType = select('styleType', styleTypeList, BUTTON_STYLE_TYPE_INLINE);

    return (
        <ButtonComponent
            label={label}
            styleType={styleType}
        />
    );
});

stories.add('button - primary', () => {
    const label = text('label', 'Primary Button');

    const styleTypeList = {};

    BUTTON_STYLE_TYPES.forEach((styleType) => {
        styleTypeList[styleType] = styleType;
    });

    const styleType = select('styleType', styleTypeList, BUTTON_STYLE_TYPE_PRIMARY);

    return (
        <ButtonComponent
            label={label}
            styleType={styleType}
        />
    );
});

stories.add('button - secondary', () => {
    const label = text('label', 'Secondary Button');

    const styleTypeList = {};

    BUTTON_STYLE_TYPES.forEach((styleType) => {
        styleTypeList[styleType] = styleType;
    });

    const styleType = select('styleType', styleTypeList, BUTTON_STYLE_TYPE_SECONDARY);

    return (
        <ButtonComponent
            label={label}
            styleType={styleType}
        />
    );
});

stories.add('link - inline', () => {
    const label = text('label', 'Inline Button');

    const styleTypeList = {};

    BUTTON_STYLE_TYPES.forEach((styleType) => {
        styleTypeList[styleType] = styleType;
    });

    const styleType = select('styleType', styleTypeList, BUTTON_STYLE_TYPE_INLINE);

    return (
        <ButtonComponent
            href={'#'}
            label={label}
            styleType={styleType}
        />
    );
});

stories.add('link - primary', () => {
    const label = text('label', 'Primary Button');

    const styleTypeList = {};

    BUTTON_STYLE_TYPES.forEach((styleType) => {
        styleTypeList[styleType] = styleType;
    });

    const styleType = select('styleType', styleTypeList, BUTTON_STYLE_TYPE_PRIMARY);

    return (
        <ButtonComponent
            href={'#'}
            label={label}
            styleType={styleType}
        />
    );
});

stories.add('link - secondary', () => {
    const label = text('label', 'Secondary Button');

    const styleTypeList = {};

    BUTTON_STYLE_TYPES.forEach((styleType) => {
        styleTypeList[styleType] = styleType;
    });

    const styleType = select('styleType', styleTypeList, BUTTON_STYLE_TYPE_SECONDARY);

    return (
        <ButtonComponent
            href={'#'}
            label={label}
            styleType={styleType}
        />
    );
});
