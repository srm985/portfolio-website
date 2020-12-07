import PropTypes from 'prop-types';
import React from 'react';

import ArticleThumbnail from '../components/ArticleThumbnailComponent';
import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Section from '../components/SectionComponent';

const ArticlesPageTemplate = (props) => {
    const {
        content: {
            articleList = []
        }
    } = props;

    const renderArticleTiles = () => articleList.sort((article1, article2) => {
        const {
            articlePublishDate: articlePublishDate1
        } = article1;

        const {
            articlePublishDate: articlePublishDate2
        } = article2;

        const date1 = new Date(articlePublishDate1);
        const date2 = new Date(articlePublishDate2);

        return date2 - date1;
    }).map((articleData) => {
        const {
            slug
        } = articleData;

        return (
            <GridItem
                breakpoints={{
                    large: {
                        columns: 6
                    }
                }}
                key={slug}
            >
                <ArticleThumbnail
                    className={'mb--2 mb-medium--3'}
                    {...articleData}
                />
            </GridItem>
        );
    });

    return (
        <Section hasNavigationOffset>
            <Grid>
                {renderArticleTiles()}
            </Grid>
        </Section>
    );
};

ArticlesPageTemplate.propTypes = {
    content: PropTypes.shape({
        articleList: PropTypes.arrayOf(PropTypes.shape({}))
    })
};

ArticlesPageTemplate.defaultProps = {
    content: {}
};

export default ArticlesPageTemplate;
