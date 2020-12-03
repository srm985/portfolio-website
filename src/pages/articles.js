import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import ArticlesPageTemplate from '../templates/ArticlesPageTemplate';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ArticlesPage = (props) => {
    const {
        data: {
            articleListQuery,
            pageQuery
        } = {}
    } = props;

    const pageData = destructureNetlifyCMS(pageQuery)[0];
    const articleList = destructureNetlifyCMS(articleListQuery);

    return (
        <Layout content={pageData}>
            <ArticlesPageTemplate content={{
                articleList
            }}
            />
        </Layout>
    );
};

export const query = graphql`
    query {
        articleListQuery: allFile(filter: {sourceInstanceName: {eq: "content"}, childMarkdownRemark: {frontmatter: {articleExcerpt: {ne: null}}}}) {
            edges {
                node {
                    childMarkdownRemark {
                        fields {
                            slug
                        }
                        frontmatter {
                            pageTitle
                            articleExcerpt
                            articleThumbnailImageBlock {
                                imageAlt
                                imageSource {
                                    childImageSharp {
                                        fluid(maxWidth: 600) {
                                            ...GatsbyImageSharpFluid_noBase64
                                        }
                                    }
                                }
                            }
                            articleTitle
                        }
                    }
                }
            }
        }
    }
`;

ArticlesPage.propTypes = {
    data: PropTypes.shape({
        pageTitle: PropTypes.string
    })
};

ArticlesPage.defaultProps = {
    data: {}
};

export default ArticlesPage;
