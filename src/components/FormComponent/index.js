import PropTypes from 'prop-types';
import React from 'react';

import Input from '../InputComponent';

import {
    INPUT_TYPE_HIDDEN
} from '../InputComponent/config';

import classNames from '../../utils/classNames';

import './styles.scss';

const FormComponent = (props) => {
    const {
        children,
        className,
        name
    } = props;

    const {
        displayName
    } = FormComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    const HIDDEN_FIELD_NAME = 'bot-trap-field';

    return (
        <form
            className={componentClassNames}
            data-netlify={'true'}
            name={name}
            netlify-honeypot={HIDDEN_FIELD_NAME}
        >
            <Input
                className={`${displayName}__hidden-field`}
                name={HIDDEN_FIELD_NAME}
                type={INPUT_TYPE_HIDDEN}
            />
            {children}
        </form>
    );
};

FormComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    name: PropTypes.string.isRequired
};

FormComponent.defaultProps = {
    children: '',
    className: ''
};

FormComponent.displayName = 'FormComponent';

export default FormComponent;
