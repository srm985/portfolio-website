import React from 'react';

import Button from '../ButtonComponent';

import {
    BUTTON_STYLE_TYPE_INLINE
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';

import './styles.scss';

class HeaderComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            hasScrolled: false
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        const {
            body,
            documentElement
        } = document;

        const hasScrolled = !!(body.scrollTop || documentElement.scrollTop);

        console.log({
            hasScrolled
        });

        this.setState({
            hasScrolled
        });
    }

    render() {
        const {
            hasScrolled
        } = this.state;

        const {
            displayName
        } = HeaderComponent;

        const componentClassNames = classNames(
            displayName,
            {
                [`${displayName}--scrolled`]: hasScrolled
            }
        );

        return (
            <header className={componentClassNames}>
                <span className={`${displayName}__logo`}>Sean McQuay</span>
                <ul className={`${displayName}__navigation`}>
                    <li>
                        <Button
                            className={`${displayName}__navigation-link`}
                            href={'/'}
                            label={'About'}
                            styleType={BUTTON_STYLE_TYPE_INLINE}
                        />
                    </li>
                    <li>
                        <Button
                            className={`${displayName}__navigation-link`}
                            href={'/'}
                            label={'Work'}
                            styleType={BUTTON_STYLE_TYPE_INLINE}
                        />
                    </li>
                    <li>
                        <Button
                            className={`${displayName}__navigation-link`}
                            href={'/'}
                            label={'Contact'}
                            styleType={BUTTON_STYLE_TYPE_INLINE}
                        />
                    </li>
                </ul>
            </header>
        );
    }
}

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
