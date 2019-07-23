import React from 'react';
import {
    storiesOf
} from '@storybook/react';

import InlineCode from './index';

const stories = storiesOf(InlineCode.displayName, module);

stories.add('default', () => (
    <div style={{
        padding: '40px 60px'
    }}>
        <p>Commodo et labore sit cillum elit elit ullamco ut est velit dolore cupidatat anim ullamco. Aliqua anim sint in proident in incididunt id sunt aute in. Exercitation laboris laboris sunt ea non dolor excepteur <InlineCode>exercitation</InlineCode> nulla occaecat deserunt sit commodo cupidatat. Elit incididunt nulla duis velit tempor laborum ipsum fugiat cupidatat.<br /><br />Anim minim amet nostrud excepteur. Fugiat amet in et Lorem dolor proident anim nulla quis. Sit consectetur officia aliqua nostrud. Officia velit pariatur adipisicing ut sint. Amet minim exercitation elit voluptate consectetur non excepteur ea. Amet nostrud adipisicing voluptate deserunt dolore <InlineCode>voluptate</InlineCode> amet fugiat dolore mollit laborum. Occaecat duis aliqua duis eu ad pariatur cupidatat eu nulla laboris anim quis eiusmod est.<br /><br />Lorem Lorem esse reprehenderit proident. Est est eiusmod incididunt in consequat id velit est nisi. Magna ad ad exercitation non consectetur veniam cillum ea veniam officia eiusmod excepteur nostrud cillum. <InlineCode>Eiusmod</InlineCode> cupidatat eu sit irure minim Lorem nulla culpa. Commodo ullamco quis sit anim consectetur. Elit voluptate nostrud sint dolor.<br /><br />Veniam consectetur cillum eu est do laboris officia excepteur elit incididunt. Sint ipsum enim nisi minim reprehenderit. Cillum minim ullamco amet aute Lorem. Mollit cillum mollit aliqua proident id <InlineCode>consequat</InlineCode> sint aute ea velit duis ullamco <InlineCode>laborum</InlineCode>.</p>
    </div>
));
