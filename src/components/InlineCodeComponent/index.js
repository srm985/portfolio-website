import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const InlineCodeComponent = (props) => {
    const {
        children
    } = props;

    return (
        <span className={InlineCodeComponent.displayName}>
            {children}
        </span>
    );
};

InlineCodeComponent.displayName = 'InlineCodeComponent';

InlineCodeComponent.propTypes = {
    children: PropTypes.node
};

InlineCodeComponent.defaultProps = {
    children: ''
};

export default InlineCodeComponent;
