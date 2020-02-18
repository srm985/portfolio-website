import React from 'react';

import Button from '../ButtonComponent';
import Card from '../CardComponent';
import Grid from '../GridComponent';
import GridItem from '../GridItemComponent';
import Title from '../TitleComponent';

import classNames from '../../utils/classNames';

import {
    BUTTON_STYLE_TYPE_SECONDARY
} from '../ButtonComponent/config';

import './styles.scss';

class ProjectHeaderComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: true
        };
    }

    render() {
        const {
            state: {
                isVisible
            }
        } = this;

        const {
            displayName
        } = ProjectHeaderComponent;

        const contentClassNames = classNames(
            `${displayName}__content`,
            {
                [`${displayName}__content--visible`]: isVisible
            }
        );

        return (
            <header className={displayName}>
                <div className={`${displayName}__background`}>
                    <div className={`${displayName}__section-half`} />
                    <div className={`${displayName}__section-half`} />
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
                                heading={'Axure Redline Tool'}
                                headingSize={1}
                                isUnaccented
                            />
                            <div className={`${displayName}__details`}>
                                <span>{'Front-End Developer'}</span>
                                <span>{'August 2019'}</span>
                            </div>
                            <p className={'mb--4'}>{'Laborum proident aliquip excepteur consequat minim enim. Quis aliquip magna aliquip esse nulla minim ipsum nulla nisi ullamco commodo aute amet. Adipisicing nulla est Lorem eiusmod laborum consectetur. Ut magna elit do labore ut reprehenderit minim qui consectetur culpa excepteur.'}</p>
                            <Button
                                label={'Demo'}
                                styleType={BUTTON_STYLE_TYPE_SECONDARY}
                            />
                            <Button
                                label={'Source Code'}
                                styleType={BUTTON_STYLE_TYPE_SECONDARY}
                            />
                        </Card>
                    </GridItem>
                </Grid>
            </header>
        );
    }
}

ProjectHeaderComponent.displayName = 'ProjectHeaderComponent';

ProjectHeaderComponent.propTypes = {};

ProjectHeaderComponent.defaultProps = {};

export default ProjectHeaderComponent;
