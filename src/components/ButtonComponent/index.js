import PropTypes from 'prop-types';
import React from 'react';

import {
    Link
} from 'gatsby';

import classNames from '../../utils/classNames';

import {
    BUTTON_STYLE_TYPE_INLINE,
    BUTTON_STYLE_TYPE_PRIMARY,
    BUTTON_STYLE_TYPE_SECONDARY,
    BUTTON_STYLE_TYPES,
    BUTTON_TYPE_BUTTON,
    BUTTON_TYPES
} from './config';

import './styles.scss';

const ButtonComponent = (props) => {
    const {
        children,
        className,
        href,
        isInternalURL,
        label,
        styleType,
        type
    } = props;

    const buttonLabel = (
        children
            ? (

                <>{children}</>
            )
            : (
                <span>{label}</span>
            )
    );

    const buttonClassNames = classNames(
        ButtonComponent.displayName,
        className,
        {
            [`${ButtonComponent.displayName}--anchor`]: href && !isInternalURL,
            [`${ButtonComponent.displayName}--inline`]: styleType === BUTTON_STYLE_TYPE_INLINE,
            [`${ButtonComponent.displayName}--primary`]: styleType === BUTTON_STYLE_TYPE_PRIMARY,
            [`${ButtonComponent.displayName}--secondary`]: styleType === BUTTON_STYLE_TYPE_SECONDARY
        }
    );

    const renderLinkType = () => (
        isInternalURL
            ? (
                <Link
                    className={buttonClassNames}
                    to={href}
                >
                    {buttonLabel}
                </Link>
            )
            : (
                <a
                    className={buttonClassNames}
                    href={href}
                >
                    {buttonLabel}
                </a>
            )
    );

    return (
        <>
            {
                href
                    ? (
                        renderLinkType()
                    )
                    : (
                        // eslint-disable-next-line react/button-has-type
                        <button
                            className={buttonClassNames}
                            type={type}
                        >
                            {buttonLabel}
                        </button>
                    )
            }
        </>
    );
};

ButtonComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    isInternalURL: PropTypes.bool,
    label: PropTypes.string,
    styleType: PropTypes.oneOf(BUTTON_STYLE_TYPES),
    type: PropTypes.oneOf(BUTTON_TYPES)
};

ButtonComponent.defaultProps = {
    children: '',
    className: '',
    href: '',
    isInternalURL: true,
    label: '',
    styleType: BUTTON_STYLE_TYPE_PRIMARY,
    type: BUTTON_TYPE_BUTTON
};

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
