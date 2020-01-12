import PropTypes from 'prop-types';
import React from 'react';

// Import global styles for those components not using the LayoutComponent.
import '../styles/styles.scss';

const PreviewTemplate = (props) => {
    const {
        children,
        entry
    } = props;

    const data = entry.getIn([
        'data'
    ]).toJS();

    return (
        <>
            {
                React.cloneElement(children, {
                    ...data
                })
            }
        </>
    );
};

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
