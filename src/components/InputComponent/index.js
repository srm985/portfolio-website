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
        placeholder
    };

    const textareaClassNames = classNames(
        `${displayName}__input`,
        `${displayName}__input--textarea`
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
                        className={`${displayName}__input`}
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
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(INPUT_TYPES)
};

InputComponent.defaultProps = {
    className: '',
    defaultValue: '',
    handleChange: () => { },
    label: '',
    placeholder: '',
    type: INPUT_TYPE_TEXT
};

export default InputComponent;
