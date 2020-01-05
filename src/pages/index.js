import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import Hero from '../components/HeroComponent';
import Layout from '../components/LayoutComponent';
import Section from '../components/SectionComponent';

import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const IndexPage = (props) => {
    const {
        data: {
            pageQuery
        } = {}
    } = props;

    const {
        heroImage: {
            childImageSharp: {
                fluid
            }
        },
        pageTitle
    } = destructureNetlifyCMS(pageQuery);

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

export const query = graphql`
    query {
        pageQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            heroImage {
                                childImageSharp {
                                    fluid(maxWidth: 1600) {
                                        src
                                    }
                                }
                            }
                            heroTitle
                            pageTitle
                        }
                    }
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({})
};

IndexPage.defaultProps = {
    data: {}
};

export default IndexPage;
