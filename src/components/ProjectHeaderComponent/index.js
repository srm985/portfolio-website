import PropTypes from 'prop-types';
import React from 'react';

import Button from '../ButtonComponent';
import Card from '../CardComponent';
import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import Image from '../ImageComponent';
import TextBlock from '../TextBlockComponent';
import Title from '../TitleComponent';

import {
    BUTTON_STYLE_TYPE_NEUMORPHIC
} from '../ButtonComponent/config';

import classNames from '../../utils/classNames';

import './styles.scss';

class ProjectHeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true
        };
    }

    renderDate = (date) => {
        const projectDate = new Date(date);

        const monthLookup = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        const {
            [projectDate.getMonth()]: projectMonth
        } = monthLookup;

        return (
            <span>{`${projectMonth} ${projectDate.getFullYear()}`}</span>
        );
    };

    render() {
        const {
            props: {
                demoCTA,
                heroImageBlock: {
                    imageAlt = '',
                    imageSource: {
                        childImageSharp: {
                            fluid = {}
                        } = {}
                    } = {}
                } = {},
                projectDate,
                projectDemoURL,
                projectDescription,
                projectSourceCodeURL,
                projectTitle,
                role,
                sourceCodeCTA
            },
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = ProjectHeaderComponent;

        const componentClassNames = classNames(
            displayName,
            'padding-wrapper'
        );

        const contentClassNames = classNames(
            `${displayName}__content`,
            {
                [`${displayName}__content--visible`]: isVisible
            }
        );

        return (
            <header className={componentClassNames}>
                <div className={`${displayName}__background`}>
                    <div className={`${displayName}__section-half`} />
                    <Image
                        alt={imageAlt}
                        className={`${displayName}__section-half`}
                        fluid={fluid}
                    />
                </div>
                <Grid>
                    <GridItem
                        breakpoints={{
                            medium: {
                                start: 1,
                                stop: 8
                            }
                        }}
                    >
                        <Card className={contentClassNames}>
                            <Title
                                className={`${displayName}__title`}
                                heading={projectTitle}
                                headingSize={1}
                            />
                            <div className={`${displayName}__details`}>
                                <span>{role}</span>
                                {this.renderDate(projectDate)}
                            </div>
                            <TextBlock
                                className={'mb--4'}
                                text={projectDescription}
                            />
                            {
                                projectDemoURL && (
                                    <Button
                                        href={projectDemoURL}
                                        isAnimated
                                        isInternalURL={false}
                                        isLightBackgroundColorProfile
                                        label={demoCTA}
                                        styleType={BUTTON_STYLE_TYPE_NEUMORPHIC}
                                    />
                                )
                            }
                            {
                                projectSourceCodeURL && (
                                    <Button
                                        href={projectSourceCodeURL}
                                        isAnimated
                                        isInternalURL={false}
                                        isLightBackgroundColorProfile
                                        label={sourceCodeCTA}
                                        styleType={BUTTON_STYLE_TYPE_NEUMORPHIC}
                                    />
                                )
                            }
                        </Card>
                    </GridItem>
                </Grid>
            </header>
        );
    }
}

ProjectHeaderComponent.displayName = 'ProjectHeaderComponent';

ProjectHeaderComponent.propTypes = {
    demoCTA: PropTypes.string,
    heroImageBlock: PropTypes.shape({
        imageAlt: PropTypes.string,
        imageOpacity: PropTypes.number,
        imageSource: PropTypes.shape({
            childImageSharp: PropTypes.shape({
                fluid: PropTypes.shape({})
            })
        })
    }),
    projectDate: PropTypes.string,
    projectDemoURL: PropTypes.string,
    projectDescription: PropTypes.string,
    projectSourceCodeURL: PropTypes.string,
    projectTitle: PropTypes.string,
    role: PropTypes.string,
    sourceCodeCTA: PropTypes.string
};

ProjectHeaderComponent.defaultProps = {
    demoCTA: '',
    heroImageBlock: {},
    projectDate: '',
    projectDemoURL: '',
    projectDescription: '',
    projectSourceCodeURL: '',
    projectTitle: '',
    role: '',
    sourceCodeCTA: ''
};

export default ProjectHeaderComponent;
