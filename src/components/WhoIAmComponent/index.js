import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import VisibilitySensor from 'react-visibility-sensor';

import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import Title from '../TitleComponent';

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
                aboutMeSectionImage: {
                    childImageSharp: {
                        fluid = {}
                    } = {}
                } = {},
                aboutMeSectionTitle
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = WhoIAmComponent;

        const decoratorSlashClassNames = classNames(
            `${displayName}__decorator-slash`,
            {
                [`${displayName}__decorator-slash--visible`]: isVisible
            }
        );

        const imageClassNames = classNames(
            `${displayName}__image`,
            {
                [`${displayName}__image--visible`]: isVisible
            }
        );

        return (
            <VisibilitySensor
                minTopValue={200}
                onChange={this.handleVisibilityChange}
                partialVisibility
                resizeCheck
            >
                <div className={displayName}>
                    <Grid className={`${displayName}__content-block`}>
                        <GridItem
                            breakpoints={{
                                large: {
                                    start: 1,
                                    stop: 6
                                },
                                medium: {
                                    start: 1,
                                    stop: 8
                                }
                            }}
                        >
                            <Title
                                className={'mb--2'}
                                headingSize={3}
                                title={aboutMeSectionTitle}
                            />
                            <ReactMarkdown
                                className={`${displayName}__body`}
                                source={aboutMeSectionBody}
                            />
                        </GridItem>
                    </Grid>
                    <div className={`${displayName}__graphic-block`}>
                        <div className={`${displayName}__decorator-slash-block`}>
                            <div className={decoratorSlashClassNames} />
                            <div className={decoratorSlashClassNames} />
                            <div className={decoratorSlashClassNames} />
                            <div className={decoratorSlashClassNames} />
                        </div>
                        <Image
                            className={imageClassNames}
                            fluid={fluid}
                        />
                    </div>
                </div>
            </VisibilitySensor>
        );
    }
}

WhoIAmComponent.displayName = 'WhoIAmComponent';

WhoIAmComponent.propTypes = {
    aboutMeSectionBody: PropTypes.string,
    aboutMeSectionImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({})
        })
    }),
    aboutMeSectionTitle: PropTypes.string
};

WhoIAmComponent.defaultProps = {
    aboutMeSectionBody: '',
    aboutMeSectionImage: {},
    aboutMeSectionTitle: ''
};

export default WhoIAmComponent;
