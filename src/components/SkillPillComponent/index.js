import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const SkillPillComponent = (props) => {
    const {
        icon,
        label
    } = props;

    const {
        displayName
    } = SkillPillComponent;

    return (
        <div className={displayName}>
            <div className={`${displayName}__icon-container`}>
                <img
                    alt={`${label} icon`}
                    className={`${displayName}__icon`}
                    src={`/assets/${icon}`}
                />
            </div>
            <p>
                {label}
            </p>
        </div>
    );
};

SkillPillComponent.displayName = 'SkillPillComponent';

SkillPillComponent.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default SkillPillComponent;
