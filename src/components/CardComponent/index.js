import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import {
    BACKGROUND_COLOR_BLUE,
    BACKGROUND_COLOR_GREEN,
    BACKGROUND_COLOR_NEUMORPHIC,
    BACKGROUND_COLOR_ORANGE,
    BACKGROUND_COLOR_RED,
    BACKGROUND_COLOR_WHITE,
    BACKGROUND_COLORS
} from './config';

import './styles.scss';

const CardComponent = (props) => {
    const {
        backgroundColor,
        children,
        className
    } = props;

    const {
        displayName
    } = CardComponent;

    const componentClassNames = classNames(
        displayName,
        className,
        {
            [`${displayName}--background-blue`]: backgroundColor === BACKGROUND_COLOR_BLUE,
            [`${displayName}--background-green`]: backgroundColor === BACKGROUND_COLOR_GREEN,
            [`${displayName}--background-neumorphic`]: backgroundColor === BACKGROUND_COLOR_NEUMORPHIC,
            [`${displayName}--background-orange`]: backgroundColor === BACKGROUND_COLOR_ORANGE,
            [`${displayName}--background-red`]: backgroundColor === BACKGROUND_COLOR_RED,
            [`${displayName}--background-white`]: backgroundColor === BACKGROUND_COLOR_WHITE
        }
    );

    return (
        <div className={componentClassNames}>
            {children}
        </div>
    );
};

CardComponent.propTypes = {
    backgroundColor: PropTypes.oneOf(BACKGROUND_COLORS),
    children: PropTypes.node,
    className: PropTypes.string
};

CardComponent.defaultProps = {
    backgroundColor: BACKGROUND_COLOR_WHITE,
    children: '',
    className: ''
};

CardComponent.displayName = 'CardComponent';

export default CardComponent;
