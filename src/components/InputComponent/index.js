import PropTypes from 'prop-types';
import React from 'react';

import {
    INPUT_TYPE_TEXT,
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
            <input
                className={`${displayName}__input`}
                defaultValue={defaultValue}
                id={name}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                type={type}
            />
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
