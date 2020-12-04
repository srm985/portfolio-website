import {
    storiesOf
} from '@storybook/react';
import React from 'react';

import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';

import PortfolioItem from './index';

const stories = storiesOf(PortfolioItem.displayName, module);

stories.add('default', () => (
    <Grid>
        <GridItem
            breakpoints={{
                large: {
                    span: 3
                },
                medium: {
                    span: 6
                }
            }}
        >
            <PortfolioItem />
        </GridItem>
    </Grid>
));
