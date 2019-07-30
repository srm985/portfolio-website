import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../FooterComponent';
import Header from '../HeaderComponent';

import classNames from '../../utils/classNames';

// Global SCSS Files
import '../../styles/styles.scss';

import './styles.scss';

const LayoutComponent = (props) => {
    const {
        children,
        hasFooter,
        hasHeader
    } = props;

    const {
        displayName
    } = LayoutComponent;

    const mainContentClassNames = classNames(
        `${displayName}__main`,
        `${displayName}__main--has-header`
    );

    return (
        <div className={displayName}>
            {hasHeader && <Header />}
            <main className={mainContentClassNames}>
                {children}
            </main>
            {hasFooter && <Footer />}
        </div>
    );
};

LayoutComponent.displayName = 'LayoutComponent';

LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired,
    hasFooter: PropTypes.bool,
    hasHeader: PropTypes.bool
};

LayoutComponent.defaultProps = {
    hasFooter: true,
    hasHeader: true
};

export default LayoutComponent;
