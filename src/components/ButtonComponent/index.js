import {
    Link
} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import VisibilityChecker from '../VisibilityCheckerComponent';

import {
    BUTTON_STYLE_TYPE_INLINE,
    BUTTON_STYLE_TYPE_NEUMORPHIC,
    BUTTON_STYLE_TYPE_PRIMARY,
    BUTTON_STYLE_TYPE_SECONDARY,
    BUTTON_STYLE_TYPES,
    BUTTON_TYPE_BUTTON,
    BUTTON_TYPES
} from './config';

import classNames from '../../utils/classNames';

import './styles.scss';

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    handleVisibilityChange = (isVisible) => {
        this.setState((previousState) => {
            const {
                isVisible: wasVisible
            } = previousState;

            if (isVisible === wasVisible) {
                return null;
            }

            return ({
                isVisible
            });
        });
    };

    renderLinkType = (buttonClassNames, buttonLabel) => {
        const {
            props: {
                activeLinkClassName,
                handleClick,
                href,
                isInternalURL,
                screenReaderLabel,
                shouldOpenInNewTab
            }
        } = this;

        const targetType = !isInternalURL && shouldOpenInNewTab ? '_blank' : '';

        return (
            isInternalURL
                ? (
                    <Link
                        activeClassName={activeLinkClassName}
                        aria-label={screenReaderLabel}
                        className={buttonClassNames}
                        onClick={handleClick}
                        title={screenReaderLabel}
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
                        onClick={handleClick}
                        rel={'noopener noreferrer'}
                        target={targetType}
                        title={screenReaderLabel}
                    >
                        {buttonLabel}
                    </a>
                )
        );
    };

    render() {
        const {
            props: {
                children,
                className,
                handleClick,
                href,
                isAlignedRight,
                isAnimated,
                isInternalURL,
                isLightBackgroundColorProfile,
                isUnstyled,
                label,
                screenReaderLabel,
                shouldInheritStyling,
                styleType,
                type
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = ButtonComponent;

        const buttonLabel = (
            children ? ({
                children
            }) : (<span className={`${displayName}__label`}>{label}</span>)
        );

        const buttonClassNames = classNames(
            displayName,
            className,
            {
                [`${ButtonComponent.displayName}--aligned-right`]: isAlignedRight && (styleType === BUTTON_STYLE_TYPE_PRIMARY || styleType === BUTTON_STYLE_TYPE_SECONDARY || styleType === BUTTON_STYLE_TYPE_NEUMORPHIC) && !isUnstyled,
                [`${ButtonComponent.displayName}--anchor`]: href && !isInternalURL && !isUnstyled,
                [`${ButtonComponent.displayName}--inline-dark`]: styleType === BUTTON_STYLE_TYPE_INLINE && !isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--inline-inherit-styling`]: styleType === BUTTON_STYLE_TYPE_INLINE && shouldInheritStyling && !isUnstyled,
                [`${ButtonComponent.displayName}--inline-light`]: styleType === BUTTON_STYLE_TYPE_INLINE && isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--inline`]: styleType === BUTTON_STYLE_TYPE_INLINE && !isUnstyled,
                [`${ButtonComponent.displayName}--neumorphic-animated`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && isAnimated && !isUnstyled,
                [`${ButtonComponent.displayName}--neumorphic-dark`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && !isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--neumorphic-light`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--neumorphic-visible`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && isVisible && !isUnstyled,
                [`${ButtonComponent.displayName}--neumorphic`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && !isUnstyled,
                [`${ButtonComponent.displayName}--primary-dark`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && !isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--primary-light`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--primary`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && !isUnstyled,
                [`${ButtonComponent.displayName}--secondary-dark`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && !isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--secondary-light`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && isLightBackgroundColorProfile && !isUnstyled,
                [`${ButtonComponent.displayName}--secondary`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && !isUnstyled
            }
        );

        return (
            <VisibilityChecker handleChange={this.handleVisibilityChange}>
                {
                    href
                        ? (
                            this.renderLinkType(buttonClassNames, buttonLabel)
                        )
                        : (
                            <button
                                aria-label={screenReaderLabel}
                                className={buttonClassNames}
                                onClick={handleClick}
                                title={screenReaderLabel}
                                type={type}
                            >
                                {buttonLabel}
                            </button>
                        )
                }
            </VisibilityChecker>
        );
    }
}

ButtonComponent.propTypes = {
    activeLinkClassName: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    handleClick: PropTypes.func,
    href: PropTypes.string,
    isAlignedRight: PropTypes.bool,
    isAnimated: PropTypes.bool,
    isInternalURL: PropTypes.bool,
    isLightBackgroundColorProfile: PropTypes.bool,
    isUnstyled: PropTypes.bool,
    label: PropTypes.string,
    screenReaderLabel: PropTypes.string,
    shouldInheritStyling: PropTypes.bool,
    shouldOpenInNewTab: PropTypes.bool,
    styleType: PropTypes.oneOf(BUTTON_STYLE_TYPES),
    type: PropTypes.oneOf(BUTTON_TYPES)
};

ButtonComponent.defaultProps = {
    activeLinkClassName: '',
    children: '',
    className: '',
    handleClick: () => { },
    href: '',
    isAlignedRight: false,
    isAnimated: false,
    isInternalURL: true,
    isLightBackgroundColorProfile: false,
    isUnstyled: false,
    label: '',
    screenReaderLabel: '',
    shouldInheritStyling: false,
    shouldOpenInNewTab: true,
    styleType: BUTTON_STYLE_TYPE_PRIMARY,
    type: BUTTON_TYPE_BUTTON
};

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
