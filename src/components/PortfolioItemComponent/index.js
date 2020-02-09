import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Card from '../CardComponent';

import classNames from '../../utils/classNames';

import './styles.scss';

class PortfolioItemComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
    }

    render() {
        const {
            props: {
                excerpt,
                slug,
                title,
                viewProjectCTA
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = PortfolioItemComponent;

        // Drop the final forward slash for accurate analytics tracking.
        const formattedLink = slug.replace(/\/$/, '');

        const componentClassNames = classNames(
            displayName,
            {
                [`${displayName}--visible`]: isVisible
            }
        );

        return (
            <div className={componentClassNames}>
                <div className={`${displayName}__image`} />
                <Card className={`${displayName}__card`}>
                    <h2 className={`${displayName}__card-title`}>{title}</h2>
                    <div className={`${displayName}__title-underline`} />
                    <h3>{'My Role'}</h3>
                    <p className={`${displayName}__role`}>{'Front-End Developer'}</p>
                    <h3>{'What We Did'}</h3>
                    <p className={`${displayName}__excerpt`}>{excerpt}</p>
                    <Button
                        className={`${displayName}__button`}
                        href={formattedLink}
                        label={viewProjectCTA}
                    />
                </Card>
            </div>
        );
    }
}

PortfolioItemComponent.displayName = 'PortfolioItemComponent';

PortfolioItemComponent.propTypes = {
    excerpt: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    viewProjectCTA: PropTypes.string
};

PortfolioItemComponent.defaultProps = {
    excerpt: '',
    slug: '',
    title: '',
    viewProjectCTA: ''
};

export default PortfolioItemComponent;
