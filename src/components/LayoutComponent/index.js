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
        children
    } = props;

    return (
        <div className={LayoutComponent.displayName}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

LayoutComponent.displayName = 'LayoutComponent';

LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutComponent;
