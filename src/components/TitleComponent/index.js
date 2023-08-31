import PropTypes from 'prop-types';
import React from 'react';

import VisibilityChecker from '../VisibilityCheckerComponent';

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
    };

    render() {
        const {
            props: {
                className,
                heading,
                headingClassName,
                headingSize,
                isAccented,
                isAnimated,
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
                [`${displayName}__heading--accented`]: isAccented,
                [`${displayName}__heading--animated`]: isAnimated,
                [`${displayName}__heading--visible`]: isVisible
            }
        );

        const subheadingClassNames = classNames(
            subheadingClassName,
            `${displayName}__subheading`,
            {
                [`${displayName}__subheading--animated`]: isAnimated,
                [`${displayName}__subheading--visible`]: isVisible
            }
        );

        const progressBarClassNames = classNames(
            `${displayName}__progress-bar`,
            {
                [`${displayName}__progress-bar--animated`]: isAnimated,
                [`${displayName}__progress-bar--visible`]: isVisible
            }
        );

        const HeadingComponent = `h${headingSize}`;
        const SubHeadingComponent = `h${headingSize + 1}`;

        return (
            <VisibilityChecker handleChange={this.handleVisibilityChange}>
                <div className={componentClassNames}>
                    <div className={`${displayName}__heading-block`}>
                        <HeadingComponent className={headingClassNames}>{heading}</HeadingComponent>
                        <div className={progressBarClassNames} />
                    </div>
                    {
                        subheading && <SubHeadingComponent className={subheadingClassNames}>{subheading}</SubHeadingComponent>
                    }
                </div>
            </VisibilityChecker>
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
    isAccented: PropTypes.bool,
    isAnimated: PropTypes.bool,
    subheading: PropTypes.string,
    subheadingClassName: PropTypes.string
};

TitleComponent.defaultProps = {
    className: '',
    headingClassName: '',
    isAccented: false,
    isAnimated: false,
    subheading: '',
    subheadingClassName: ''
};

export default TitleComponent;
