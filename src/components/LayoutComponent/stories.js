import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    text
} from '@storybook/addon-knobs';

import Layout from './index';

const stories = storiesOf(Layout.displayName, module);

stories.add('with text', () => {
    const label = text('Label', 'Hello World');

    return (<Layout>{label}</Layout>);
});
