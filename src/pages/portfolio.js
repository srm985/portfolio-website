import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import PortfolioPageTemplate from '../templates/PortfolioPageTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const PortfolioPage = (props) => {
    const {
        data: {
            pageQuery,
            projectListQuery
        } = {}
    } = props;

    const pageData = destructureNetlifyCMS(pageQuery)[0];
    const projectList = destructureNetlifyCMS(projectListQuery);

    console.log(projectListQuery);

    return (
        <Layout {...pageData}>
            <PortfolioPageTemplate projectList={projectList} />
        </Layout>
    );
};

export const query = graphql`
    query {
        pageQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "portfolio"}}) {
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
                            viewProjectCTA
                        }
                    }
                }
            }
        }
        projectListQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, childMarkdownRemark: {excerpt: {ne: ""}}}) {
            edges {
                node {
                    childMarkdownRemark {
                        fields {
                            slug
                        }
                        frontmatter {
                            excerpt
                            title
                        }
                    }
                }
            }
        }
    }
`;

PortfolioPage.propTypes = {
    data: PropTypes.shape({
        pageTitle: PropTypes.string
    })
};

PortfolioPage.defaultProps = {
    data: {}
};

export default PortfolioPage;
