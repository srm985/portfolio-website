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

    const [
        pageData
    ] = destructureNetlifyCMS(pageQuery);

    return (
        <Layout content={pageData}>
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
                            heroImageContactPage {
                                childImageSharp {
                                    fluid(maxWidth: 1600) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            heroImageOpacityContactPage
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
