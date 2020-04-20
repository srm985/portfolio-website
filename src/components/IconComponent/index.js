import PropTypes from 'prop-types';
import React from 'react';

import classNames from '../../utils/classNames';

import './styles.scss';

class IconComponent extends React.Component {
    _isMounted=false;

    constructor(props) {
        super(props);

        this.state = {
            svgImage: ''
        };
    }

    componentDidMount() {
        const {
            props: {
                iconURL
            }
        } = this;

        this._isMounted = true;

        if (iconURL) {
            this.fetchIcon(iconURL);
        }
    }

    componentDidUpdate(previousProps) {
        const {
            props: {
                iconURL: iconURLNew
            }
        } = this;

        const {
            iconURL: iconURLOld
        } = previousProps;

        if (iconURLNew && iconURLNew !== iconURLOld) {
            this.fetchIcon(iconURLNew);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    fetchIcon = (iconURL) => {
        fetch(iconURL).then((response) => response.text()).then((svgImage) => {
            if (this._isMounted) {
                this.setState({
                    svgImage
                });
            }
        });
    }

    render() {
        const {
            props: {
                className
            },
            state: {
                svgImage
            }
        } = this;

        const {
            displayName
        } = IconComponent;

        const componentClassNames = classNames(
            displayName,
            className
        );

        return (
            <span
                className={componentClassNames}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                    __html: svgImage
                }}
            />
        );
    }
}

IconComponent.displayName = 'IconComponent';

IconComponent.propTypes = {
    className: PropTypes.string,
    iconURL: PropTypes.string
};

IconComponent.defaultProps = {
    className: '',
    iconURL: ''
};

export default IconComponent;
