import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import IconComponent from './index';

const stories = storiesOf(IconComponent.displayName, module);

stories.add('default', () => {
    const clickEvent = () => {
        alert('icon clicked');
    };

    return (
        <IconComponent
            handleClick={clickEvent}
            icon={''}
        />
    );
});