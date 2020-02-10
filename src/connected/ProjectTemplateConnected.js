import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import Layout from '../components/LayoutComponent';

import ProjectTemplate from '../templates/ProjectTemplate';

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
        <Layout content={{
            ...templateGlobalData,
            ...pageData
        }}
        >
            <ProjectTemplate />
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        pageQuery: markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                date
                description
                pageTitle
                path
                sectionBodyTechnology
                sectionTitleTechnology
                title
            }
        }
        templateGlobalsQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "project"}}) {
            edges {
                node {
                    childMarkdownRemark {
                        frontmatter {
                            returnButtonImage {
                                publicURL
                            }
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
