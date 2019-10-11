import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import FABComponent from './index';

const stories = storiesOf(FABComponent.displayName, module);

stories.add('default', () => (
    <FABComponent
        handleClick={() => alert('clicked')}
    />
));
