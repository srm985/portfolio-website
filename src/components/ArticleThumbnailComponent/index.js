import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Image from '../ImageComponent';
import Title from '../TitleComponent';

import classNames from '../../utils/classNames';

import './styles.scss';

function ArticleThumbnailComponent(props) {
    const {
        articleCategory,
        articleExcerpt,
        articlePublishDate,
        articleThumbnailImageBlock: {
            imageAlt,
            imageSource: {
                childImageSharp: {
                    fluid = {}
                } = {}
            } = {}
        },
        articleTitle,
        className,
        slug: articleURL
    } = props;

    const formatDate = (date) => {
        const articleDate = new Date(date);

        const monthLookup = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        const {
            [articleDate.getMonth()]: articleMonth
        } = monthLookup;

        return `${articleMonth} ${articleDate.getFullYear()}`;
    };

    const {
        displayName
    } = ArticleThumbnailComponent;

    const componentClassNames = classNames(
        displayName,
        className
    );

    const metaClassNames = classNames(
        `${displayName}__meta`,
        'mb--1'
    );

    return (
        <Button
            className={componentClassNames}
            href={articleURL}
            isUnstyled
        >
            <div className={`${displayName}__overlay`} />
            <>
                <Image
                    alt={imageAlt}
                    className={`${displayName}__thumbnail-image`}
                    fluid={fluid}
                />
                <p className={metaClassNames}>
                    <span className={`${displayName}__category`}>{articleCategory}</span>
                    <span className={'mx--1'}>{'•'}</span>
                    <span>{formatDate(articlePublishDate)}</span>
                </p>
                <Title
                    className={'mb--1'}
                    heading={articleTitle}
                    headingSize={3}
                />
                <p>{articleExcerpt}</p>
            </>
        </Button>
    );
}

ArticleThumbnailComponent.displayName = 'ArticleThumbnailComponent';

ArticleThumbnailComponent.propTypes = {
    articleCategory: PropTypes.string,
    articleExcerpt: PropTypes.string,
    articlePublishDate: PropTypes.string,
    articleThumbnailImageBlock: PropTypes.shape({
        imageAlt: PropTypes.string,
        imageSource: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        }),
        imageTitle: PropTypes.string
    }),
    articleTitle: PropTypes.string,
    className: PropTypes.string,
    slug: PropTypes.string
};

ArticleThumbnailComponent.defaultProps = {
    articleCategory: '',
    articleExcerpt: '',
    articlePublishDate: '',
    articleThumbnailImageBlock: {},
    articleTitle: '',
    className: '',
    slug: ''
};

export default ArticleThumbnailComponent;
