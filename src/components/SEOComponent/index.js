import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';
import {
    Helmet
} from 'react-helmet';

const SEOComponent = (props) => {
    const {
        content: {
            pageAuthor,
            pageDescription,
            pageImage,
            pageKeywords,
            pageSiteURL,
            pageTitle,
            pageType
        },
        defaultSiteMetadataQuery: {
            siteMetadata: {
                author: defaultAuthor,
                description: defaultDescription,
                image: defaultImage,
                keywords: defaultKeywords,
                siteURL: defaultSiteURL,
                title: defaultTitle,
                type: defaultType
            } = {}
        }
    } = props;

    const author = pageAuthor || defaultAuthor;
    const description = pageDescription || defaultDescription;
    const image = pageImage || defaultImage;
    const keywords = pageKeywords || defaultKeywords;
    const siteURL = pageSiteURL || defaultSiteURL;
    const title = pageTitle || defaultTitle;
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

export const query = graphql`
    query {
        defaultSiteMetadataQuery: site {
            siteMetadata {
                author
                description
                image
                keywords
                siteURL
                title
                type
            }
        }
    }
`;

SEOComponent.propTypes = {
    content: PropTypes.shape({
        pageAuthor: PropTypes.string,
        pageDescription: PropTypes.string,
        pageImage: PropTypes.string,
        pageKeywords: PropTypes.string,
        pageSiteURL: PropTypes.string,
        pageTitle: PropTypes.string,
        pageType: PropTypes.string
    }),
    defaultSiteMetadataQuery: PropTypes.shape({
        siteMetadata: PropTypes.shape({
            author: PropTypes.string,
            description: PropTypes.string,
            image: PropTypes.string,
            keywords: PropTypes.string,
            siteURL: PropTypes.string,
            title: PropTypes.string,
            type: PropTypes.string
        })
    })
};

SEOComponent.defaultProps = {
    content: {},
    defaultSiteMetadataQuery: {}
};

export default SEOComponent;
