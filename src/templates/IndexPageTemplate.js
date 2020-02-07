import PropTypes from 'prop-types';
import React from 'react';

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
                        columns={{
                            large: [
                                1,
                                9
                            ],
                            medium: [
                                1,
                                11
                            ]
                        }}
                    >
                        <h1 className={'mb--2'}>{heroTitle}</h1>
                        <h2 className={'mb--5'}>{heroSubtitle}</h2>
                    </GridItem>
                    <GridItem
                        columns={{
                            medium: [
                                1,
                                4
                            ]
                        }}
                    >
                        <Button
                            label={'Résumé'}
                            styleType={BUTTON_STYLE_TYPE_SECONDARY}
                        />
                    </GridItem>
                    <GridItem
                        columns={{
                            medium: [
                                4,
                                7
                            ]
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
                <Grid>
                    <GridItem
                        columns={{
                            large: [
                                1,
                                9
                            ],
                            medium: [
                                1,
                                11
                            ]
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
