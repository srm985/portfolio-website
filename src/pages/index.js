import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import IndexPageTemplate from '../templates/IndexPageTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const IndexPage = (props) => {
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
            <IndexPageTemplate />
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
                            pageSEO {
                                pageAuthor
                                pageDescription
                                pageImage
                                pageKeywords
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
                            aboutMeSectionBody
                            aboutMeSectionImageBlock {
                                imageAlt
                                imageSource {
                                    childImageSharp {
                                        fluid(maxWidth: 600) {
                                            ...GatsbyImageSharpFluid_noBase64
                                        }
                                    }
                                }
                            }
                            aboutMeSectionTitle
                            heroSubtitle
                            heroTitle
                            skillsSectionTitle
                            skillsSearchLabel
                            skillsSearchName
                            skillsSearchPlaceholder
                            skillNotFound
                            skillsSectionList {
                                sectionLabel
                                skillsList {
                                    icon
                                    label
                                }
                            }
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
