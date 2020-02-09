import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import PortfolioItem from '../components/PortfolioItemComponent';
import Section from '../components/SectionComponent';
import Hero from '../components/HeroComponent';

const PortfolioPageTemplate = (props) => {
    const {
        content: {
            projectList = [],
            viewProjectCTA = ''
        }
    } = props;

    const renderProjectTiles = () => projectList.map((projectData) => {
        const {
            slug
        } = projectData;

        return (
            <GridItem
                breakpoints={{
                    large: {
                        columns: 6
                    }
                }}
                key={slug}
            >
                <PortfolioItem
                    {...projectData}
                    viewProjectCTA={viewProjectCTA}
                />
            </GridItem>
        );
    });

    return (
        <>
            <Hero isHalfHeight />
            <Section>
                <Grid>
                    {renderProjectTiles()}
                </Grid>
            </Section>
        </>
    );
};

PortfolioPageTemplate.propTypes = {
    content: PropTypes.shape({
        projectList: PropTypes.arrayOf(PropTypes.shape({})),
        viewProjectCTA: PropTypes.string
    })
};

PortfolioPageTemplate.defaultProps = {
    content: {}
};

export default PortfolioPageTemplate;
