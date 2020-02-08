import PropTypes from 'prop-types';
import React from 'react';
import {
    Helmet
} from 'react-helmet';

import Footer from '../FooterComponent';
import Navigation from '../NavigationComponent';

import classNames from '../../utils/classNames';
import destructureNetlifyCMS from '../../utils/destructureNetlifyCMS';

import Query from './queries';

// Global SCSS Files
import '../../styles/styles.scss';

import './styles.scss';

const LayoutComponent = (props) => {
    const {
        children,
        footerQuery,
        hasFooter,
        hasNavigation,
        navigationQuery,
        pageTitle
    } = props;

    const {
        displayName
    } = LayoutComponent;

    const mainContentClassNames = classNames(
        `${displayName}__main`,
        {
            [`${displayName}__main--has-footer`]: hasFooter,
            [`${displayName}__main--has-navigation`]: hasNavigation
        }
    );

    const [
        navigationData
    ] = destructureNetlifyCMS(navigationQuery);
    const [
        footerData
    ] = destructureNetlifyCMS(footerQuery);

    return (
        <div className={displayName}>
            <Helmet
                defer={false}
                title={pageTitle}
            />
            {
                hasNavigation && <Navigation {...navigationData} />
            }
            <main className={mainContentClassNames}>
                {
                    React.cloneElement(children, {
                        ...props
                    })
                }
            </main>
            {
                hasFooter && <Footer {...footerData} />
            }
        </div>
    );
};

LayoutComponent.displayName = 'LayoutComponent';

LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired,
    footerQuery: PropTypes.shape({}),
    hasFooter: PropTypes.bool,
    hasNavigation: PropTypes.bool,
    navigationQuery: PropTypes.shape({}),
    pageTitle: PropTypes.string
};

LayoutComponent.defaultProps = {
    footerQuery: {},
    hasFooter: true,
    hasNavigation: true,
    navigationQuery: {},
    pageTitle: ''
};

const LayoutComponentConnected = (props) => (
    <Query>
        <LayoutComponent {...props} />
    </Query>
);

export default LayoutComponentConnected;
