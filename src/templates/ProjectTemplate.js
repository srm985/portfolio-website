import PropTypes from 'prop-types';
import React from 'react';

import FAB from '../components/FABComponent';
import ProjectHeader from '../components/ProjectHeaderComponent';
import ProjectSection from '../components/ProjectSectionComponent';

const ProjectTemplate = (props) => {
    const {
        content,
        content: {
            returnButtonIcon: {
                publicURL = ''
            } = {}
        }
    } = props;

    console.log({
        props
    });

    const {
        displayName
    } = ProjectTemplate;

    return (
        <div className={displayName}>
            <ProjectHeader {...content} />
            <ProjectSection {...content} />
            <FAB icon={publicURL} />
        </div>
    );
};

ProjectTemplate.displayName = 'ProjectTemplate';

ProjectTemplate.propTypes = {
    content: PropTypes.shape({
        returnButtonIcon: PropTypes.shape({
            publicURL: PropTypes.string
        })
    })
};

ProjectTemplate.defaultProps = {
    content: {}
};

export default ProjectTemplate;
