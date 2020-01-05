import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const IconComponent = (props) => {
    const {
        className,
        icon
    } = props;

    const {
        displayName
    } = IconComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    const svgAttributes = {
        fill: 'currentColor',
        height: 50,
        viewBox: '0 0 50 50',
        width: 50
    };

    return (
        <div className={componentClassNames}>
            {icon(svgAttributes)}
        </div>
    );
};

IconComponent.displayName = 'IconComponent';

IconComponent.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.func.isRequired
};

IconComponent.defaultProps = {
    className: ''
};

export default IconComponent;
