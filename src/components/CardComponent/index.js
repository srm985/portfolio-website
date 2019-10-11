import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const CardComponent = (props) => {
    const {
        children
    } = props;

    const {
        displayName
    } = CardComponent;

    return (
        <section className={displayName}>
            {children}
        </section>
    );
};

CardComponent.propTypes = {
    children: PropTypes.node
};

CardComponent.defaultProps = {
    children: ''
};

CardComponent.displayName = 'CardComponent';

export default CardComponent;
