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
            aboutMeSectionImageBlock,
            aboutMeSectionTitle,
            heroImageBlock,
            heroSubtitle,
            heroTitle
        }
    } = props;

    return (
        <>
            <Hero
                heroImageBlock={heroImageBlock}
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
                            isAccented
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
                    aboutMeSectionImageBlock={aboutMeSectionImageBlock}
                    aboutMeSectionTitle={aboutMeSectionTitle}
                />
            </Section>
            <Section isDark>
                <Grid>
                    <GridItem
                        breakpoints={{
                            large: {
                                start: 1,
                                stop: 10
                            },
                            medium: {
                                start: 1,
                                stop: 11
                            }
                        }}
                    >
                        <SkillsBlock content={JSON.parse(JSON.stringify(content))} />
                    </GridItem>
                </Grid>
            </Section>
        </>
    );
};

IndexPageTemplate.propTypes = {
    content: PropTypes.shape({
        aboutMeSectionBody: PropTypes.string,
        aboutMeSectionImageBlock: PropTypes.shape({
            imageAlt: PropTypes.string,
            imageOpacity: PropTypes.number,
            imageSource: PropTypes.shape({
                childImageSharp: PropTypes.shape({
                    fluid: PropTypes.shape({})
                })
            })
        }),
        aboutMeSectionTitle: PropTypes.string,
        heroImageBlock: PropTypes.shape({}),
        heroSubtitle: PropTypes.string,
        heroTitle: PropTypes.string
    })
};

IndexPageTemplate.defaultProps = {
    content: {}
};

export default IndexPageTemplate;
