import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import {
    BUTTON_TYPES,
    BUTTON_TYPE_BUTTON
} from './config';

import './styles.scss';

const ButtonComponent = (props) => {
    const {
        href,
        isInline,
        isPrimary,
        isSecondary,
        label,
        type
    } = props;

    const buttonLabel = (
        <span>{label}</span>
    );

    const buttonClassNames = classNames(
        ButtonComponent.displayName,
        {
            [`${ButtonComponent.displayName}--inline`]: isInline,
            [`${ButtonComponent.displayName}--primary`]: isPrimary,
            [`${ButtonComponent.displayName}--secondary`]: isSecondary
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
    isInline: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.oneOf(BUTTON_TYPES)
};

ButtonComponent.defaultProps = {
    href: '',
    isInline: false,
    isPrimary: true,
    isSecondary: false,
    label: '',
    type: BUTTON_TYPE_BUTTON
};

ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;
