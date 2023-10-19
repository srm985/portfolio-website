import {
    graphql,
    StaticQuery
} from 'gatsby';
import PropTypes from 'prop-types';
import React, {
    cloneElement
} from 'react';

function Query(props) {
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
            render={(data) => cloneElement(children, data)}
        />
    );
}

Query.propTypes = {
    children: PropTypes.node
};

Query.defaultProps = {
    children: ''
};

export default Query;
