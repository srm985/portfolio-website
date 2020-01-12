import PropTypes from 'prop-types';
import React from 'react';
import {
    Helmet
} from 'react-helmet';

import Footer from '../FooterComponent';
import Header from '../HeaderComponent';

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
        hasHeader,
        headerQuery,
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

    const headerData = destructureNetlifyCMS(headerQuery);
    const footerData = destructureNetlifyCMS(footerQuery);

    return (
        <div className={displayName}>
            <Helmet
                defer={false}
                title={pageTitle}
            />
            {
                hasHeader && <Header {...headerData} />
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
