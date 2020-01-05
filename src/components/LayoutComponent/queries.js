import PropTypes from 'prop-types';
import React from 'react';
import {
    graphql,
    StaticQuery
} from 'gatsby';

const Query = (props) => {
    const {
        children
    } = props;

    return (
        <StaticQuery
            query={
                graphql`
                    query {
                        headerQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "header"}}) {
                            edges {
                                node {
                                    childMarkdownRemark {
                                        frontmatter {
                                            logoCopy
                                            headerLinks {
                                                pageName
                                                pageURL
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        footerQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "footer"}}) {
                            edges {
                                node {
                                    childMarkdownRemark {
                                        frontmatter {
                                            footerCopy
                                            gitHubURL
                                            linkedInURL
                                            stackOverflowURL
                                        }
                                    }
                                }
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
