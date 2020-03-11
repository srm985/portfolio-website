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
        children,
        className,
        heroImageBlock,
        isHalfHeight,
        overlayColor
    } = props;

    const {
        imageAlt = '',
        imageOpacity = DEFAULT_OPACITY,
        imageSource: {
            childImageSharp: {
                fluid = {}
            } = {}
        } = {}
    } = heroImageBlock || {};

    const {
        displayName
    } = HeroComponent;

    const hasImage = Object.keys(fluid).length > 0;

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

    const contentClassNames = classNames(
        `${displayName}__content`,
        'padding-wrapper'
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
                        alt={imageAlt}
                        className={`${displayName}__hero-image`}
                        fluid={fluid}
                        style={{
                            opacity
                        }}
                    />
                    <div className={overlayClassNames} />
                </>
            )}
            {
                children && (
                    <div className={contentClassNames}>
                        {children}
                    </div>
                )
            }
        </div>
    );
};

HeroComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    heroImageBlock: PropTypes.shape({
        imageAlt: PropTypes.string,
        imageOpacity: PropTypes.number,
        imageSource: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        }),
        imageTitle: PropTypes.string
    }),
    isHalfHeight: PropTypes.bool,
    overlayColor: PropTypes.oneOf(OVERLAY_OPTIONS)
};

HeroComponent.defaultProps = {
    children: '',
    className: '',
    heroImageBlock: {},
    isHalfHeight: false,
    overlayColor: OVERLAY_BLACK
};

HeroComponent.displayName = 'HeroComponent';

export default HeroComponent;
