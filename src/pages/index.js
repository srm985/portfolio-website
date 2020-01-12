import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import IndexPageTemplate from '../templates/IndexPageTemplate';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const IndexPage = (props) => {
    const {
        data: {
            pageQuery
        } = {}
    } = props;

    const pageData = destructureNetlifyCMS(pageQuery);

    return (
        <IndexPageTemplate {...pageData} />
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
