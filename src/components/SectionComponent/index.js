import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const SectionComponent = (props) => {
    const {
        children,
        className,
        isDark,
        isFullBleed,
        isLight
    } = props;

    const {
        displayName
    } = SectionComponent;

    const componentClassNames = classNames(
        className,
        displayName,
        'padding-wrapper',
        {
            [`${displayName}--dark`]: isDark,
            [`${displayName}--full-bleed`]: isFullBleed,
            [`${displayName}--light`]: isLight && !isDark
        }
    );

    return (
        <section className={componentClassNames}>
            {
                children
            }
        </section>
    );
};

SectionComponent.displayName = 'SectionComponent';

SectionComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    isDark: PropTypes.bool,
    isFullBleed: PropTypes.bool,
    isLight: PropTypes.bool
};

SectionComponent.defaultProps = {
    children: '',
    className: '',
    isDark: false,
    isFullBleed: false,
    isLight: true
};

export default SectionComponent;
