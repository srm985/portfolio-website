import {
    number,
    text
} from '@storybook/addon-knobs';
import {
    storiesOf
} from '@storybook/react';
import React from 'react';

import TitleComponent from './index';

const stories = storiesOf(TitleComponent.displayName, module);

stories.add('default', () => {
    const heading = text('heading', 'Heading');

    const headingSizes = [
        1,
        2,
        3,
        4,
        5,
        6
    ];

    return (
        <>
            {
                headingSizes.map((headingSize) => (
                    <TitleComponent
                        className={'mb--2'}
                        heading={`${heading} - H${headingSize}`}
                        headingSize={headingSize}
                        isAccented
                    />
                ))
            }
        </>
    );
});

stories.add('subheading', () => {
    const heading = text('heading', 'Well Hello There!');
    const headingSize = number('headingSize', 1);
    const subheading = text('subheading', 'Magna anim proident esse cillum adipisicing.');

    return (
        <TitleComponent
            heading={heading}
            headingSize={headingSize}
            isAccented
            subheading={subheading}
        />
    );
});

stories.add('animated', () => {
    const heading = text('heading', 'Well Hello There!');
    const headingSize = number('headingSize', 1);

    return (
        <TitleComponent
            heading={heading}
            headingSize={headingSize}
            isAccented
            isAnimated
        />
    );
});

stories.add('animated with subheading', () => {
    const heading = text('heading', 'Well Hello There!');
    const headingSize = number('headingSize', 1);
    const subheading = text('subheading', 'Magna anim proident esse cillum adipisicing.');

    return (
        <TitleComponent
            heading={heading}
            headingSize={headingSize}
            isAccented
            isAnimated
            subheading={subheading}
        />
    );
});
