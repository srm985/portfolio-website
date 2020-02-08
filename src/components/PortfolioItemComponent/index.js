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
                    <p className={`${displayName}__excerpt`}>{excerpt}</p>
                    <Button
                        className={`${displayName}__button`}
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
    title: PropTypes.string,
    viewProjectCTA: PropTypes.string
};

PortfolioItemComponent.defaultProps = {
    excerpt: '',
    title: '',
    viewProjectCTA: ''
};

export default PortfolioItemComponent;
