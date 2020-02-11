import React from 'react';

import Button from '../components/ButtonComponent';
import Card from '../components/CardComponent';
import Grid from '../components/GridComponent';
import Form from '../components/FormComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Input from '../components/InputComponent';

import {
    BUTTON_TYPE_SUBMIT
} from '../components/ButtonComponent/config';
import {
    INPUT_TYPE_EMAIL,
    INPUT_TYPE_TEXTAREA
} from '../components/InputComponent/config';

const ContactPageTemplate = () => {
    const {
        displayName
    } = ContactPageTemplate;

    return (
        <Hero className={displayName}>
            <Grid>
                <GridItem
                    breakpoints={{
                        large: {
                            start: 6,
                            stop: 11
                        },
                        medium: {
                            start: 5,
                            stop: 12
                        }
                    }}
                >
                    <Card>
                        <h2>{'Want to get in touch with me?'}</h2>
                        <Form>
                            <Input
                                className={'mb--2'}
                                label={'Name'}
                                name={'name'}
                            />
                            <Input
                                className={'mb--2'}
                                label={'Email'}
                                name={'email'}
                                type={INPUT_TYPE_EMAIL}
                            />
                            <Input
                                className={'mb--2'}
                                label={'Company'}
                                name={'company'}
                            />
                            <Input
                                className={'mb--4'}
                                label={'Message'}
                                name={'message'}
                                type={INPUT_TYPE_TEXTAREA}
                            />
                            <Button
                                label={'Submit'}
                                type={BUTTON_TYPE_SUBMIT}
                            />
                        </Form>
                    </Card>
                </GridItem>
            </Grid>
        </Hero>
    );
};

ContactPageTemplate.displayName = 'ContactPageTemplate';

export default ContactPageTemplate;
