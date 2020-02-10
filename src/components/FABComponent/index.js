import PropTypes from 'prop-types';
import React from 'react';

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
            <span
                className={`${displayName}__icon`}
                style={{
                    backgroundImage: `url('${icon}')`
                }}
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
