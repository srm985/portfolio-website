import React from 'react';
import {
    storiesOf
} from '@storybook/react';
import {
    boolean,
    number,
    text
} from '@storybook/addon-knobs';

import TitleComponent from './index';

const stories = storiesOf(TitleComponent.displayName, module);

stories.add('default', () => {
    const heading = text('heading', 'Heading');
    const isVisibilityForced = boolean('isVisibilityForced', false);

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
                        isVisibilityForced={isVisibilityForced}
                    />
                ))
            }
        </>
    );
});

stories.add('subheading', () => {
    const heading = text('heading', 'Well Hello There!');
    const headingSize = number('headingSize', 1);
    const isVisibilityForced = boolean('isVisibilityForced', false);
    const subheading = text('subheading', 'Magna anim proident esse cillum adipisicing.');

    return (
        <>
            <TitleComponent
                heading={heading}
                headingSize={headingSize}
                isVisibilityForced={isVisibilityForced}
                subheading={subheading}
            />
        </>
    );
});

stories.add('animated', () => {
    const heading = text('heading', 'Well Hello There!');
    const headingSize = number('headingSize', 1);
    const isVisibilityForced = boolean('isVisibilityForced', false);

    return (
        <>
            <TitleComponent
                heading={heading}
                headingSize={headingSize}
                isAnimated
                isVisibilityForced={isVisibilityForced}
            />
        </>
    );
});

stories.add('animated with subheading', () => {
    const heading = text('heading', 'Well Hello There!');
    const headingSize = number('headingSize', 1);
    const isVisibilityForced = boolean('isVisibilityForced', false);
    const subheading = text('subheading', 'Magna anim proident esse cillum adipisicing.');

    return (
        <>
            <TitleComponent
                heading={heading}
                headingSize={headingSize}
                isAnimated
                isVisibilityForced={isVisibilityForced}
                subheading={subheading}
            />
        </>
    );
});
