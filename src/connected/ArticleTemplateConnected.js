import PropTypes from 'prop-types';
import React from 'react';
// import {
//     graphql
// } from 'gatsby';

import Layout from '../components/LayoutComponent';

import ArticleTemplate from '../templates/ArticleTemplate';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ArticleTemplateConnected = (props) => {
    const {
        data: {
            pageQuery: {
                frontmatter: pageData
            },
            templateGlobalsQuery
        } = {}
    } = props;

    const [
        templateGlobalData
    ] = destructureNetlifyCMS(templateGlobalsQuery);

    return (
        <Layout
            content={{
                ...templateGlobalData,
                ...pageData
            }}
            hasNavigationDark
        >
            <ArticleTemplate />
        </Layout>
    );
};

// export const query = graphql`
//     query($slug: String!) {
//         pageQuery: markdownRemark(fields: { slug: { eq: $slug } }) {
//             frontmatter {
//                 pageSEO {
//                     pageAuthor
//                     pageDescription
//                     pageImage
//                     pageKeywords
//                     pageSiteURL
//                     pageTitle
//                     pageType
//                 }
//                 heroImageBlock {
//                     imageAlt
//                     imageOpacity
//                     imageSource {
//                         childImageSharp {
//                             fluid(maxWidth: 1600) {
//                                 ...GatsbyImageSharpFluid_noBase64
//                             }
//                         }
//                     }
//                     imageTitle
//                 }
//                 articleDescription
//                 articleExcerpt
//                 articleSectionList {
//                     articleSectionTitle
//                     articleSectionBody
//                 }
//                 articleTitle
//             }
//         }
//         templateGlobalsQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "article-global"}}) {
//             edges {
//                 node {
//                     childMarkdownRemark {
//                         frontmatter {
//                             returnButtonIcon {
//                                 publicURL
//                             }
//                             returnButtonLink
//                             returnButtonScreenReaderLabel
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;

ArticleTemplateConnected.propTypes = {
    data: PropTypes.shape({})
};

ArticleTemplateConnected.defaultProps = {
    data: {}
};

export default ArticleTemplateConnected;
