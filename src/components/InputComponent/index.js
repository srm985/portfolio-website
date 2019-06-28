import PropTypes from 'prop-types';
import React from 'react';

import {
    INPUT_TYPE_TEXT,
    INPUT_TYPES
} from './config';

import './styles.scss';

const InputComponent = (props) => {
    const {
        placeholder,
        type
    } = props;

    return (
        <input
            className={InputComponent.displayName}
            placeholder={placeholder}
            type={type}
        />
    );
};

InputComponent.displayName = 'InputComponent';

InputComponent.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(INPUT_TYPES)
};

InputComponent.defaultProps = {
    placeholder: '',
    type: INPUT_TYPE_TEXT
};

export default InputComponent;
