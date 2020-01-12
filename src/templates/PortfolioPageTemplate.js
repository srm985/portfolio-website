import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/LayoutComponent';

const PortfolioPageTemplate = (props) => {
    const {
        pageTitle
    } = props;

    return (
        <Layout pageTitle={pageTitle} />
    );
};

PortfolioPageTemplate.propTypes = {
    pageTitle: PropTypes.string
};

PortfolioPageTemplate.defaultProps = {
    pageTitle: ''
};

export default PortfolioPageTemplate;
