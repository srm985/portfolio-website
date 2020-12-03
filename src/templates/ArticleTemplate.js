import PropTypes from 'prop-types';
import React from 'react';

import FAB from '../components/FABComponent';

const ArticleTemplate = (props) => {
    const {
        content: {
            returnButtonIcon: {
                publicURL = ''
            } = {},
            returnButtonLink = '',
            returnButtonScreenReaderLabel = ''
        }
    } = props;

    const {
        displayName
    } = ArticleTemplate;

    return (
        <div className={displayName}>
            <FAB
                href={returnButtonLink}
                icon={publicURL}
                screenReaderLabel={returnButtonScreenReaderLabel}
            />
        </div>
    );
};

ArticleTemplate.displayName = 'ArticleTemplate';

ArticleTemplate.propTypes = {
    content: PropTypes.shape({
        returnButtonIcon: PropTypes.shape({
            publicURL: PropTypes.string
        }),
        returnButtonLink: PropTypes.string,
        returnButtonScreenReaderLabel: PropTypes.string
    })
};

ArticleTemplate.defaultProps = {
    content: {}
};

export default ArticleTemplate;
