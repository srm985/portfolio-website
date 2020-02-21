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
                            aboutMeSectionBody
                            aboutMeSectionImageBlock {
                                imageAlt
                                imageSource
                            }
                            aboutMeSectionTitle
                            heroImageBlockHomePage {
                                imageAlt
                                imageOpacity
                                imageSource
                            }
                            heroSubtitle
                            heroTitle
                            pageTitle
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
