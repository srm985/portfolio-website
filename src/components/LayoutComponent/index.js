import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../FooterComponent';
import Header from '../HeaderComponent';

// Global SCSS Files
import '../../styles/constants.scss';
import '../../styles/styles.scss';

import './styles.scss';

const LayoutComponent = (props) => {
    const {
        children,
        hasFooter,
        hasHeader
    } = props;

    return (
        <div className={LayoutComponent.displayName}>
            {hasHeader && <Header />}
            {children}
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
