import PropTypes from 'prop-types';
import React from 'react';

import Hero from '../components/HeroComponent';
import Layout from '../components/LayoutComponent';
import Section from '../components/SectionComponent';

import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

const IndexPageTemplate = (props) => {
    const {
        heroImage: {
            childImageSharp: {
                fluid
            }
        },
        pageTitle
    } = props;

    return (
        <Layout pageTitle={pageTitle}>
            <Hero
                alt={'placeholder image'}
                defaultSource={fluid}
                overlayColor={OVERLAY_BLACK}
            />
            <Section />
            <Section />
        </Layout>
    );
};

IndexPageTemplate.propTypes = {
    heroImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({})
        })
    }),
    pageTitle: PropTypes.string
};

IndexPageTemplate.defaultProps = {
    heroImage: {},
    pageTitle: ''
};

export default IndexPageTemplate;
