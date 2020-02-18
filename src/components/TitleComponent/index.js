import PropTypes from 'prop-types';
import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import classNames from '../../utils/classNames';

import './styles.scss';

class TitleComponent extends React.Component {
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
                className,
                heading,
                headingClassName,
                headingSize,
                isAnimated,
                isUnaccented,
                isVisibilityForced,
                subheading,
                subheadingClassName
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = TitleComponent;

        const componentClassNames = classNames(
            className,
            displayName
        );

        const headingClassNames = classNames(
            headingClassName,
            `${displayName}__heading`,
            {
                [`${displayName}__heading--unaccented`]: isUnaccented,
                [`${displayName}__heading--unanimated`]: !isAnimated,
                [`${displayName}__heading--visible`]: typeof isVisibilityForced === 'boolean' ? isVisibilityForced : isVisible
            }
        );

        const subheadingClassNames = classNames(
            subheadingClassName,
            `${displayName}__subheading`,
            {
                [`${displayName}__subheading--unanimated`]: !isAnimated,
                [`${displayName}__subheading--visible`]: typeof isVisibilityForced === 'boolean' ? isVisibilityForced : isVisible
            }
        );

        const progressBarClassNames = classNames(
            `${displayName}__progress-bar`,
            {
                [`${displayName}__progress-bar--visible`]: typeof isVisibilityForced === 'boolean' ? isVisibilityForced : isVisible
            }
        );

        const HeadingComponent = `h${headingSize}`;
        const SubHeadingComponent = `h${headingSize + 1}`;

        return (
            <VisibilitySensor
                active={isAnimated}
                onChange={this.handleVisibilityChange}
                partialVisibility
                resizeCheck
            >
                <div className={componentClassNames}>
                    <div className={`${displayName}__heading-block`}>
                        <HeadingComponent className={headingClassNames}>{heading}</HeadingComponent>
                        <div className={progressBarClassNames} />
                    </div>
                    {
                        subheading && <SubHeadingComponent className={subheadingClassNames}>{subheading}</SubHeadingComponent>
                    }
                </div>
            </VisibilitySensor>
        );
    }
}

TitleComponent.displayName = 'TitleComponent';

TitleComponent.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    headingClassName: PropTypes.string,
    headingSize: PropTypes.oneOf([
        1,
        2,
        3,
        4,
        5,
        6
    ]).isRequired,
    isAnimated: PropTypes.bool,
    isUnaccented: PropTypes.bool,
    isVisibilityForced: PropTypes.bool,
    subheading: PropTypes.string,
    subheadingClassName: PropTypes.string
};

TitleComponent.defaultProps = {
    className: '',
    headingClassName: '',
    isAnimated: false,
    isUnaccented: false,
    isVisibilityForced: undefined,
    subheading: '',
    subheadingClassName: ''
};

export default TitleComponent;
