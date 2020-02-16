import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const GridComponent = (props) => {
    const {
        children,
        className
    } = props;

    const {
        displayName
    } = GridComponent;

    const componentClassNames = classNames(
        className,
        displayName
    );

    return (
        <div className={componentClassNames}>
            <div className={`${displayName}__grid`}>
                {children}
            </div>
        </div>
    );
};

GridComponent.displayName = 'GridComponent';

GridComponent.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

GridComponent.defaultProps = {
    className: ''
};

export default GridComponent;
