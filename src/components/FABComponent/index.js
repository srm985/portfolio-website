import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const FABComponent = (props) => {
    const {
        handleClick
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
            <span />
        </button>
    );
};

FABComponent.displayName = 'FABComponent';

FABComponent.propTypes = {
    handleClick: PropTypes.func
};

FABComponent.defaultProps = {
    handleClick: () => { }
};

export default FABComponent;
