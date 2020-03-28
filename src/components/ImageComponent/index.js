import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

const ImageComponent = (props) => {
    const {
        alt,
        className,
        fluid,
        src,
        style,
        title
    } = props;

    const {
        displayName
    } = ImageComponent;

    const componentClassNames = classNames(
        className,
        displayName
    );

    return (
        src ? (
            <img
                alt={alt}
                className={componentClassNames}
                src={src}
                style={style}
                title={title}
            />
        ) : (
            <Image
                alt={alt}
                className={componentClassNames}
                fluid={fluid}
                style={style}
                title={title}
            />
        )
    );
};

ImageComponent.displayName = 'ImageComponent';

ImageComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fluid: PropTypes.shape({}),
    src: PropTypes.string,
    style: PropTypes.shape({}),
    title: PropTypes.string
};

ImageComponent.defaultProps = {
    className: '',
    fluid: {},
    src: '',
    style: {},
    title: ''
};

export default ImageComponent;
