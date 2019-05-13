import PropTypes from 'prop-types';
import React from 'react';

import './styles.scss';

const GridComponent = (props) => {
    const {
        children
    } = props;

    return (
        <div className={GridComponent.displayName}>
            <div className={`${GridComponent.displayName}__grid`}>
                {children}
            </div>
        </div>
    );
};

GridComponent.displayName = 'GridComponent';

GridComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default GridComponent;
