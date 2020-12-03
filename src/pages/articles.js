import PropTypes from 'prop-types';
import React from 'react';
// import {
//     graphql
// } from 'gatsby';

import ArticlesPageTemplate from '../templates/ArticlesPageTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ArticlesPage = (props) => {
    const {
        data: {
            pageQuery,
            projectListQuery
        } = {}
    } = props;

    const pageData = destructureNetlifyCMS(pageQuery)[0];
    const projectList = destructureNetlifyCMS(projectListQuery);

    return (
        <Layout content={pageData}>
            <ArticlesPageTemplate content={{
                projectList
            }}
            />
        </Layout>
    );
};

// export const query = graphql`
//     query {
//         pageQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "portfolio"}}) {
//             edges {
//                 node {
//                     childMarkdownRemark {
//                         frontmatter {
//                             pageSEO {
//                                 pageAuthor
//                                 pageDescription
//                                 pageImage
//                                 pageKeywords
//                                 pageSiteURL
//                                 pageTitle
//                                 pageType
//                             }
//                             heroImageBlock {
//                                 imageAlt
//                                 imageOpacity
//                                 imageSource {
//                                     childImageSharp {
//                                         fluid(maxWidth: 1600) {
//                                             ...GatsbyImageSharpFluid_noBase64
//                                         }
//                                     }
//                                 }
//                                 imageTitle
//                             }
//                             portfolioPageHeroTitle
//                             portfolioPageHeroSubtitle
//                             projectDescriptionTitle
//                             projectRoleTitle
//                             viewProjectCTA
//                         }
//                     }
//                 }
//             }
//         }
//         projectListQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, childMarkdownRemark: {frontmatter: {projectExcerpt: {ne: null}}}}) {
//             edges {
//                 node {
//                     childMarkdownRemark {
//                         fields {
//                             slug
//                         }
//                         frontmatter {
//                             pageTitle
//                             projectExcerpt
//                             projectThumbnailImageBlock {
//                                 imageAlt
//                                 imageSource {
//                                     childImageSharp {
//                                         fluid(maxWidth: 600) {
//                                             ...GatsbyImageSharpFluid_noBase64
//                                         }
//                                     }
//                                 }
//                             }
//                             projectTitle
//                             role
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;

ArticlesPage.propTypes = {
    data: PropTypes.shape({
        pageTitle: PropTypes.string
    })
};

ArticlesPage.defaultProps = {
    data: {}
};

export default ArticlesPage;
