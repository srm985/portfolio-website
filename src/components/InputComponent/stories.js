import {
    select,
    text
} from '@storybook/addon-knobs';
import {
    storiesOf
} from '@storybook/react';
import React from 'react';

import {
    INPUT_TYPE_TEXT,
    INPUT_TYPES
} from './config';

import InputComponent from './index';

const stories = storiesOf(InputComponent.displayName, module);

stories.add('text - default', () => {
    const placeholder = text('placeholder', 'Type Something');

    const typeList = {};

    INPUT_TYPES.forEach((inputType) => {
        typeList[inputType] = inputType;
    });

    const type = select('type', typeList, INPUT_TYPE_TEXT);

    return (
        <InputComponent
            placeholder={placeholder}
            type={type}
        />
    );
}, {
    notes: 'testing'
});
