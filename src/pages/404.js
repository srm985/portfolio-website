import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import NotFoundPageTemplate from '../templates/404PageTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const NotFoundPage = (props) => {
    const {
        data: {
            pageQuery
        } = {}
    } = props;

    const pageData = destructureNetlifyCMS(pageQuery);

    return (
        <Layout
            {...pageData}
            hasFooter={false}
            hasNavigation={false}
        >
            <NotFoundPageTemplate />
        </Layout>
    );
};

export const query = graphql`
    query {
        pageQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "404"}}) {
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

NotFoundPage.propTypes = {
    data: PropTypes.shape({
        pageTitle: PropTypes.string
    })
};

NotFoundPage.defaultProps = {
    data: {}
};

export default NotFoundPage;
