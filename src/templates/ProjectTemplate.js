import PropTypes from 'prop-types';
import React from 'react';

import FAB from '../components/FABComponent';
import ProjectHeader from '../components/ProjectHeaderComponent';
import ProjectSection from '../components/ProjectSectionComponent';

function ProjectTemplate(props) {
    const {
        content,
        content: {
            returnButtonIcon: {
                publicURL = ''
            } = {},
            returnButtonLink = '',
            returnButtonScreenReaderLabel = ''
        }
    } = props;

    const {
        displayName
    } = ProjectTemplate;

    return (
        <div className={displayName}>
            <ProjectHeader {...content} />
            <ProjectSection {...content} />
            <FAB
                href={returnButtonLink}
                icon={publicURL}
                screenReaderLabel={returnButtonScreenReaderLabel}
            />
        </div>
    );
}

ProjectTemplate.displayName = 'ProjectTemplate';

ProjectTemplate.propTypes = {
    content: PropTypes.shape({
        returnButtonIcon: PropTypes.shape({
            publicURL: PropTypes.string
        }),
        returnButtonLink: PropTypes.string,
        returnButtonScreenReaderLabel: PropTypes.string
    })
};

ProjectTemplate.defaultProps = {
    content: {}
};

export default ProjectTemplate;
