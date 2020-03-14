import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import TextBlock from '../TextBlockComponent';
import Title from '../TitleComponent';
import VisibilityChecker from '../VisibilityCheckerComponent';

import classNames from '../../utils/classNames';

import './styles.scss';

class WhoIAmComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    handleVisibilityChange = (isVisible) => {
        this.setState((previousState) => {
            const {
                isVisible: wasVisible
            } = previousState;

            if (isVisible === wasVisible) {
                return null;
            }

            return ({
                isVisible
            });
        });
    }

    render() {
        const {
            props: {
                aboutMeSectionBody,
                aboutMeSectionImageBlock: {
                    imageAlt = '',
                    imageSource: {
                        childImageSharp: {
                            fluid = {}
                        } = {}
                    } = {}
                },
                aboutMeSectionTitle
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = WhoIAmComponent;

        const componentClassNames = classNames(
            displayName,
            'padding-wrapper'
        );

        const boundingLineClassNames = classNames(
            `${displayName}__bounding-line`,
            {
                [`${displayName}__bounding-line--visible`]: isVisible
            }
        );

        const imageClassNames = classNames(
            `${displayName}__image`,
            {
                [`${displayName}__image--visible`]: isVisible
            }
        );

        return (
            <VisibilityChecker handleChange={this.handleVisibilityChange}>
                <div className={componentClassNames}>
                    <Grid className={`${displayName}__content-block`}>
                        <GridItem
                            breakpoints={{
                                large: {
                                    start: 1,
                                    stop: 6
                                },
                                medium: {
                                    start: 1,
                                    stop: 13
                                }
                            }}
                        >
                            <Title
                                className={'mb--2'}
                                heading={aboutMeSectionTitle}
                                headingSize={3}
                                isAccented
                                isAnimated
                            />
                            <TextBlock
                                className={`${displayName}__body`}
                                isAnimated
                                text={aboutMeSectionBody}
                            />
                        </GridItem>
                        <GridItem
                            breakpoints={{
                                large: {
                                    start: 7,
                                    stop: 13
                                },
                                medium: {
                                    start: 5,
                                    stop: 13
                                }
                            }}
                        >
                            <div className={`${displayName}__graphic-block`}>
                                <div className={boundingLineClassNames} />
                                <div className={boundingLineClassNames} />
                                <div className={boundingLineClassNames} />
                                <div className={boundingLineClassNames} />
                                <Image
                                    alt={imageAlt}
                                    className={imageClassNames}
                                    fluid={fluid}
                                />
                            </div>
                        </GridItem>
                    </Grid>
                </div>
            </VisibilityChecker>
        );
    }
}

WhoIAmComponent.displayName = 'WhoIAmComponent';

WhoIAmComponent.propTypes = {
    aboutMeSectionBody: PropTypes.string,
    aboutMeSectionImageBlock: PropTypes.shape({
        imageAlt: PropTypes.string,
        imageOpacity: PropTypes.number,
        imageSource: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        })
    }),
    aboutMeSectionTitle: PropTypes.string
};

WhoIAmComponent.defaultProps = {
    aboutMeSectionBody: '',
    aboutMeSectionImageBlock: {},
    aboutMeSectionTitle: ''
};

export default WhoIAmComponent;
