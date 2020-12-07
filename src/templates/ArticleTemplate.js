import PropTypes from 'prop-types';
import React from 'react';

import FAB from '../components/FABComponent';
import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';
import TextBlock from '../components/TextBlockComponent';
import Title from '../components/TitleComponent';

const ArticleTemplate = (props) => {
    const {
        content: {
            articleSectionList,
            articleTitle,
            heroImageBlock,
            returnButtonIcon: {
                publicURL = ''
            } = {},
            returnButtonLink = '',
            returnButtonScreenReaderLabel = ''
        }
    } = props;

    const {
        displayName
    } = ArticleTemplate;

    const renderedContentBlocks = articleSectionList.map((contentBlockDetails) => {
        const {
            articleSectionBody,
            articleSectionTitle
        } = contentBlockDetails;

        return (
            <Section key={articleSectionTitle}>
                <Grid>
                    <GridItem
                        breakpoints={{
                            extraLarge: {
                                start: 3,
                                stop: 11
                            },
                            medium: {
                                start: 2,
                                stop: 12
                            }
                        }}
                    >
                        <Title
                            className={'mb--1 mb-medium--3'}
                            heading={articleSectionTitle}
                            headingSize={2}
                            isAccented
                            isAnimated
                        />
                        <TextBlock
                            className={'article mb--8'}
                            isAnimated
                            text={articleSectionBody}
                        />
                    </GridItem>
                </Grid>
            </Section>
        );
    });

    return (
        <div className={displayName}>
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
                            heading={articleTitle}
                            headingClassName={'mb--2'}
                            headingSize={1}
                        />
                    </GridItem>
                </Grid>
            </Hero>
            {renderedContentBlocks}
            <FAB
                href={returnButtonLink}
                icon={publicURL}
                screenReaderLabel={returnButtonScreenReaderLabel}
            />
        </div>
    );
};

ArticleTemplate.displayName = 'ArticleTemplate';

ArticleTemplate.propTypes = {
    content: PropTypes.shape({
        articleSectionList: PropTypes.arrayOf(PropTypes.shape({
            articleSectionBody: PropTypes.string,
            articleSectionTitle: PropTypes.string
        })),
        articleTitle: PropTypes.string,
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
        returnButtonIcon: PropTypes.shape({
            publicURL: PropTypes.string
        }),
        returnButtonLink: PropTypes.string,
        returnButtonScreenReaderLabel: PropTypes.string
    })
};

ArticleTemplate.defaultProps = {
    content: {}
};

export default ArticleTemplate;
