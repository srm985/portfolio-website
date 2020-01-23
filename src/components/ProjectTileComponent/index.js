import React from 'react';

import './styles.scss';

const ProjectTileComponent = () => {
    const {
        displayName
    } = ProjectTileComponent;

    return (
        <div className={displayName} />
    );
};

ProjectTileComponent.displayName = 'ProjectTileComponent';

ProjectTileComponent.propTypes = {};

ProjectTileComponent.defaultProps = {};

export default ProjectTileComponent;
