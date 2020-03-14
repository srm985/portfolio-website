import PropTypes from 'prop-types';
import React from 'react';

import {
    INPUT_TYPE_TEXT,
    INPUT_TYPE_TEXTAREA,
    INPUT_TYPES
} from './config';

import classNames from '../../utils/classNames';

import './styles.scss';

const InputComponent = (props) => {
    const {
        className,
        defaultValue,
        handleChange,
        isDarkTheme,
        isRequired,
        label,
        name,
        placeholder,
        type
    } = props;

    const {
        displayName
    } = InputComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    const defaultFieldAttributes = {
        className: `${displayName}__input`,
        defaultValue,
        id: name,
        name,
        onChange: handleChange,
        placeholder,
        required: isRequired
    };

    const inputClassNames = classNames(
        `${displayName}__input`,
        {
            [`${displayName}__input--dark`]: isDarkTheme,
            [`${displayName}__input--light`]: !isDarkTheme
        }
    );

    const textareaClassNames = classNames(
        `${displayName}__input`,
        `${displayName}__input--textarea`,
        {
            [`${displayName}__input--dark`]: isDarkTheme,
            [`${displayName}__input--light`]: !isDarkTheme
        }
    );

    return (
        <label
            className={componentClassNames}
            htmlFor={name}
        >
            {
                label
                && (
                    <span className={`${displayName}__label`}>
                        {label}
                        {
                            isRequired
                            && (
                                <span className={`${displayName}__required-indicator`}>
                                    {'*'}
                                </span>
                            )
                        }
                    </span>
                )
            }
            {
                type === INPUT_TYPE_TEXTAREA ? (
                    <textarea
                        {...defaultFieldAttributes}
                        className={textareaClassNames}
                    />
                ) : (
                    <input
                        {...defaultFieldAttributes}
                        className={inputClassNames}
                        type={type}
                    />
                )
            }
        </label>
    );
};

InputComponent.displayName = 'InputComponent';

InputComponent.propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    handleChange: PropTypes.func,
    isDarkTheme: PropTypes.bool,
    isRequired: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(INPUT_TYPES)
};

InputComponent.defaultProps = {
    className: '',
    defaultValue: '',
    handleChange: () => { },
    isDarkTheme: false,
    isRequired: false,
    label: '',
    placeholder: '',
    type: INPUT_TYPE_TEXT
};

export default InputComponent;
