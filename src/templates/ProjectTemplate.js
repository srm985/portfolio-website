import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import FAB from '../components/FABComponent';
import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';

const ProjectTemplate = (props) => {
    const {
        content: {
            description = '',
            sectionBodyTechnology = '',
            sectionTitleTechnology = '',
            title = ''
        }
    } = props;

    console.log({
        props
    });

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
                <h3>{sectionTitleTechnology}</h3>
                <ReactMarkdown source={sectionBodyTechnology} />
            </Section>
            <FAB />
        </div>
    );
};

ProjectTemplate.displayName = 'ProjectTemplate';

ProjectTemplate.propTypes = {
    content: PropTypes.shape({
        description: PropTypes.string,
        sectionBodyTechnology: PropTypes.node,
        sectionTitleTechnology: PropTypes.string,
        title: PropTypes.string
    })
};

ProjectTemplate.defaultProps = {
    content: {}
};

export default ProjectTemplate;
