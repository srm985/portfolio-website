import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import {
    OVERLAY_BLACK,
    OVERLAY_OPTIONS
} from './config';

import './styles.scss';

const HeroComponent = (props) => {
    const {
        alt,
        children,
        className,
        defaultSource,
        isHalfHeight,
        overlayColor
    } = props;

    const {
        displayName
    } = HeroComponent;

    const hasImage = Object.keys(defaultSource).length > 0;

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

    return (
        <div className={componentClassNames}>
            {hasImage ? (
                <>
                    <Image
                        alt={alt}
                        className={`${displayName}__hero-image`}
                        fluid={defaultSource}
                    />
                    <div className={overlayClassNames} />
                </>
            ) : (
                <div className={`${displayName}__gradient`} />
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
    isHalfHeight: PropTypes.bool,
    overlayColor: PropTypes.oneOf(OVERLAY_OPTIONS)
};

HeroComponent.defaultProps = {
    alt: '',
    children: '',
    className: '',
    defaultSource: {},
    isHalfHeight: false,
    overlayColor: OVERLAY_BLACK
};

HeroComponent.displayName = 'HeroComponent';

export default HeroComponent;
