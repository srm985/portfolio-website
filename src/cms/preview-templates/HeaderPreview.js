import PropTypes from 'prop-types';
import React from 'react';

import Header from '../../components/HeaderComponent';

const HeaderPreview = (props) => {
    const {
        entry
    } = props;

    const data = entry.getIn([
        'data'
    ]).toJS();

    return <Header {...data} />;
};

HeaderPreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    })
};

HeaderPreview.defaultProps = {
    entry: {}
};

export default HeaderPreview;
