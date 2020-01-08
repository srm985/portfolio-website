import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import HeaderComponent from './index';

const stories = storiesOf(HeaderComponent.displayName, module);

stories.add('default', () => {
    const MOCKED_QUERY = {
        edges: [
            {
                node: {
                    childMarkdownRemark: {
                        frontmatter: {
                            headerLinks: [
                                {
                                    pageName: 'DEMO_1',
                                    pageURL: ''
                                },
                                {
                                    pageName: 'DEMO_2',
                                    pageURL: ''
                                }
                            ],
                            logoCopy: 'Demo Header'
                        }
                    }
                }
            }
        ]
    };

    return (
        <div>
            <HeaderComponent data={MOCKED_QUERY} />
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
    );
});
