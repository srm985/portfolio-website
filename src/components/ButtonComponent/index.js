import {
    Link
} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import VisibilityChecker from '../VisibilityCheckerComponent';

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
    }

    renderLinkType = (buttonClassNames, buttonLabel) => {
        const {
            props: {
                activeLinkClassName,
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
                        rel={'noopener noreferrer'}
                        target={targetType}
                        title={screenReaderLabel}
                    >
                        {buttonLabel}
                    </a>
                )
        );
    }

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
                [`${ButtonComponent.displayName}--inline-inherit-styling`]: styleType === BUTTON_STYLE_TYPE_INLINE && shouldInheritStyling,
                [`${ButtonComponent.displayName}--inline-light`]: styleType === BUTTON_STYLE_TYPE_INLINE && isLightBackgroundColorProfile,
                [`${ButtonComponent.displayName}--inline`]: styleType === BUTTON_STYLE_TYPE_INLINE,
                [`${ButtonComponent.displayName}--neumorphic-animated`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && isAnimated,
                [`${ButtonComponent.displayName}--neumorphic-dark`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && !isLightBackgroundColorProfile,
                [`${ButtonComponent.displayName}--neumorphic-light`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && isLightBackgroundColorProfile,
                [`${ButtonComponent.displayName}--neumorphic-visible`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC && isVisible,
                [`${ButtonComponent.displayName}--neumorphic`]: styleType === BUTTON_STYLE_TYPE_NEUMORPHIC,
                [`${ButtonComponent.displayName}--primary-dark`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && !isLightBackgroundColorProfile,
                [`${ButtonComponent.displayName}--primary-light`]: styleType === BUTTON_STYLE_TYPE_PRIMARY && isLightBackgroundColorProfile,
                [`${ButtonComponent.displayName}--primary`]: styleType === BUTTON_STYLE_TYPE_PRIMARY,
                [`${ButtonComponent.displayName}--secondary-dark`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && !isLightBackgroundColorProfile,
                [`${ButtonComponent.displayName}--secondary-light`]: styleType === BUTTON_STYLE_TYPE_SECONDARY && isLightBackgroundColorProfile,
                [`${ButtonComponent.displayName}--secondary`]: styleType === BUTTON_STYLE_TYPE_SECONDARY
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
                            // eslint-disable-next-line react/button-has-type
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
    handleClick: () => {},
    href: '',
    isAlignedRight: false,
    isAnimated: false,
    isInternalURL: true,
    isLightBackgroundColorProfile: false,
    label: '',
    screenReaderLabel: '',
    shouldInheritStyling: false,
    shouldOpenInNewTab: true,
    styleType: BUTTON_STYLE_TYPE_PRIMARY,
    type: BUTTON_TYPE_BUTTON
};

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
