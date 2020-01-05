import PropTypes from 'prop-types';
import React from 'react';
import {
    Helmet
} from 'react-helmet';

import Footer from '../FooterComponent';
import Header from '../HeaderComponent';

import classNames from '../../utils/classNames';

import Query from './queries';

// Global SCSS Files
import '../../styles/styles.scss';

import './styles.scss';

const LayoutComponent = (props) => {
    const {
        children,
        footerQuery: footerData,
        hasFooter,
        hasHeader,
        headerQuery: headerData,
        pageTitle
    } = props;

    const {
        displayName
    } = LayoutComponent;

    const mainContentClassNames = classNames(
        `${displayName}__main`,
        {
            [`${displayName}__main--has-footer`]: hasFooter,
            [`${displayName}__main--has-header`]: hasHeader
        }
    );

    return (
        <div className={displayName}>
            <Helmet
                defer={false}
                title={pageTitle}
            />
            {
                hasHeader && <Header data={headerData} />
            }
            <main className={mainContentClassNames}>
                {children}
            </main>
            {
                hasFooter && <Footer data={footerData} />
            }
        </div>
    );
};

LayoutComponent.displayName = 'LayoutComponent';

LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired,
    footerQuery: PropTypes.shape({}),
    hasFooter: PropTypes.bool,
    hasHeader: PropTypes.bool,
    headerQuery: PropTypes.shape({}),
    pageTitle: PropTypes.string.isRequired
};

LayoutComponent.defaultProps = {
    footerQuery: {},
    hasFooter: true,
    hasHeader: true,
    headerQuery: {}
};

const LayoutComponentConnected = (props) => (
    <Query>
        <LayoutComponent {...props} />
    </Query>
);

export default LayoutComponentConnected;
