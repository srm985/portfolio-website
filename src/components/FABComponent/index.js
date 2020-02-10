import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const FABComponent = (props) => {
    const {
        alt,
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
            <Image
                alt={alt}
                fixed={icon}
            />
        </button>
    );
};

FABComponent.displayName = 'FABComponent';

FABComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    icon: PropTypes.shape({})
};

FABComponent.defaultProps = {
    handleClick: () => { },
    icon: {}
};

export default FABComponent;
