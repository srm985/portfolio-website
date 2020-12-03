import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Section from '../components/SectionComponent';

const ArticlesPageTemplate = (props) => {
    const {
        content: {
            articleList = []
        }
    } = props;

    const renderArticleTiles = () => articleList.map((articleData) => {
        const {
            slug
        } = articleData;

        return (
            <GridItem
                breakpoints={{
                    extraLarge: {
                        start: 3,
                        stop: 11
                    },
                    large: {
                        start: 2,
                        stop: 12
                    }
                }}
                key={slug}
            >
                <p>{'This is a project...'}</p>
            </GridItem>
        );
    });

    return (
        <Section isMedium>
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
