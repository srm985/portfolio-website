import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../IconComponent';

import './styles.scss';

const FABComponent = (props) => {
    const {
        handleClick,
        icon
    } = props;

    const {
        displayName
    } = FABComponent;

    return (
        <button
            className={displayName}
            onClick={handleClick}
            type={'button'}
        >
            <Icon
                className={`${displayName}__icon`}
                iconURL={icon}
            />
        </button>
    );
};

FABComponent.displayName = 'FABComponent';

FABComponent.propTypes = {
    handleClick: PropTypes.func,
    icon: PropTypes.string.isRequired
};

FABComponent.defaultProps = {
    handleClick: () => { }
};

export default FABComponent;
