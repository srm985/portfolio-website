import {
    graphql
} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import PortfolioPageTemplate from '../templates/PortfolioPageTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

function PortfolioPage(props) {
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
}

export const query = graphql`
    query {
        pageQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "portfolio"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            pageSEO {
                                pageAuthor
                                pageDescription
                                pageImage
                                pageKeywords
                                pagePostingTitle
                                pageSiteURL
                                pageTitle
                                pageType
                            }
                            heroImageBlock {
                                imageAlt
                                imageOpacity
                                imageSource {
                                    childImageSharp {
                                        fluid(maxWidth: 1600) {
                                            ...GatsbyImageSharpFluid_noBase64
                                        }
                                    }
                                }
                                imageTitle
                            }
                            portfolioPageHeroTitle
                            portfolioPageHeroSubtitle
                            projectDescriptionTitle
                            projectRoleTitle
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
                            projectExcerpt
                            projectThumbnailImageBlock {
                                imageAlt
                                imageSource {
                                    childImageSharp {
                                        fluid(maxWidth: 600) {
                                            ...GatsbyImageSharpFluid_noBase64
                                        }
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
