import React from 'react';

import Button from '../components/ButtonComponent';
import Card from '../components/CardComponent';
import Grid from '../components/GridComponent';
import GridItem from '../components/GridItemComponent';
import Hero from '../components/HeroComponent';
import Input from '../components/InputComponent';

import {
    BUTTON_TYPE_SUBMIT
} from '../components/ButtonComponent/config';
import {
    INPUT_TYPE_EMAIL
} from '../components/InputComponent/config';

const ContactPageTemplate = () => {
    const {
        displayName
    } = ContactPageTemplate;

    return (
        <Hero>
            <Grid>
                <GridItem
                    breakpoints={{
                        large: {
                            start: 5,
                            stop: 10
                        },
                        medium: {
                            start: 5,
                            stop: 12
                        }
                    }}
                >
                    <Card>
                        <h2>{'Want to get in touch with me?'}</h2>
                        <form
                            className={`${displayName}__form`}
                            data-netlify={'true'}
                            name={'contact-form'}
                            netlify-honeypot={'bot-field'}
                        >
                            <input
                                name={'bot-field'}
                                type={'hidden'}
                            />
                            <Input
                                label={'Name'}
                                name={'name'}
                            />
                            <Input
                                label={'Email'}
                                name={'email'}
                                type={INPUT_TYPE_EMAIL}
                            />
                            <Input
                                label={'Company'}
                                name={'company'}
                                type={INPUT_TYPE_EMAIL}
                            />
                            <textarea name={'message'} />
                            <Button
                                label={'Submit'}
                                type={BUTTON_TYPE_SUBMIT}
                            />
                        </form>
                    </Card>
                </GridItem>
            </Grid>
        </Hero>
    );
};

ContactPageTemplate.displayName = 'ContactPageTemplate';

export default ContactPageTemplate;
