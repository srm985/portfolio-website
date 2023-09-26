import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
// // import Icon from '../IconComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

// import bodyScrolling from '../../utils/bodyScrolling';
import classNames from '../../utils/classNames';

import './styles.scss';

class NavigationMobileComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // hasClickedMenu: false,
            isMenuOpen: false
        };
    }

    // handleMenuToggle = () => {
    //     this.setState((previousState) => {
    //         const {
    //             isMenuOpen: wasMenuOpen
    //         } = previousState;

    //         if (wasMenuOpen) {
    //             bodyScrolling.enable();
    //         } else {
    //             bodyScrolling.disable();
    //         }

    //         return {
    //             hasClickedMenu: true,
    //             isMenuOpen: !wasMenuOpen
    //         };
    //     });
    // };

    renderMenuButton = () => {
        const {
            state: {
                // hasClickedMenu,
                isMenuOpen
            }
        } = this;

        console.log(isMenuOpen);

        const {
            displayName
        } = NavigationMobileComponent;

        // const lines = [];

        const controlButtonClassNames = classNames(
            `${displayName}__control-button`,
            {
                [`${displayName}__control-button--closed`]: !isMenuOpen,
                [`${displayName}__control-button--open`]: isMenuOpen
            }
        );

        // const menuStyle = {
        //     animationDuration: hasClickedMenu ? undefined : '0s'
        // };

        // for (let i = 0; i < 3; i++) {
        //     lines.push(
        //         <span
        //             key={i}
        //             style={menuStyle}
        //         >
        //             {
        //                 i === 0 && (
        //                     <span style={menuStyle}>{'MENU'}</span>
        //                 )
        //             }
        //         </span>
        //     );
        // }

        return (
            <Button
                className={controlButtonClassNames}
                handleClick={this.handleMenuToggle}
                shouldInheritStyling
                styleType={BUTTON_STYLE_TYPE_INLINE}
            >
                <div />
            </Button>
        );
    };

    // renderLinks = () => {
    //     const {
    //         props: {
    //             navigationLinks
    //         }
    //     } = this;

    //     const {
    //         displayName
    //     } = NavigationMobileComponent;

    //     const linkClassNames = classNames(
    //         `${displayName}__navigation-link`
    //     );

    //     return navigationLinks.map((navigationLink) => {
    //         const {
    //             pageName,
    //             pageURL
    //         } = navigationLink;

    //         return (
    //             <li
    //                 className={linkClassNames}
    //                 key={pageURL}
    //             >
    //                 <Button
    //                     handleClick={bodyScrolling.enable}
    //                     href={pageURL}
    //                     label={pageName}
    //                     styleType={BUTTON_STYLE_TYPE_INLINE}
    //                 />
    //             </li>
    //         );
    //     });
    // };

    render() {
        const {
            // props: {
            //     headerLogoCopy,
            //     headerLogoIcon: {
            //         publicURL: iconURL = ''
            //     }
            // },
            state: {
                isMenuOpen
            }
        } = this;

        const {
            displayName
        } = NavigationMobileComponent;

        const navigationClassNames = classNames(
            `${displayName}__navigation`,
            {
                [`${displayName}__navigation--closed`]: !isMenuOpen,
                [`${displayName}__navigation--open`]: isMenuOpen
            }
        );

        // const navigationMenuClassNames = classNames(
        //     `${displayName}__navigation-menu`,
        //     {
        //         [`${displayName}__navigation-menu--closed`]: !isMenuOpen,
        //         [`${displayName}__navigation-menu--open`]: isMenuOpen
        //     }
        // );

        return (
            <nav className={displayName}>
                <div className={navigationClassNames}>
                    {/* <Button
                        href={'/'}
                        shouldInheritStyling
                        styleType={BUTTON_STYLE_TYPE_INLINE}
                    >
                        <div className={`${displayName}__logo`}>
                            <Icon
                                className={`${displayName}__logo-icon`}
                                iconURL={iconURL}
                            />
                            <p>{headerLogoCopy}</p>
                        </div>
                    </Button> */}
                    {this.renderMenuButton()}
                </div>
                {/* <div className={navigationMenuClassNames}>
                    <ul className={`${displayName}__navigation-link-set`}>
                        {this.renderLinks()}
                    </ul>
                </div> */}
            </nav>
        );
    }
}

NavigationMobileComponent.displayName = 'NavigationMobileComponent';

NavigationMobileComponent.propTypes = {
    // headerLogoCopy: PropTypes.string,
    headerLogoIcon: PropTypes.shape({
        publicURL: PropTypes.string
    })
    // navigationLinks: PropTypes.arrayOf(PropTypes.shape({
    //     pageName: PropTypes.string,
    //     pageURL: PropTypes.string
    // }))
};

NavigationMobileComponent.defaultProps = {
    // headerLogoCopy: '',
    headerLogoIcon: {}
    // navigationLinks: []
};

export default NavigationMobileComponent;
