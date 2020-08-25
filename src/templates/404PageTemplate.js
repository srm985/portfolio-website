import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../utils/classNames';

const NotFoundPageTemplate = (props) => {
    const {
        content: {
            heroImageBlock: {
                imageAlt,
                imageSource: {
                    publicURL
                } = {}
            } = {}
        } = {}
    } = props;

    const {
        displayName
    } = NotFoundPageTemplate;

    const componentClassNames = classNames(
        displayName,
        'bs--border',
        'p--5',
        'center'
    );

    return (
        <div className={componentClassNames}>
            <img
                alt={imageAlt}
                src={publicURL}
            />
        </div>
    );
};

NotFoundPageTemplate.displayName = 'NotFoundPageTemplate';

NotFoundPageTemplate.propTypes = {
    content: {
        heroImageBlock: PropTypes.shape({
            imageAlt: PropTypes.string,
            imageSource: PropTypes.shape({
                publicURL: PropTypes.string
            })
        })
    }
};

NotFoundPageTemplate.defaultProps = {
    content: {}
};

export default NotFoundPageTemplate;
