import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import IconComponent from './index';

import {
    logoIcon
} from '../../assets/icons';

const stories = storiesOf(IconComponent.displayName, module);

stories.add('default', () => (
    <IconComponent icon={logoIcon} />
));
