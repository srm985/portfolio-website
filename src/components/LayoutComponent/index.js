import React from 'react';

import Footer from '../FooterComponent';
import Header from '../HeaderComponent';

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

export default LayoutComponent;
