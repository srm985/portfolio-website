import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Button from '../components/ButtonComponent';
import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';
import SkillsBlock from '../components/SkillsBlockComponent';

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
            aboutMeSectionBody = '',
            aboutMeSectionTitle = '',
            heroImage: {
                childImageSharp: {
                    fluid
                } = {}
            } = {},
            heroSubtitle,
            heroTitle
        }
    } = props;

    return (
        <>
            <Hero
                alt={'placeholder image'}
                defaultSource={fluid}
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
                        <h1 className={'mb--2'}>{heroTitle}</h1>
                        <h2 className={'mb--5'}>{heroSubtitle}</h2>
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
                            label={'Contact Me'}
                            styleType={BUTTON_STYLE_TYPE_SECONDARY}
                        />
                    </GridItem>
                </Grid>
            </Hero>
            <Section>
                <h3 className={'mb--2'}>{aboutMeSectionTitle}</h3>
                <ReactMarkdown source={aboutMeSectionBody} />
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
        aboutMeSectionTitle: PropTypes.string,
        heroImage: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        }),
        heroSubtitle: PropTypes.string,
        heroTitle: PropTypes.string
    })
};

IndexPageTemplate.defaultProps = {
    content: {}
};

export default IndexPageTemplate;
