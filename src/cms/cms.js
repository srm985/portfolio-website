import CMS from 'netlify-cms-app';
import React from 'react';

// Page Templates
import NotFoundPageTemplate from '../templates/404PageTemplate';
import ArticleTemplate from '../templates/ArticleTemplate';
import ContactPageTemplate from '../templates/ContactPageTemplate';
import IndexPageTemplate from '../templates/IndexPageTemplate';
import PortfolioPageTemplate from '../templates/PortfolioPageTemplate';
import ProjectTemplate from '../templates/ProjectTemplate';

// Global Components
import Footer from '../components/FooterComponent';
import Navigation from '../components/NavigationComponent';

import PreviewTemplate from './PreviewTemplate';

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

CMS.registerPreviewTemplate('projects', (
    <PreviewTemplate>
        <ProjectTemplate />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('articles/*', (
    <PreviewTemplate>
        <ArticleTemplate />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('footer', (
    <PreviewTemplate>
        <Footer />
    </PreviewTemplate>
));

CMS.registerPreviewTemplate('navigation', (
    <PreviewTemplate>
        <Navigation />
    </PreviewTemplate>
));
