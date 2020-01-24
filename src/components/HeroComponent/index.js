import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import {
    OVERLAY_OPTIONS
} from './config';

import './styles.scss';

const HeroComponent = (props) => {
    const {
        alt,
        defaultSource,
        isHalfHeight,
        overlayColor
    } = props;

    const {
        displayName
    } = HeroComponent;

    const hasImage = Object.keys(defaultSource).length > 0;

    const componentClassNames = classNames(
        displayName,
        {
            [`${displayName}--half`]: isHalfHeight,
            [`${displayName}--has-image`]: hasImage
        }
    );

    const overlayClassNames = classNames(
        `${displayName}__hero-image-overlay`,
        {
            [`${displayName}__hero-image-overlay--${overlayColor}`]: overlayColor
        }
    );

    return (
        <div className={componentClassNames}>
            {hasImage && (
                <Image
                    alt={alt}
                    className={`${displayName}__hero-image`}
                    fluid={defaultSource}
                />
            )}
            {
                overlayColor && (
                    <div className={overlayClassNames} />
                )
            }
        </div>
    );
};

HeroComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    defaultSource: PropTypes.shape({
        src: PropTypes.string
    }),
    isHalfHeight: PropTypes.bool,
    overlayColor: PropTypes.oneOf(OVERLAY_OPTIONS)
};

HeroComponent.defaultProps = {
    defaultSource: {},
    isHalfHeight: false,
    overlayColor: ''
};

HeroComponent.displayName = 'HeroComponent';

export default HeroComponent;
