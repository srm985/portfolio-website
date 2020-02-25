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
        pageSiteURL,
        pageTitle,
        pageType
    } = pageSEO || {};

    const author = pageAuthor || defaultAuthor;
    const description = pageDescription || defaultDescription;
    const image = pageImage || defaultImage;
    const keywords = pageKeywords || defaultKeywords;
    const siteURL = pageSiteURL || defaultSiteURL;
    const title = pageTitle ? injector(titleTemplate, {
        pageTitle
    }) : injector(titleTemplate, {
        pageTitle: defaultTitle
    });
    const type = pageType || defaultType;

    console.log({
        author,
        description,
        image,
        keywords,
        siteURL,
        title,
        type
    });

    return (
        <Helmet>
            <title>{title}</title>
            <link rel={'canonical'} href={siteURL} />
            <meta name={'author'} content={author} />
            <meta name={'description'} content={description} />
            <meta name={'description'} content={description} />
            <meta name={'image'} content={image} />
            <meta name={'keywords'} content={keywords} />
            <meta property={'og:description'} content={description} />
            <meta property={'og:image'} content={image} />
            <meta property={'og:title'} content={title} />
            <meta property={'og:type'} content={type} />
            <meta property={'og:url'} content={siteURL} />
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
