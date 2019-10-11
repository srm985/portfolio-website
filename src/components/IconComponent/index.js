import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const IconComponent = (props) => {
    const {
        handleClick,
        icon
    } = props;

    const {
        displayName
    } = IconComponent;

    return (
        <div
            className={displayName}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: icon
            }}
            onClick={handleClick}
            role={'button'}
            tabIndex={0}
        />
    );
};

IconComponent.displayName = 'IconComponent';

IconComponent.propTypes = {
    handleClick: PropTypes.func,
    icon: PropTypes.string.isRequired
};

IconComponent.defaultProps = {
    handleClick: () => { }
};

export default IconComponent;
