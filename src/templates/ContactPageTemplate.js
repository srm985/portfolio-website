import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/LayoutComponent';

const ContactPageTemplate = (props) => {
    const {
        pageTitle
    } = props;

    return (
        <Layout pageTitle={pageTitle} />
    );
};

ContactPageTemplate.propTypes = {
    pageTitle: PropTypes.string
};

ContactPageTemplate.defaultProps = {
    pageTitle: ''
};

export default ContactPageTemplate;
