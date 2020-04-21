import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Card from '../CardComponent';
import Image from '../ImageComponent';
import TextBlock from '../TextBlockComponent';
import Title from '../TitleComponent';
import VisibilityChecker from '../VisibilityCheckerComponent';

import {
    BUTTON_STYLE_TYPE_NEUMORPHIC
} from '../ButtonComponent/config';
import {
    BACKGROUND_COLOR_NEUMORPHIC
} from '../CardComponent/config';

import classNames from '../../utils/classNames';

import './styles.scss';

class PortfolioItemComponent extends React.Component {
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

            console.log({
                isVisible
            });
            console.log({
                wasVisible
            });

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
                className,
                projectDescriptionTitle,
                projectExcerpt,
                projectRoleTitle,
                projectThumbnailImageBlock: {
                    imageAlt = '',
                    imageSource: {
                        childImageSharp: {
                            fluid = {}
                        } = {}
                    } = {}
                } = {},
                projectTitle,
                role,
                slug,
                viewProjectCTA
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = PortfolioItemComponent;

        // Drop the final forward slash for accurate analytics tracking.
        const formattedLink = slug.replace(/\/$/, '');

        const componentClassNames = classNames(
            className,
            displayName,
            {
                [`${displayName}--visible`]: isVisible
            }
        );

        const titleClassNames = classNames(
            `${displayName}__card-title`,
            {
                [`${displayName}__card-title--visible`]: isVisible
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
                <div>
                    <Card
                        backgroundColor={BACKGROUND_COLOR_NEUMORPHIC}
                        className={componentClassNames}
                    >
                        <div className={`${displayName}__inner`}>
                            <Image
                                alt={imageAlt}
                                className={imageClassNames}
                                fluid={fluid}
                            />
                            <div className={`${displayName}__placard`}>
                                <div>
                                    <Title
                                        className={titleClassNames}
                                        heading={projectTitle}
                                        headingSize={2}
                                    />
                                    <Title
                                        heading={projectRoleTitle}
                                        headingSize={3}
                                    />
                                    <TextBlock
                                        className={`${displayName}__role mb--3`}
                                        text={role}
                                    />
                                    <Title
                                        heading={projectDescriptionTitle}
                                        headingSize={3}
                                    />
                                    <TextBlock
                                        className={`${displayName}__excerpt mb--4`}
                                        isAnimated
                                        text={projectExcerpt}
                                    />
                                </div>
                                <Button
                                    className={`${displayName}__button`}
                                    href={formattedLink}
                                    isAlignedRight
                                    isAnimated
                                    label={viewProjectCTA}
                                    styleType={BUTTON_STYLE_TYPE_NEUMORPHIC}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </VisibilityChecker>
        );
    }
}

PortfolioItemComponent.displayName = 'PortfolioItemComponent';

PortfolioItemComponent.propTypes = {
    className: PropTypes.string,
    projectDescriptionTitle: PropTypes.string,
    projectExcerpt: PropTypes.string,
    projectRoleTitle: PropTypes.string,
    projectThumbnailImageBlock: PropTypes.shape({
        imageAlt: PropTypes.string,
        imageOpacity: PropTypes.number,
        imageSource: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        })
    }),
    projectTitle: PropTypes.string,
    role: PropTypes.string,
    slug: PropTypes.string,
    viewProjectCTA: PropTypes.string
};

PortfolioItemComponent.defaultProps = {
    className: '',
    projectDescriptionTitle: '',
    projectExcerpt: '',
    projectRoleTitle: '',
    projectThumbnailImageBlock: {},
    projectTitle: '',
    role: '',
    slug: '',
    viewProjectCTA: ''
};

export default PortfolioItemComponent;
