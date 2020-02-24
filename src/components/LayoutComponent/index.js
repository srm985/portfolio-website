import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../FooterComponent';
import Navigation from '../NavigationComponent';
import SEO from '../SEOComponent';

import classNames from '../../utils/classNames';
import destructureNetlifyCMS from '../../utils/destructureNetlifyCMS';

import Query from './queries';

// Global SCSS Files
import '../../styles/global.scss';

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
            pageSEO = {}
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

    console.log({
        content
    });

    const [
        navigationContent
    ] = destructureNetlifyCMS(navigationQuery);
    const [
        footerContent
    ] = destructureNetlifyCMS(footerQuery);

    return (
        <div className={displayName}>
            <SEO pageSEO={pageSEO} />
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
        pageSEO: PropTypes.shape({})
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
