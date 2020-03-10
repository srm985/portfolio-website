import PropTypes from 'prop-types';
import React from 'react';

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
                children
            }
        } = this;

        return (
            React.cloneElement(children, {
                ref: this.wrapperReference
            })
        );
    }
}

VisibilityCheckerComponent.displayName = 'VisibilityCheckerComponent';

VisibilityCheckerComponent.propTypes = {
    children: PropTypes.node,
    delay: PropTypes.number,
    handleChange: PropTypes.func,
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
    delay: 500,
    handleChange: () => {},
    isDisabled: false,
    margins: {},
    threshold: 0.5
};

export default VisibilityCheckerComponent;
