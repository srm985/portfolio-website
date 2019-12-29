import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql
} from 'gatsby';

import Hero from '../components/HeroComponent';
import Layout from '../components/LayoutComponent';

import {
    OVERLAY_BLACK
} from '../components/HeroComponent/config';

import destructureNetlifyCMS from '../utils/destructureNetlifyCMS';

const IndexPage = (props) => {
    const {
        data
    } = props;

    const {
        image
    } = destructureNetlifyCMS(data);

    return (
        <Layout>
            <Hero
                alt={'placeholder image'}
                defaultSource={image}
                overlayColor={OVERLAY_BLACK}
            />
        </Layout>
    );
};

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              image
              intro
              title
          }
        }
      }
    }
  }
}`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string,
        intro: PropTypes.string,
        title: PropTypes.string
    })
};

IndexPage.defaultProps = {
    data: {}
};

export default IndexPage;
