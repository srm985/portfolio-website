import React from 'react';

import HeaderDesktop from '../HeaderDesktopComponent';
import HeaderMobile from '../HeaderMobileComponent';

import stylingConstants from '../../styles/constants.scss';

class HeaderComponent extends React.Component {
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
            breakpointMedium = 0
        } = stylingConstants;

        const {
            innerWidth: viewportWidth
        } = window;

        const isViewportMobile = viewportWidth < parseInt(breakpointMedium, 10);
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
                <HeaderMobile {...props} />
            ) : (
                <HeaderDesktop {...props} />
            )
        );
    }
}

export default HeaderComponent;
