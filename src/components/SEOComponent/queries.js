import {
    graphql,
    StaticQuery
} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Query = (props) => {
    const {
        children
    } = props;

    return (
        <StaticQuery
            query={
                graphql`
                    query {
                        defaultSEOQuery: site {
                            siteMetadata {
                                author
                                defaultTitle
                                description
                                image
                                keywords
                                siteURL
                                titleTemplate
                                type
                            }
                        }
                    }
                `
            }
            render={(data) => React.cloneElement(children, data)}
        />
    );
};

Query.propTypes = {
    children: PropTypes.node
};

Query.defaultProps = {
    children: ''
};

export default Query;
