import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/ButtonComponent';
import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';
import SkillsBlock from '../components/SkillsBlockComponent';
import Title from '../components/TitleComponent';
import WhoIAm from '../components/WhoIAmComponent';

import {
    BUTTON_STYLE_TYPE_SECONDARY
} from '../components/ButtonComponent/config';
import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

const IndexPageTemplate = (props) => {
    const {
        content,
        content: {
            aboutMeSectionBody,
            aboutMeSectionImage,
            aboutMeSectionTitle,
            heroImage: {
                childImageSharp: {
                    fluid = {}
                } = {}
            } = {},
            heroImageOpacityHomePage,
            heroSubtitle,
            heroTitle
        }
    } = props;

    return (
        <>
            <Hero
                alt={'placeholder image'}
                defaultSource={fluid}
                imageOpacity={heroImageOpacityHomePage}
                overlayColor={OVERLAY_BLACK}
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
                            className={'mb--5'}
                            heading={heroTitle}
                            headingClassName={'mb--2'}
                            headingSize={1}
                            subheading={heroSubtitle}
                        />
                    </GridItem>
                    <GridItem
                        breakpoints={{
                            large: {
                                start: 1,
                                stop: 3
                            },
                            medium: {
                                start: 1,
                                stop: 4
                            }
                        }}
                    >
                        <Button
                            isColorProfileDark={false}
                            label={'Résumé'}
                            styleType={BUTTON_STYLE_TYPE_SECONDARY}
                        />
                    </GridItem>
                    <GridItem
                        breakpoints={{
                            large: {
                                start: 3,
                                stop: 5
                            },
                            medium: {
                                start: 4,
                                stop: 7
                            }
                        }}
                    >
                        <Button
                            isColorProfileDark={false}
                            label={'Contact Me'}
                            styleType={BUTTON_STYLE_TYPE_SECONDARY}
                        />
                    </GridItem>
                </Grid>
            </Hero>
            <Section isFullBleed>
                <WhoIAm
                    aboutMeSectionBody={aboutMeSectionBody}
                    aboutMeSectionImage={aboutMeSectionImage}
                    aboutMeSectionTitle={aboutMeSectionTitle}
                />
            </Section>
            <Section isDark>
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
                        <SkillsBlock content={content} />
                    </GridItem>
                </Grid>
            </Section>
        </>
    );
};

IndexPageTemplate.propTypes = {
    content: PropTypes.shape({
        aboutMeSectionBody: PropTypes.string,
        aboutMeSectionImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        }),
        aboutMeSectionTitle: PropTypes.string,
        heroImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        }),
        heroImageOpacityHomePage: PropTypes.number,
        heroSubtitle: PropTypes.string,
        heroTitle: PropTypes.string
    })
};

IndexPageTemplate.defaultProps = {
    content: {}
};

export default IndexPageTemplate;
