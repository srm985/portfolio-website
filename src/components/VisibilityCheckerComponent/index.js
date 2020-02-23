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

        if (isDisabled !== wasDisabled && isDisabled) {
            this.intersectionObserver.unobserve();
        }
    }

    componentWillUnmount() {
        try {
            this.intersectionObserver.unobserve();
        } catch (error) {}
    }

    render() {
        const {
            props: {
                children
            }
        } = this;

        const {
            displayName
        } = VisibilityCheckerComponent;

        return (
            <div
                className={displayName}
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
    delay: 750,
    handleChange: () => {},
    isDisabled: false,
    margins: {},
    threshold: 0.6
};

export default VisibilityCheckerComponent;
