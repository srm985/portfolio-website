import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    text
} from '@storybook/addon-knobs';

import LayoutComponent from './index';

const stories = storiesOf(LayoutComponent.displayName, module);

stories.add('with text', () => {
    const label = text('Label', 'Hello World');

    return (<LayoutComponent>{label}</LayoutComponent>);
});
