import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql,
    StaticQuery
} from 'gatsby';
import {
    Helmet
} from 'react-helmet';

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
        hasHeader,
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
                hasHeader && (
                    <StaticQuery
                        query={
                            graphql`
                                query {
                                    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "header"}}) {
                                        edges {
                                            node {
                                                childMarkdownRemark {
                                                    frontmatter {
                                                        headerLinks {
                                                            pageName
                                                            pageURL
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            `
                        }
                        render={(data) => <Header data={data} />}
                    />
                )
            }
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
    hasHeader: PropTypes.bool,
    pageTitle: PropTypes.string.isRequired
};

LayoutComponent.defaultProps = {
    hasFooter: true,
    hasHeader: true
};

export default LayoutComponent;
