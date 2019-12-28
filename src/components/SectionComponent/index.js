import PropTypes from 'prop-types';
import React from 'react';

const SectionComponent = (props) => {
    const {
        children
    } = props;

    const {
        displayName
    } = SectionComponent;

    return (
        <div className={displayName}>
            {
                children
            }
        </div>
    );
};

SectionComponent.displayName = 'SectionComponent';

SectionComponent.propTypes = {
    children: PropTypes.node
};

SectionComponent.defaultProps = {
    children: ''
};

export default SectionComponent;
