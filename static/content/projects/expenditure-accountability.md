---
path: expenditure-accountability
pageSEO:
  pagePostingTitle: Expenditure Accountability
  pageTitle: Expenditure Accountability
  pageType: article
  pageKeywords: >-
    React,NodeJS,ExpressJS,Firebase,PostgreSQL,PSQL,Heroku,OAUTH,authentication,expenses,expense
    tracking,budget
projectTitle: Expenditure Accountability
projectSourceCodeURL: 'https://github.com/srm985/expenditure-accountability-ui'
projectDemoURL: 'https://www.expenditureaccountability.com/'
role: Owner/Developer
projectDate: 2019-09-02T01:31:12.725Z
projectExcerpt: >-
  Helping couples track personal expenses and keep each other on track to
  financial success, without giving away life’s little secrets like purchases
  directed towards gifts or other surprises.
projectThumbnailImageBlock:
  imageAlignment: full
  imageAlt: a glass jar knocked over with various coins spilled out of it
  imageOpacity: 100
  imageSource: /assets/spilled-coins.jpg
  imageTitle: ''
  citation:
    authorName: Josh Appel
    authorLink: 'https://unsplash.com/@joshappel'
    hostingSiteName: Unsplash
    hostingSiteLink: 'https://unsplash.com/'
heroImageBlock:
  imageAlignment: full
  imageAlt: a glass jar knocked over with various coins spilled out of it
  imageOpacity: 100
  imageSource: /assets/spilled-coins.jpg
  imageTitle: ''
  citation:
    hostingSiteLink: 'https://unsplash.com/'
    hostingSiteName: Unsplash
    authorLink: 'https://unsplash.com/@joshappel'
    authorName: Josh Appel
projectDescription: >-
  How do you track expenses as a couple? How do keep each other on track to
  financial success without shared bank accounts or meticulous spreadsheets? And
  most importantly, how do you accomplish this without giving away the small
  details like how much your significant other spent on your Christmas gift?
  This application aimed to fix this through integration with
  [Splitwise](https://www.splitwise.com/) and input of additional financial
  data.
projectSectionList:
  - projectSectionBody: >-
      The goal of this project was simple – to help my significant other and I
      better track our expenses. We wanted a way to keep each other on track
      with monthly expenditures outside of the common expenses of the household.
      We wanted a common, secure location where we could review our expenses and
      determine if we were on target for the month. Most importantly though, we
      wanted a way to track and display this without unintentionally sharing
      exact figures we were spending on things like gifts for one another.
      Neither of us were interested in off-the-shelf solutions like
      [Mint](https://www.mint.com/). Furthermore, I wanted to ensure integration
      with our shared expenses tracking application,
      [Splitwise](https://www.splitwise.com/). It seemed like a perfect
      opportunity to build something myself and test out a few new technologies
      along the way.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a plant growing from a jar of coins set on a table
      imageOpacity: 100
      imageSource: /assets/plant-growing-from-coins.jpg
      imageTitle: ''
      citation:
        isCited: true
        authorLink: 'https://unsplash.com/@micheile'
        hostingSiteName: Unsplash
        authorName: Micheile Henderson
        hostingSiteLink: 'https://unsplash.com/'
    projectSectionTitle: What's The Need?
  - projectSectionImageBlock:
      imageTitle: ''
      imageOpacity: 100
      imageAlignment: full
      imageSource: /assets/expenditure-accountability-screenshot.png
      imageAlt: two phones side by side showing different views of the application
      citation:
        isCited: true
    projectSectionTitle: How's It Work?
    projectSectionBody: >-
      After registering and logging in through a secure portal (more on this
      later), first time users are prompted to provide permission to link their
      Splitwise account. Recall, this application leverages shared expenses
      which are tracked through Splitwise. This simple interchange is handled by
      OAuth 2.0. Once linked, the application imports all shared expenses for a
      given group – in this case my significant other and I. These expenses
      cannot be edited, but contribute to our three expenditure categories:


      * Shared

      * Grocery

      * Personal


      Users may add additional expenses through the application. Those expenses
      which contribute to shared monthly expenditures will be divided and
      reflect in each user’s portal. Personal expenses only affect that user’s
      monthly expenditures.

      Users may then flip over to their tracking view. At first glance, this
      view provides a visual indication to users whether they have exceeded
      their expenditures for a given week. To gain additional insight, users may
      unhide the exact figure they have spent for the week.
  - projectSectionImageBlock:
      imageTitle: ''
      imageOpacity: 100
      imageAlignment: full
      imageSource: /assets/laptop-with-plant.jpg
      imageAlt: a laptop on a marble table next to several small potted plants
      citation:
        isCited: true
        authorLink: 'https://unsplash.com/@codestorm'
        authorName: Safar Safarov
        hostingSiteName: Unsplash
        hostingSiteLink: 'https://unsplash.com/'
    projectSectionTitle: How's It Built?
    projectSectionBody: >-
      The application build consisted of both front-end and back-end work. The
      front end is a React SPA with routing. The back end is NodeJS leveraging
      Express for the framework and PostgreSQL for data retention. The component
      library is proprietary, leveraging Storybook to facilitate component
      creation. This application leverages a hand-rolled authentication service
      along with OAuth for communication with Splitwise endpoints.
  - projectSectionImageBlock:
      imageTitle: ''
      imageOpacity: 100
      imageAlignment: full
      imageSource: /assets/locked-door.jpg
      imageAlt: a black door locked with an old yellow lock
      citation:
        isCited: true
        hostingSiteName: Unsplash
        authorLink: 'https://unsplash.com/@chrispanas'
        authorName: chris panas
        hostingSiteLink: 'https://unsplash.com/'
    projectSectionBody: >-
      As this was one of my first full stack applications which required robust
      authentication, I decided to take the opportunity to roll my own
      authentication service. The onboarding process begins by users receiving
      an invitation link with a unique token. Once registered, this token is
      expired. User details, along with all sensitive data is hashed before
      storing in the database. This application employs a split-token approach
      in an attempt to mitigate both XSS and CSRF attack. When logging in, a
      portion of the token is returned in the response body. This portion is
      stored in local storage. The other portion of the token is sent as an
      HTTP-only, secure cookie. Each request contains both portions, which are
      reconstructed on the back end prior to validating. In building this
      authentication service, it was my goal to provide a pleasant experience,
      while mimicking some of the functionality you might see in applications
      like Google’s suite. Users may remain logged in on all devices, even after
      updating passwords. Users may instantly invalidate all logged in sessions.
      Taking the approach of writing my own authentication service helped me
      understand many of the intricacies missed when relying on external
      services such as [Firebase](https://firebase.google.com/).
    projectSectionTitle: Authentication - Rolling My Own
---
