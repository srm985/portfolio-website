import {
    storiesOf
} from '@storybook/react';
import React from 'react';

import {
    logoIcon
} from '../../assets/icons';

import IconComponent from './index';

const stories = storiesOf(IconComponent.displayName, module);

stories.add('default', () => (
    <IconComponent icon={logoIcon} />
));
