import React from 'react';

import Button from '../components/ButtonComponent';
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
        <>
            <Hero />
            <form
                className={`${displayName}__form`}
                data-netlify={'true'}
                name={'contact-form'}
            >
                <Input name={'name'} />
                <Input
                    name={'email'}
                    type={INPUT_TYPE_EMAIL}
                />
                <Button
                    label={'Submit'}
                    type={BUTTON_TYPE_SUBMIT}
                />
            </form>
        </>
    );
};

ContactPageTemplate.displayName = 'ContactPageTemplate';

export default ContactPageTemplate;
