import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import ContactPageTemplate from '../templates/ContactPageTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ContactPage = (props) => {
    const {
        data: {
            pageQuery
        } = {}
    } = props;

    const pageData = destructureNetlifyCMS(pageQuery);

    console.log({
        pageData
    });

    return (
        <Layout {...pageData}>
            <ContactPageTemplate />
        </Layout>
    );
};

export const query = graphql`
    query {
        pageQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "contact"}}) {
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

ContactPage.propTypes = {
    data: PropTypes.shape({
        pageTitle: PropTypes.string
    })
};

ContactPage.defaultProps = {
    data: {}
};

export default ContactPage;
