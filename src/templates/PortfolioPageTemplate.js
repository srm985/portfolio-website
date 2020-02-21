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
        projectList: PropTypes.arrayOf(PropTypes.shape({})),
        viewProjectCTA: PropTypes.string
    })
};

PortfolioPageTemplate.defaultProps = {
    content: {}
};

export default PortfolioPageTemplate;
