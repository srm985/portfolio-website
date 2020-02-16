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
                headingSize,
                isVisibilityForced,
                title
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
            `${displayName}__heading`,
            {
                [`${displayName}__heading--visible`]: typeof isVisibilityForced === 'boolean' ? isVisibilityForced : isVisible
            }
        );

        const progressBarClassNames = classNames(
            `${displayName}__progress-bar`,
            {
                [`${displayName}__progress-bar--visible`]: typeof isVisibilityForced === 'boolean' ? isVisibilityForced : isVisible
            }
        );

        const HeadingComponent = `h${headingSize}`;

        return (
            <VisibilitySensor
                onChange={this.handleVisibilityChange}
                partialVisibility
                resizeCheck
            >
                <div className={componentClassNames}>
                    <HeadingComponent className={headingClassNames}>{title}</HeadingComponent>
                    <div className={progressBarClassNames} />
                </div>
            </VisibilitySensor>
        );
    }
}

TitleComponent.displayName = 'TitleComponent';

TitleComponent.propTypes = {
    className: PropTypes.string,
    headingSize: PropTypes.oneOf([
        1,
        2,
        3,
        4,
        5,
        6
    ]).isRequired,
    isVisibilityForced: PropTypes.bool,
    title: PropTypes.string.isRequired
};

TitleComponent.defaultProps = {
    className: '',
    isVisibilityForced: undefined
};

export default TitleComponent;
