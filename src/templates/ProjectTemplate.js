import React from 'react';

const ProjectTemplate = (props) => {
    const {
        displayName
    } = ProjectTemplate;
    console.log(props);

    return (
        <div className={displayName}>
            <p>test</p>
        </div>
    );
};

ProjectTemplate.displayName = 'ProjectTemplate';

export default ProjectTemplate;
