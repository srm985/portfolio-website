import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import {
    OVERLAY_BLACK,
    OVERLAY_OPTIONS
} from './config';

import './styles.scss';

const DEFAULT_OPACITY = 100;

const HeroComponent = (props) => {
    const {
        alt,
        children,
        className,
        defaultSource,
        imageOpacity,
        isHalfHeight,
        overlayColor
    } = props;

    const {
        displayName
    } = HeroComponent;

    const hasImage = Object.keys(defaultSource).length > 0;

    console.log({
        hasImage
    });

    const componentClassNames = classNames(
        className,
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

    let opacity = DEFAULT_OPACITY / 100;

    if (imageOpacity >= 0 && imageOpacity <= 100) {
        opacity = imageOpacity / 100;
    }

    return (
        <div className={componentClassNames}>
            {hasImage && (
                <>
                    <Image
                        alt={alt}
                        className={`${displayName}__hero-image`}
                        fluid={defaultSource}
                        style={{
                            opacity
                        }}
                    />
                    <div className={overlayClassNames} />
                </>
            )}
            {
                children && (
                    <div className={`${displayName}__content`}>
                        {children}
                    </div>
                )
            }
        </div>
    );
};

HeroComponent.propTypes = {
    alt: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultSource: PropTypes.shape({}),
    imageOpacity: PropTypes.number,
    isHalfHeight: PropTypes.bool,
    overlayColor: PropTypes.oneOf(OVERLAY_OPTIONS)
};

HeroComponent.defaultProps = {
    alt: '',
    children: '',
    className: '',
    defaultSource: {},
    imageOpacity: DEFAULT_OPACITY,
    isHalfHeight: false,
    overlayColor: OVERLAY_BLACK
};

HeroComponent.displayName = 'HeroComponent';

export default HeroComponent;
