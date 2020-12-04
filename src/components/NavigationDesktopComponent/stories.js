import {
    storiesOf
} from '@storybook/react';
import React from 'react';

import NavigationComponent from './index';

const stories = storiesOf(NavigationComponent.displayName, module);

stories.add('default', () => {
    const MOCKED_QUERY = {
        edges: [
            {
                node: {
                    childMarkdownRemark: {
                        frontmatter: {
                            logoCopy: 'Demo Navigation',
                            navigationLinks: [
                                {
                                    pageName: 'DEMO_1',
                                    pageURL: ''
                                },
                                {
                                    pageName: 'DEMO_2',
                                    pageURL: ''
                                }
                            ]
                        }
                    }
                }
            }
        ]
    };

    return (
        <div>
            <NavigationComponent data={MOCKED_QUERY} />
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
