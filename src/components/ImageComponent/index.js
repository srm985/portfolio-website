import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import ImageCitation from '../ImageCitationComponent';

import classNames from '../../utils/classNames';

import './styles.scss';

class ImageComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFullScreen: false
        };
    }

    handleKeyPress = (event) => {
        const {
            state: {
                isFullScreen
            }
        } = this;

        const {
            keyCode
        } = event;

        const KEY_CODE_ESCAPE = 27;
        const KEY_CODE_SPACE = 32;

        if ((isFullScreen && keyCode === KEY_CODE_ESCAPE) || keyCode === KEY_CODE_SPACE) {
            event.preventDefault();

            this.toggleFullScreen();
        }
    }

    toggleFullScreen = () => {
        const {
            props: {
                canViewEnlarged
            }
        } = this;

        if (canViewEnlarged) {
            this.setState((previousState) => {
                const {
                    isFullScreen: wasFullScreen
                } = previousState;

                return ({
                    isFullScreen: !wasFullScreen
                });
            });
        }
    }

    render() {
        const {
            props: {
                alt,
                canViewEnlarged,
                citation,
                className,
                fluid,
                src,
                style,
                title
            },
            state: {
                isFullScreen
            }
        } = this;

        const {
            displayName
        } = ImageComponent;

        const componentClassNames = classNames(
            className,
            displayName,
            {
                [`${displayName}--can-view-enlarged`]: canViewEnlarged,
                [`${displayName}--full-screen`]: isFullScreen
            }
        );

        const imageClassNames = classNames(
            `${displayName}__image`,
            {
                [`${displayName}__image--full-screen`]: isFullScreen
            }
        );

        const enlargeImageAttributes = !canViewEnlarged ? {} : {
            onClick: this.toggleFullScreen,
            onKeyDown: this.handleKeyPress,
            role: 'button',
            tabIndex: 0
        };

        return (
            <>
                <div
                    {...enlargeImageAttributes}
                    className={componentClassNames}
                >
                    {
                        src ? (
                            <img
                                alt={alt}
                                className={imageClassNames}
                                src={src}
                                style={style}
                                title={title}
                            />
                        ) : (
                            <Image
                                alt={alt}
                                className={imageClassNames}
                                fluid={fluid}
                                style={style}
                                title={title}
                            />
                        )
                    }
                </div>
                <ImageCitation {...citation} />
            </>
        );
    }
}

ImageComponent.displayName = 'ImageComponent';

ImageComponent.propTypes = {
    alt: PropTypes.string.isRequired,
    canViewEnlarged: PropTypes.bool,
    citation: PropTypes.shape({}),
    className: PropTypes.string,
    fluid: PropTypes.shape({}),
    src: PropTypes.string,
    style: PropTypes.shape({}),
    title: PropTypes.string
};

ImageComponent.defaultProps = {
    canViewEnlarged: false,
    citation: {},
    className: '',
    fluid: {},
    src: '',
    style: {},
    title: ''
};

export default ImageComponent;
