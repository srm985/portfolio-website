import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import Layout from './index';

const stories = storiesOf(Layout.displayName, module);

stories.add('expanded main', () => (
    <Layout>
        <div style={{
            backgroundColor: '#555'
        }}
        />
    </Layout>
));

stories.add('scrolling main', () => (
    <Layout>
        <div style={{
            backgroundColor: '#555',
            height: '1000px'
        }}
        />
    </Layout>
));
