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
        children: {
            props: {
                content: extractedContent = {}
            } = {}
        },
        content,
        content: {
            pageTitle
        },
        footerQuery,
        hasFooter,
        hasNavigation,
        navigationQuery
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
        navigationContent
    ] = destructureNetlifyCMS(navigationQuery);
    const [
        footerContent
    ] = destructureNetlifyCMS(footerQuery);

    return (
        <div className={displayName}>
            <Helmet
                defer={false}
                title={pageTitle}
            />
            {
                hasNavigation && <Navigation content={navigationContent} />
            }
            <main className={mainContentClassNames}>
                {
                    React.cloneElement(children, {
                        content: {
                            ...content,
                            ...extractedContent
                        }
                    })
                }
            </main>
            {
                hasFooter && <Footer content={footerContent} />
            }
        </div>
    );
};

LayoutComponent.displayName = 'LayoutComponent';

LayoutComponent.propTypes = {
    children: PropTypes.node.isRequired,
    content: PropTypes.shape({
        pageTitle: PropTypes.string
    }),
    footerQuery: PropTypes.shape({}),
    hasFooter: PropTypes.bool,
    hasNavigation: PropTypes.bool,
    navigationQuery: PropTypes.shape({})
};

LayoutComponent.defaultProps = {
    content: {},
    footerQuery: {},
    hasFooter: true,
    hasNavigation: true,
    navigationQuery: {}
};

const LayoutComponentConnected = (props) => (
    <Query>
        <LayoutComponent {...props} />
    </Query>
);

export default LayoutComponentConnected;
