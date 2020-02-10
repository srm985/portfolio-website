import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';

const ProjectTemplate = (props) => {
    const {
        content: {
            body,
            description = '',
            title = ''
        }
    } = props;

    const {
        displayName
    } = ProjectTemplate;

    return (
        <div className={displayName}>
            <Hero isHalfHeight>
                <Grid>
                    <GridItem
                        breakpoints={{
                            medium: {
                                start: 1,
                                stop: 9
                            }
                        }}
                    >
                        <h1>{title}</h1>
                        <h2>{description}</h2>
                    </GridItem>
                </Grid>
            </Hero>
            <Section>
                {body}
            </Section>
        </div>
    );
};

ProjectTemplate.displayName = 'ProjectTemplate';

ProjectTemplate.propTypes = {
    content: PropTypes.shape({
        body: PropTypes.node,
        description: PropTypes.string,
        title: PropTypes.string
    })
};

ProjectTemplate.defaultProps = {
    content: {}
};

export default ProjectTemplate;
