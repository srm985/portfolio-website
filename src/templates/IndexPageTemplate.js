import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroComponent';
import Section from '../components/SectionComponent';

import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

const IndexPageTemplate = (props) => {
    const {
        heroImage: {
            childImageSharp: {
                fluid
            } = {}
        } = {}
    } = props;

    return (
        <>
            <Hero
                alt={'placeholder image'}
                defaultSource={fluid}
                overlayColor={OVERLAY_BLACK}
            />
            <Section />
            <Section />
        </>
    );
};

IndexPageTemplate.propTypes = {
    heroImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({})
        })
    })
};

IndexPageTemplate.defaultProps = {
    heroImage: {}
};

export default IndexPageTemplate;
