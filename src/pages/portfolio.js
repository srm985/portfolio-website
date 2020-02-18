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
                            heroImageOpacityPortfolioPage
                            heroTitle
                            pageTitle
                            viewProjectCTA
                        }
                    }
                }
            }
        }
        projectListQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, childMarkdownRemark: {frontmatter: {projectExcerpt: {ne: null}}}}) {
            edges {
                node {
                    childMarkdownRemark {
                        fields {
                            slug
                        }
                        frontmatter {
                            pageTitle
                            projectDescription
                            projectExcerpt
                            projectHeroImage {
                                childImageSharp {
                                    fluid(maxWidth: 1200) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            projectSectionList {
                                projectSectionBody
                                projectSectionImage {
                                    childImageSharp {
                                        fluid(maxWidth: 1200) {
                                            ...GatsbyImageSharpFluid_noBase64
                                        }
                                    }
                                }
                            }
                            projectThumbnailImage {
                                childImageSharp {
                                    fluid(maxWidth: 600) {
                                        ...GatsbyImageSharpFluid_noBase64
                                    }
                                }
                            }
                            projectTitle
                            role
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
