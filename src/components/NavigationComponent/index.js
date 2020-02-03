import React from 'react';

import NavigationDesktop from '../NavigationDesktopComponent';
import NavigationMobile from '../NavigationMobileComponent';

import isMobileDevice from '../../utils/isMobileDevice';

class NavigationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMobile: false
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);

        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        const {
            state: {
                isMobile
            }
        } = this;

        const {
            innerWidth: viewportWidth
        } = window;

        const isViewportMobile = isMobileDevice(viewportWidth);
        const hasViewportTypeChanged = isViewportMobile !== isMobile;

        if (hasViewportTypeChanged) {
            this.setState({
                isMobile: isViewportMobile
            });
        }
    }

    render() {
        const {
            props,
            state: {
                isMobile
            }
        } = this;

        return (
            isMobile ? (
                <NavigationMobile {...props} />
            ) : (
                <NavigationDesktop {...props} />
            )
        );
    }
}

export default NavigationComponent;