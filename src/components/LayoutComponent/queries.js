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
                        navigationQuery: allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "navigation"}}) {
                            edges {
                                node {
                                    childMarkdownRemark {
                                        frontmatter {
                                            headerLogoCopy
                                            headerLogoIcon {
                                                publicURL
                                            }
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
