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

    return (
        <Layout content={pageData}>
            <PortfolioPageTemplate content={{
                projectList
            }}
            />
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
                            heroImagePortfolioPage {
                                childImageSharp {
                                    fluid(maxWidth: 1600) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            heroImageOpacityPortfolioPage
                            heroTitle
                            pageTitle
                            viewProjectCTA
                        }
                    }
                }
            }
        }
        projectListQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, childMarkdownRemark: {frontmatter: {excerpt: {ne: null}}}}) {
            edges {
                node {
                    childMarkdownRemark {
                        fields {
                            slug
                        }
                        frontmatter {
                            excerpt
                            projectThumbnail {
                                childImageSharp {
                                    fluid(maxWidth: 600) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            role
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
