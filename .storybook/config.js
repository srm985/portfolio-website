import {
    withConsole
} from '@storybook/addon-console';
import {
    addDecorator,
    configure
} from '@storybook/react';
import {
    withInfo
} from '@storybook/addon-info';
import {
    withKnobs
} from '@storybook/addon-knobs';

// This must be first decorator.
addDecorator(withInfo);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withKnobs);

const requiredStories = require.context('../src/components/', true, /stories\.js$/);

const loadStories = () => {
    requiredStories.keys().forEach(requiredStories);
};

configure(loadStories, module);
