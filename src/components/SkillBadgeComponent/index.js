import React from 'react';

import './styles.scss';

const SkillBadgeComponent = () => {
    const {
        displayName
    } = SkillBadgeComponent;

    return (
        <div className={displayName}>
            <div className={`${displayName}__top`} />
            <div className={`${displayName}__middle`} />
            <div className={`${displayName}__bottom`} />
        </div>
    );
};

SkillBadgeComponent.displayName = 'SkillBadgeComponent';

SkillBadgeComponent.propTypes = {};

SkillBadgeComponent.defaultProps = {};

export default SkillBadgeComponent;
