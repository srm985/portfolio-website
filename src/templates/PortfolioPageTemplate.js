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
            heroImagePortfolioPage: {
                childImageSharp: {
                    fluid = {}
                } = {}
            } = {},
            heroImageOpacityPortfolioPage,
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
                    extraLarge: {
                        columns: 6,
                        leftOffset: 0,
                        rightOffset: 0
                    },
                    large: {
                        columns: 8,
                        leftOffset: 2,
                        rightOffset: 2
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
            <Hero
                alt={'placeholder image'}
                defaultSource={fluid}
                imageOpacity={heroImageOpacityPortfolioPage}
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
        heroImageOpacityPortfolioPage: PropTypes.number,
        heroImagePortfolioPage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        }),
        projectList: PropTypes.arrayOf(PropTypes.shape({})),
        viewProjectCTA: PropTypes.string
    })
};

PortfolioPageTemplate.defaultProps = {
    content: {}
};

export default PortfolioPageTemplate;
