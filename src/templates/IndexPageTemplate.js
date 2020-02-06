import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/ButtonComponent';
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
                <h1 className={'mb--2'}>{heroTitle}</h1>
                <h2 className={'mb--5'}>{heroSubtitle}</h2>
                <Button
                    label={'Résumé'}
                    styleType={BUTTON_STYLE_TYPE_SECONDARY}
                />
                <Button
                    label={'Contact Me'}
                    styleType={BUTTON_STYLE_TYPE_SECONDARY}
                />
            </Hero>
            <Section>
                <SkillsBlock content={content} />
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
