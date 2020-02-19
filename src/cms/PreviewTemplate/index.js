import PropTypes from 'prop-types';
import React from 'react';

// Import global styles for those components not using the LayoutComponent.
import '../../styles/global.scss';

import './styles.scss';

const PreviewTemplate = (props) => {
    const {
        children,
        entry
    } = props;

    const {
        displayName
    } = PreviewTemplate;

    const content = entry.getIn([
        'data'
    ]).toJS();

    return (
        <div className={displayName}>
            {
                React.cloneElement(children, {
                    content
                })
            }
        </div>
    );
};

PreviewTemplate.displayName = 'PreviewTemplate';

PreviewTemplate.propTypes = {
    children: PropTypes.node,
    entry: PropTypes.shape({
        getIn: PropTypes.func
    })
};

PreviewTemplate.defaultProps = {
    children: '',
    entry: {}
};

export default PreviewTemplate;
