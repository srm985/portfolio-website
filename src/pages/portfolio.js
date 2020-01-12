import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import PortfolioPageTemplate from '../templates/PortfolioPageTemplate';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const PortfolioPage = (props) => {
    const {
        data
    } = props;

    const pageData = destructureNetlifyCMS(data);

    return (
        <PortfolioPageTemplate {...pageData} />
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

PortfolioPage.propTypes = {
    data: PropTypes.shape({
        pageTitle: PropTypes.string
    })
};

PortfolioPage.defaultProps = {
    data: {}
};

export default PortfolioPage;
