import React from 'react';

const ProjectTemplate = () => {
    const {
        displayName
    } = ProjectTemplate;

    return (
        <div className={displayName}>
            <p>test</p>
        </div>
    );
};

ProjectTemplate.displayName = 'ProjectTemplate';

export default ProjectTemplate;
