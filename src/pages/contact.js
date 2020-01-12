import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import ContactPageTemplate from '../templates/ContactPageTemplate';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const ContactPage = (props) => {
    const {
        data
    } = props;

    const pageData = destructureNetlifyCMS(data);

    return (
        <ContactPageTemplate {...pageData} />
    );
};

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "contact"}}) {
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
