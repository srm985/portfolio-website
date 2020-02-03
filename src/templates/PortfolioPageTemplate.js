import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import ProjectTile from '../components/ProjectTileComponent';
import Section from '../components/SectionComponent';
import Hero from '../components/HeroComponent';

const PortfolioPageTemplate = (props) => {
    const {
        projectList
    } = props;

    const gridValues = {
        medium: {
            end: 4,
            start: 1
        }
    };

    const renderProjectTiles = () => projectList.map((projectData) => {
        const GRID_WIDTH = 12;
        const GRID_WIDTH_MEDIUM = 3;

        const {
            projectTitle = ''
        } = projectData;

        const {
            medium: {
                end: mediumEnd,
                start: mediumStart
            }
        } = gridValues;

        // Update and potentially wrap grid values.
        gridValues.medium.end = mediumEnd + GRID_WIDTH_MEDIUM + 1 > GRID_WIDTH ? GRID_WIDTH_MEDIUM + 1 : mediumEnd + GRID_WIDTH_MEDIUM + 1;
        gridValues.medium.start = mediumStart + GRID_WIDTH_MEDIUM + 1 > GRID_WIDTH ? 1 : mediumStart + GRID_WIDTH_MEDIUM + 1;

        return (
            <GridItem
                columns={{
                    medium: [
                        mediumStart,
                        mediumEnd
                    ]
                }}
                key={projectTitle}
            >
                <ProjectTile />
            </GridItem>
        );
    });

    return (
        <>
            <Hero isHalfHeight />
            <Section isDark>
                <Grid>
                    {renderProjectTiles()}
                </Grid>
            </Section>
        </>
    );
};

PortfolioPageTemplate.propTypes = {
    projectList: PropTypes.arrayOf(PropTypes.number)
};

PortfolioPageTemplate.defaultProps = {
    projectList: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10
    ]
};

export default PortfolioPageTemplate;
