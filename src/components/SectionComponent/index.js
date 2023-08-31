import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

function SectionComponent(props) {
    const {
        children,
        className,
        hasNavigationOffset,
        isDark,
        isFullBleed,
        isMedium
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
            [`${displayName}--medium`]: isMedium,
            [`${displayName}--navigation-offset`]: hasNavigationOffset
        }
    );

    return (
        <section className={componentClassNames}>
            {
                children
            }
        </section>
    );
}

SectionComponent.displayName = 'SectionComponent';

SectionComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hasNavigationOffset: PropTypes.bool,
    isDark: PropTypes.bool,
    isFullBleed: PropTypes.bool,
    isMedium: PropTypes.bool
};

SectionComponent.defaultProps = {
    children: '',
    className: '',
    hasNavigationOffset: false,
    isDark: false,
    isFullBleed: false,
    isMedium: false
};

export default SectionComponent;
