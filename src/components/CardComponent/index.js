import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const CardComponent = (props) => {
    const {
        children,
        className
    } = props;

    const {
        displayName
    } = CardComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    return (
        <section className={componentClassNames}>
            {children}
        </section>
    );
};

CardComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

CardComponent.defaultProps = {
    children: '',
    className: ''
};

CardComponent.displayName = 'CardComponent';

export default CardComponent;
