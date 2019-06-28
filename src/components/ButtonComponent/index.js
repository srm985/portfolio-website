import PropTypes from 'prop-types';
import React from 'react';

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
        href,
        label,
        styleType,
        type
    } = props;

    const buttonLabel = (
        <span>{label}</span>
    );

    const buttonClassNames = classNames(
        ButtonComponent.displayName,
        {
            [`${ButtonComponent.displayName}--inline`]: styleType === BUTTON_STYLE_TYPE_INLINE,
            [`${ButtonComponent.displayName}--primary`]: styleType === BUTTON_STYLE_TYPE_PRIMARY,
            [`${ButtonComponent.displayName}--secondary`]: styleType === BUTTON_STYLE_TYPE_SECONDARY
        }
    );

    return (
        <>
            {
                href
                    ? (
                        <a
                            className={buttonClassNames}
                            href={href}
                        >
                            {buttonLabel}
                        </a>
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
    href: PropTypes.string,
    label: PropTypes.string,
    styleType: PropTypes.oneOf(BUTTON_STYLE_TYPES),
    type: PropTypes.oneOf(BUTTON_TYPES)
};

ButtonComponent.defaultProps = {
    href: '',
    label: '',
    styleType: BUTTON_STYLE_TYPE_PRIMARY,
    type: BUTTON_TYPE_BUTTON
};

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
