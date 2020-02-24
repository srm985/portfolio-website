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
            heroImageBlockPortfolioPage: {
                imageAlt = '',
                imageOpacity = 100,
                imageSource: {
                    childImageSharp: {
                        fluid = {}
                    } = {}
                } = {}
            } = {},
            projectList = [],
            projectDescriptionTitle = '',
            projectRoleTitle = '',
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
                    extraLarge: {
                        start: 3,
                        stop: 11
                    },
                    large: {
                        start: 2,
                        stop: 12
                    }
                }}
                key={slug}
            >
                <PortfolioItem
                    {...projectData}
                    projectDescriptionTitle={projectDescriptionTitle}
                    projectRoleTitle={projectRoleTitle}
                    viewProjectCTA={viewProjectCTA}
                />
            </GridItem>
        );
    });

    return (
        <>
            <Hero
                alt={imageAlt}
                defaultSource={fluid}
                imageOpacity={imageOpacity}
                isHalfHeight
            />
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
        heroImageBlockPortfolioPage: PropTypes.shape({
            imageAlt: PropTypes.string,
            imageOpacity: PropTypes.number,
            imageSource: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                    fluid: PropTypes.shape({})
                })
            })
        }),
        projectDescriptionTitle: PropTypes.string,
        projectList: PropTypes.arrayOf(PropTypes.shape({})),
        projectRoleTitle: PropTypes.string,
        viewProjectCTA: PropTypes.string
    })
};

PortfolioPageTemplate.defaultProps = {
    content: {}
};

export default PortfolioPageTemplate;
