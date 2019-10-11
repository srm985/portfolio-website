import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import LoadingIndicatorComponent from './index';

const stories = storiesOf(LoadingIndicatorComponent.displayName, module);

stories.add('full-screen', () => (
    <LoadingIndicatorComponent
        isFullScreen
        isVisible
    />
));

stories.add('bounded', () => (
    <div
        style={{
            border: 'solid 3px black',
            height: '200px',
            width: '200px'
        }}
    >
        <LoadingIndicatorComponent
            isFullScreen={false}
            isVisible
        />
    </div>
));
