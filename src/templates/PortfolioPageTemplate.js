import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import PortfolioItem from '../components/PortfolioItemComponent';
import Section from '../components/SectionComponent';
import Title from '../components/TitleComponent';

function PortfolioPageTemplate(props) {
    const {
        content: {
            heroImageBlock,
            portfolioPageHeroSubtitle = '',
            portfolioPageHeroTitle = '',
            projectDescriptionTitle = '',
            projectList = [],
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
                    className={'mt--6 mt-medium--10'}
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
                heroImageBlock={heroImageBlock}
                isHalfHeight
            >
                <Grid>
                    <GridItem
                        breakpoints={{
                            large: {
                                start: 1,
                                stop: 9
                            },
                            medium: {
                                start: 1,
                                stop: 11
                            }
                        }}
                    >
                        <Title
                            heading={portfolioPageHeroTitle}
                            headingClassName={'mb--2'}
                            headingSize={1}
                            isAccented
                            subheading={portfolioPageHeroSubtitle}
                        />
                    </GridItem>
                </Grid>
            </Hero>
            <Section isMedium>
                <Grid>
                    {renderProjectTiles()}
                </Grid>
            </Section>
        </>
    );
}

PortfolioPageTemplate.propTypes = {
    content: PropTypes.shape({
        heroImageBlock: PropTypes.shape({
            imageAlt: PropTypes.string,
            imageOpacity: PropTypes.number,
            imageSource: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                    fluid: PropTypes.shape({})
                })
            }),
            imageTitle: PropTypes.string
        }),
        portfolioPageHeroSubtitle: PropTypes.string,
        portfolioPageHeroTitle: PropTypes.string,
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
