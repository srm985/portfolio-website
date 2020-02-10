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
                        navigationQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "navigation"}}) {
                            edges {
                                node {
                                    childMarkdownRemark {
                                        frontmatter {
                                            logoCopy
                                            navigationLinks {
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
                                            socialMediaLinks {
                                                socialMediumIcon {
                                                    publicURL
                                                }
                                                socialMediumName
                                                socialMediumURL
                                            }
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
