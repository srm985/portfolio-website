import PropTypes from 'prop-types';
import React from 'react';
import {
    Helmet
} from 'react-helmet';

import Query from './queries';

import injector from '../../utils/injector';

const SEOComponent = (props) => {
    const {
        defaultSEOQuery,
        pageSEO
    } = props;

    const {
        siteMetadata: {
            author: defaultAuthor,
            defaultTitle,
            description: defaultDescription,
            image: defaultImage,
            keywords: defaultKeywords,
            postingTitle: defaultPostingTitle,
            siteURL: defaultSiteURL,
            titleTemplate,
            type: defaultType
        } = {}
    } = defaultSEOQuery || {};

    const {
        pageAuthor,
        pageDescription,
        pageImage,
        pageKeywords,
        pagePostingTitle,
        pageSiteURL,
        pageTitle,
        pageType
    } = pageSEO || {};

    const author = pageAuthor || defaultAuthor;
    const description = pageDescription || defaultDescription;
    const image = pageImage || defaultImage;
    const keywords = pageKeywords || defaultKeywords;
    const postingTitle = pagePostingTitle || defaultPostingTitle;
    const siteURL = pageSiteURL || defaultSiteURL;
    const title = pageTitle ? injector(titleTemplate, {
        pageTitle
    }) : injector(titleTemplate, {
        pageTitle: defaultTitle
    });
    const type = pageType || defaultType;

    return (
        <Helmet>
            <title>{title}</title>
            <link
                href={siteURL}
                rel={'canonical'}
            />
            <meta
                content={author}
                name={'author'}
            />
            <meta
                content={description}
                name={'description'}
            />
            <meta
                content={description}
                name={'description'}
            />
            <meta
                content={image}
                name={'image'}
            />
            <meta
                content={keywords}
                name={'keywords'}
            />
            <meta
                content={description}
                property={'og:description'}
            />
            <meta
                content={image}
                property={'og:image'}
            />
            <meta
                content={postingTitle}
                property={'og:title'}
            />
            <meta
                content={type}
                property={'og:type'}
            />
            <meta
                content={siteURL}
                property={'og:url'}
            />
        </Helmet>
    );
};

SEOComponent.propTypes = {
    defaultSEOQuery: PropTypes.shape({
        siteMetadata: PropTypes.shape({
            author: PropTypes.string,
            defaultTitle: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.string,
            keywords: PropTypes.string,
            postingTitle: PropTypes.string,
            siteURL: PropTypes.string,
            titleTemplate: PropTypes.string,
            type: PropTypes.string
        })
    }),
    pageSEO: PropTypes.shape({
        pageAuthor: PropTypes.string,
        pageDescription: PropTypes.string,
        pageImage: PropTypes.string,
        pageKeywords: PropTypes.string,
        pagePostingTitle: PropTypes.string,
        pageSiteURL: PropTypes.string,
        pageTitle: PropTypes.string,
        pageType: PropTypes.string
    })
};

SEOComponent.defaultProps = {
    defaultSEOQuery: {},
    pageSEO: {}
};

const SEOComponentConnected = (props) => (
    <Query>
        <SEOComponent {...props} />
    </Query>
);

export default SEOComponentConnected;
