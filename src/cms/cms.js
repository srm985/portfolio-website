import CMS from 'netlify-cms-app';
import React from 'react';

import PreviewTemplate from './PreviewTemplate';

// Page Templates
import ContactPageTemplate from '../templates/ContactPageTemplate';
import IndexPageTemplate from '../templates/IndexPageTemplate';
import NotFoundPageTemplate from '../templates/404PageTemplate';
import PortfolioPageTemplate from '../templates/PortfolioPageTemplate';

// Global Components
import Footer from '../components/FooterComponent';
import Header from '../components/HeaderComponent';

CMS.registerPreviewTemplate('contact', (
    <PreviewTemplate>
        <ContactPageTemplate />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('home', (
    <PreviewTemplate>
        <IndexPageTemplate />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('404', (
    <PreviewTemplate>
        <NotFoundPageTemplate />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('portfolio', (
    <PreviewTemplate>
        <PortfolioPageTemplate />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('footer', (
    <PreviewTemplate>
        <Footer />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('header', (
    <PreviewTemplate>
        <Header />
    </PreviewTemplate>
));
