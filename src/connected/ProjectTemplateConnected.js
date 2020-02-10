import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import Layout from '../components/LayoutComponent';

import ProjectTemplate from '../templates/ProjectTemplate';

const ProjectTemplateConnected = (props) => {
    const {
        data: {
            pageQuery: {
                frontmatter: pageData
            }
        } = {}
    } = props;

    return (
        <Layout content={pageData}>
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
    }
`;

ProjectTemplateConnected.propTypes = {
    data: PropTypes.shape({})
};

ProjectTemplateConnected.defaultProps = {
    data: {}
};

export default ProjectTemplateConnected;
