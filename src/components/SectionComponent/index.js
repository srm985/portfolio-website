import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

const SectionComponent = (props) => {
    const {
        children,
        isDark,
        isLight
    } = props;

    const {
        displayName
    } = SectionComponent;

    const componentClassNames = classNames(
        displayName,
        {
            [`${displayName}--dark`]: isDark,
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
    isDark: PropTypes.bool,
    isLight: PropTypes.bool
};

SectionComponent.defaultProps = {
    children: '',
    isDark: false,
    isLight: true
};

export default SectionComponent;
