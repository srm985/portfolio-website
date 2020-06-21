import {
    Link
} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../IconComponent';

import './styles.scss';

const FABComponent = (props) => {
    const {
        handleClick,
        href,
        icon,
        screenReaderLabel
    } = props;

    const {
        displayName
    } = FABComponent;

    const defaultAttributes = {
        'aria-label': screenReaderLabel,
        className: displayName,
        onClick: handleClick,
        title: screenReaderLabel
    };

    const renderIcon = () => (
        <Icon
            className={`${displayName}__icon`}
            iconURL={icon}
        />
    );

    return (
        href ? (
            <Link
                {...defaultAttributes}
                to={href}
            >
                {renderIcon()}
            </Link>
        ) : (
            <button
                {...defaultAttributes}
                type={'button'}
            >
                {renderIcon()}
            </button>
        )
    );
};

FABComponent.displayName = 'FABComponent';

FABComponent.propTypes = {
    handleClick: PropTypes.func,
    href: PropTypes.string,
    icon: PropTypes.string.isRequired,
    screenReaderLabel: PropTypes.string.isRequired
};

FABComponent.defaultProps = {
    handleClick: () => { },
    href: ''
};

export default FABComponent;
