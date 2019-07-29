import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import HeaderComponent from './index';

const stories = storiesOf(HeaderComponent.displayName, module);

stories.add('default', () => (
    <div>
        <HeaderComponent />
        <div style={{
            backgroundColor: '#333',
            height: '500px'
        }}
        />
        <div style={{
            backgroundColor: 'white',
            height: '500px'
        }}
        />
        <div style={{
            backgroundColor: 'blue',
            height: '500px'
        }}
        />
        <div style={{
            backgroundColor: 'orange',
            height: '500px'
        }}
        />
    </div>
));
