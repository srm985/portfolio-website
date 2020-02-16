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
    const headingSize = number('headingSize', 1);
    const isVisibilityForced = boolean('isVisibilityForced', false);
    const title = text('title', 'Well Hello There!');

    return (
        <>
            <TitleComponent
                headingSize={headingSize}
                isVisibilityForced={isVisibilityForced}
                title={title}
            />
        </>
    );
});
