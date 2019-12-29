module.exports = {
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            },
            resolve: 'gatsby-source-filesystem'
        },
        'gatsby-plugin-sass',
        'gatsby-plugin-postcss',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-netlify-cms',
        {
            options: {
                background_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png',
                // This path is relative to the root of the site.
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                theme_color: '#663399'
            },
            resolve: 'gatsby-plugin-manifest'
        },
        {
            options: {
                anonymize: true,
                cookieDomain: 'auto',
                head: false,
                respectDNT: true,
                trackingId: 'UA-86885981-1'
            },
            resolve: 'gatsby-plugin-google-analytics'
        }
    ],
    siteMetadata: {
        author: 'Sean McQuay',
        description: 'A website dedicated to some of the projects I have completed over the years.',
        title: 'Portfolio Website'
    }
};
