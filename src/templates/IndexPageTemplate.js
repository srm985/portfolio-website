import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';
import SkillBadge from '../components/SkillBadgeComponent';

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
                <h1>{heroTitle}</h1>
                <h2>{heroSubtitle}</h2>
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
