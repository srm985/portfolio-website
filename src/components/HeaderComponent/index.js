import React from 'react';
import {
    graphql
} from 'gatsby';

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

        this.setState({
            hasScrolled
        });
    }

    render() {
        const {
            state: {
                hasScrolled
            }
        } = this;

        console.log('props:', this.props);

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

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "header"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              headerLinks
          }
        }
      }
    }
  }
}`;

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
