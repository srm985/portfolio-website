import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import Layout from '../components/LayoutComponent';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ContactPage = (props) => {
    const {
        data
    } = props;

    const {
        pageTitle
    } = destructureNetlifyCMS(data);

    return (
        <Layout pageTitle={pageTitle} />
    );
};

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "portfolio"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              pageTitle
          }
        }
      }
    }
  }
}`;

ContactPage.propTypes = {
    data: PropTypes.shape({
        pageTitle: PropTypes.string
    })
};

ContactPage.defaultProps = {
    data: {}
};

export default ContactPage;
