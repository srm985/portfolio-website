import PropTypes from 'prop-types';
import React from 'react';

import {
    Link
} from 'gatsby';

import classNames from '../../utils/classNames';

import {
    BUTTON_STYLE_TYPE_INLINE,
    BUTTON_STYLE_TYPE_NEUMORPHIC,
    BUTTON_STYLE_TYPE_PRIMARY,
    BUTTON_STYLE_TYPE_SECONDARY,
    BUTTON_STYLE_TYPES,
    BUTTON_TYPE_BUTTON,
    BUTTON_TYPES
} from './config';

import './styles.scss';

const ButtonComponent = (props) => {
    const {
        activeLinkClassName,
        children,
        className,
        handleClick,
        href,
        inheritStyling,
        isAlignedRight,
        isInternalURL,
        isLightBackgroundColorProfile,
        label,
        screenReaderLabel,
        shouldOpenInNewTab,
        styleType,
        type
    } = props;

    const {
        displayName
    } = ButtonComponent;

    const buttonLabel = (
        children
            ? (

                <>{children}</>
            )
            : (
                <span className={`${displayName}__label`}>{label}</span>
            )
    );

    const buttonClassNames = classNames(
        displayName,
        className,
        {
            [`${ButtonComponent.displayName}--aligned-right`]: isAlignedRight && (styleType === BUTTON_STYLE_TYPE_PRIMARY || styleType === BUTTON_STYLE_TYPE_SECONDARY || styleType === BUTTON_STYLE_TYPE_NEUMORPHIC),
            [`${ButtonComponent.displayName}--anchor`]: href && !isInternalURL,
            [`${ButtonComponent.displayName}--inline-dark`]: styleType === BUTTON_STYLE_TYPE_INLINE && !isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--inline-inherit-styling`]: styleType === BUTTON_STYLE_TYPE_INLINE && inheritStyling,
            [`${ButtonComponent.displayName}--inline-light`]: styleType === BUTTON_STYLE_TYPE_INLINE && isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--inline`]: styleType === BUTTON_STYLE_TYPE_INLINE,
            [`${ButtonComponent.displayName}--neumorphic-dark`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && !isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--neumorphic-light`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--neumorphic`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC,
            [`${ButtonComponent.displayName}--primary-dark`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && !isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--primary-light`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--primary`]: styleType === BUTTON_STYLE_TYPE_PRIMARY,
            [`${ButtonComponent.displayName}--secondary-dark`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && !isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--secondary-light`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && isLightBackgroundColorProfile,
            [`${ButtonComponent.displayName}--secondary`]: styleType === BUTTON_STYLE_TYPE_SECONDARY
        }
    );

    const targetType = !isInternalURL && shouldOpenInNewTab ? '_blank' : '';

    const renderLinkType = () => (
        isInternalURL
            ? (
                <Link
                    activeClassName={activeLinkClassName}
                    aria-label={screenReaderLabel}
                    className={buttonClassNames}
                    to={href}
                >
                    {buttonLabel}
                </Link>
            )
            : (
                <a
                    aria-label={screenReaderLabel}
                    className={buttonClassNames}
                    href={href}
                    rel={'noopener noreferrer'}
                    target={targetType}
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
                            aria-label={screenReaderLabel}
                            className={buttonClassNames}
                            onClick={handleClick}
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
    activeLinkClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    href: PropTypes.string,
    inheritStyling: PropTypes.bool,
    isAlignedRight: PropTypes.bool,
    isInternalURL: PropTypes.bool,
    isLightBackgroundColorProfile: PropTypes.bool,
    label: PropTypes.string,
    screenReaderLabel: PropTypes.string,
    shouldOpenInNewTab: PropTypes.bool,
    styleType: PropTypes.oneOf(BUTTON_STYLE_TYPES),
    type: PropTypes.oneOf(BUTTON_TYPES)
};

ButtonComponent.defaultProps = {
    activeLinkClassName: '',
    children: '',
    className: '',
    handleClick: () => {},
    href: '',
    inheritStyling: false,
    isAlignedRight: false,
    isInternalURL: true,
    isLightBackgroundColorProfile: false,
    label: '',
    screenReaderLabel: '',
    shouldOpenInNewTab: true,
    styleType: BUTTON_STYLE_TYPE_PRIMARY,
    type: BUTTON_TYPE_BUTTON
};

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
