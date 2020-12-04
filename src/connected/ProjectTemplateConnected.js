import {
    graphql
} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ProjectTemplate from '../templates/ProjectTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ProjectTemplateConnected = (props) => {
    const {
        data: {
            pageQuery: {
                frontmatter: pageData
            },
            templateGlobalsQuery
        } = {}
    } = props;

    const [
        templateGlobalData
    ] = destructureNetlifyCMS(templateGlobalsQuery);

    return (
        <Layout
            content={{
                ...templateGlobalData,
                ...pageData
            }}
            hasNavigationDark
        >
            <ProjectTemplate />
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        pageQuery: markdownRemark(fields: { slug: { eq: $slug } }) {
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
                projectDate
                projectDemoURL
                projectDescription
                projectExcerpt
                projectSectionList {
                    projectSectionTitle
                    projectSectionBody
                    projectSectionImageBlock {
                        citation {
                            authorLink
                            authorName
                            hostingSiteLink
                            hostingSiteName
                            isCited
                        }
                        imageAlignment
                        imageAlt
                        imageSource {
                            childImageSharp {
                                fluid(maxWidth: 1200) {
                                    ...GatsbyImageSharpFluid_noBase64
                                }
                            }
                        }
                    }
                }
                projectSourceCodeURL
                projectTitle
                role
            }
        }
        templateGlobalsQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "project"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            demoCTA
                            returnButtonIcon {
                                publicURL
                            }
                            returnButtonLink
                            returnButtonScreenReaderLabel
                            sourceCodeCTA
                        }
                    }
                }
            }
        }
    }
`;

ProjectTemplateConnected.propTypes = {
    data: PropTypes.shape({})
};

ProjectTemplateConnected.defaultProps = {
    data: {}
};

export default ProjectTemplateConnected;
