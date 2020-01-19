import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import Layout from '../components/LayoutComponent';

import ProjectTemplate from '../templates/ProjectTemplate';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ProjectTemplateConnected = (props) => {
    console.log({
        props
    });

    const {
        data: {
            pageQuery: {
                frontmatter: pageData
            }
        } = {}
    } = props;

    return (
        <Layout {...pageData}>
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
                path
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
