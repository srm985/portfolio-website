import PropTypes from 'prop-types';
import React from 'react';

import Button from '../components/ButtonComponent';
import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';
import SkillBadge from '../components/SkillBadgeComponent';

import {
    BUTTON_STYLE_TYPE_SECONDARY
} from '../components/ButtonComponent/config';
import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

const IndexPageTemplate = (props) => {
    const {
        heroImage: {
            childImageSharp: {
                fluid
            } = {}
        } = {},
        heroSubtitle,
        heroTitle
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
                <SkillBadge />
            </Section>
        </>
    );
};

IndexPageTemplate.propTypes = {
    heroImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({})
        })
    }),
    heroSubtitle: PropTypes.string,
    heroTitle: PropTypes.string
};

IndexPageTemplate.defaultProps = {
    heroImage: {},
    heroSubtitle: '',
    heroTitle: ''
};

export default IndexPageTemplate;
