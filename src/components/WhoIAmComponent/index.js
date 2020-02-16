import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';

import './styles.scss';

const WhoIAmComponent = (props) => {
    const {
        aboutMeSectionBody,
        aboutMeSectionImage: {
            childImageSharp: {
                fluid = {}
            } = {}
        } = {},
        aboutMeSectionTitle
    } = props;

    const {
        displayName
    } = WhoIAmComponent;

    return (
        <div className={displayName}>
            <Grid>
                <GridItem
                    breakpoints={{
                        large: {
                            start: 1,
                            stop: 6
                        },
                        medium: {
                            start: 1,
                            stop: 8
                        }
                    }}
                >
                    <h3 className={'mb--2'}>{aboutMeSectionTitle}</h3>
                    <ReactMarkdown source={aboutMeSectionBody} />
                </GridItem>
            </Grid>
            <div className={`${displayName}__graphic-block`}>
                <div className={`${displayName}__decorator-slash-block`}>
                    <div className={`${displayName}__decorator-slash`} />
                    <div className={`${displayName}__decorator-slash`} />
                    <div className={`${displayName}__decorator-slash`} />
                    <div className={`${displayName}__decorator-slash`} />
                </div>
                <Image fluid={fluid} />
            </div>
        </div>
    );
};

WhoIAmComponent.displayName = 'WhoIAmComponent';

WhoIAmComponent.propTypes = {
    aboutMeSectionBody: PropTypes.string,
    aboutMeSectionImage: PropTypes.shape({
        childImageSharp: PropTypes.shape({
            fluid: PropTypes.shape({})
        })
    }),
    aboutMeSectionTitle: PropTypes.string
};

WhoIAmComponent.defaultProps = {
    aboutMeSectionBody: '',
    aboutMeSectionImage: {},
    aboutMeSectionTitle: ''
};

export default WhoIAmComponent;
