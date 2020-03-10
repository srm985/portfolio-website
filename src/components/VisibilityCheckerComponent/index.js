import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

class VisibilityCheckerComponent extends React.Component {
    constructor(props) {
        super(props);

        this.wrapperReference = React.createRef();
    }

    componentDidMount() {
        const {
            props: {
                delay,
                handleChange,
                isDisabled,
                margins: {
                    bottom = '0px',
                    left = '0px',
                    right = '0px',
                    top = '0px'
                },
                threshold
            }
        } = this;

        const {
            wrapperReference: {
                current: currentWrapperReference
            }
        } = this;

        const intersectionObserverOptions = {
            delay,
            rootMargin: `${top} ${right} ${bottom} ${left}`,
            threshold
        };

        this.intersectionObserver = new IntersectionObserver((entries = []) => {
            const [
                {
                    isIntersecting
                }
            ] = entries;

            handleChange(isIntersecting);
        }, intersectionObserverOptions);

        if (!isDisabled && currentWrapperReference) {
            this.intersectionObserver.observe(currentWrapperReference);
        }
    }

    componentDidUpdate(previousProps) {
        const {
            props: {
                isDisabled
            }
        } = this;

        const {
            isDisabled: wasDisabled
        } = previousProps;

        const {
            wrapperReference: {
                current: currentWrapperReference
            }
        } = this;

        if (isDisabled !== wasDisabled && isDisabled) {
            this.intersectionObserver.unobserve(currentWrapperReference);
        }
    }

    componentWillUnmount() {
        const {
            wrapperReference: {
                current: currentWrapperReference
            }
        } = this;

        try {
            this.intersectionObserver.unobserve(currentWrapperReference);
        } catch (error) { }
    }

    render() {
        const {
            props: {
                children,
                className,
                instanceName
            }
        } = this;

        const {
            displayName
        } = VisibilityCheckerComponent;

        const componentClassNames = classNames(
            ...className,
            displayName,
            {
                [`${displayName}__instance-${instanceName}`]: instanceName
            }
        );

        return (
            <div
                className={componentClassNames}
                data-instance={instanceName}
                ref={this.wrapperReference}
            >
                {children}
            </div>
        );
    }
}

VisibilityCheckerComponent.displayName = 'VisibilityCheckerComponent';

VisibilityCheckerComponent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    delay: PropTypes.number,
    handleChange: PropTypes.func,
    instanceName: PropTypes.string,
    isDisabled: PropTypes.bool,
    margins: PropTypes.shape({
        bottom: PropTypes.string,
        left: PropTypes.string,
        right: PropTypes.string,
        top: PropTypes.string
    }),
    threshold: PropTypes.number
};

VisibilityCheckerComponent.defaultProps = {
    children: '',
    className: '',
    delay: 500,
    handleChange: () => {},
    instanceName: '',
    isDisabled: false,
    margins: {},
    threshold: 0.5
};

export default VisibilityCheckerComponent;
