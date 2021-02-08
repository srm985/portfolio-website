---
path: messaging-client
pageSEO:
  pageDescription: A messaging client allowing inmates to communicate with their loved ones.
  pagePostingTitle: Messaging Client
  pageType: article
  pageKeywords: HTML, CSS, SCSS, JavaScript, jQuery, kiosk, UX, Axure, responsive,
    prototyping, journey map
  pageTitle: Messaging Client
projectTitle: Messaging Client
projectSourceCodeURL: https://github.com/srm985/messaging-client
projectDemoURL: https://www.messaging-client.seanmcquay.com/
role: UX Developer
projectDate: 2020-03-25T20:18:03.646Z
projectExcerpt: A cross-platform application providing inmates the ability to
  communicate with their loved ones in near-real time through a specialized
  email client. This project is composed of three applications - a kiosk
  variant, a responsive application, and mobile applications.
projectThumbnailImageBlock:
  imageAlt: six different mailboxes in a row with tropical plants surrounding them
  imageOpacity: 100
  imageSource: /assets/mailboxes.jpg
  imageTitle: ""
  citation:
    authorLink: https://unsplash.com/@mathyaskurmann
    authorName: Mathyas Kurmann
    hostingSiteName: Unsplash
    hostingSiteLink: https://unsplash.com/
heroImageBlock:
  imageAlt: six different mailboxes in a row with tropical plants surrounding them
  imageOpacity: 100
  imageSource: /assets/mailboxes.jpg
  imageTitle: ""
  citation:
    authorName: Mathyas Kurmann
    authorLink: https://unsplash.com/@mathyaskurmann
    hostingSiteLink: https://unsplash.com/
    hostingSiteName: Unsplash
projectDescription: >-
  This messaging client provides inmates with the opportunity to communicate in
  near-real time with their loved ones through an email client specifically
  tailored for use in prison facilities. Loved ones initiate conversations with
  inmates for a specific "mailing rate". They may then choose to provide "return
  postage" so that inmates may reply. Loved ones may send text and images, while
  inmates may only respond with text. Many restrictions are placed on this
  client due to security concerns. The repository contains the code for the two
  separate components of this messaging client - a kiosk version intended for
  use by inmates and a responsive version used by those communicating with said
  inmates.

  *Disclaimer: The demo pages below have been coerced into the device viewports. Your viewing experience may vary from the actual, developed code.*
projectSectionList:
  - projectSectionBody: This messaging client consisted of three parts – which
      required design and development. It consists of a restricted kiosk
      application for use by inmates, a responsive webpage to support a broad
      array of devices, and dedicated mobile applications. The intended goal of
      this client was to provide inmates with the ability to communicate with
      their loved ones in near-real time. The client borrows many words from the
      world of postal mail. Stamps indicate available credits. These credits are
      sold by each facility and purchased by the inmates loved ones. Currently,
      a message may only be initiated by a loved one. They may send text and
      images to the inmate. If they so choose, they may provide “return postage”
      for the inmate to draft a text-only reply. The client’s limited
      functionality is related to the security measures required to ensure no
      illegal communications occur.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: an image of the application displayed on mobile phone, desktop, and kiosk
      imageOpacity: 100
      imageSource: /assets/phone-desktop-mockup.png
      imageTitle: ""
    projectSectionTitle: Project Overview
  - projectSectionBody: >-
      Prior to the implementation of this messaging application, a variant was
      already in existence. Our organization acquired the business and set about
      stripping the application down to the back-end code and building it back
      up to suit our needs. My design process began by studying and
      understanding the current application. Additionally, I was able to learn
      from the previous owners what things could have been done differently and
      what improvement opportunities existed. From this, I materialized a set of
      users flows for both user personas.


      From there, I met with our business analysts and product owners to understand their project goals and to discuss how we might go about implementing them. Once I had a strong understanding of our organization’s goals, I set about revising user flow diagrams and initial wireframes, keeping in mind our user personas, the goals identified by the organization, and the improvement opportunities identified by the previous owners.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a large charge depicting user flow maps
      imageOpacity: 100
      imageSource: /assets/messaging-client-user-flows.png
      imageTitle: ""
    projectSectionTitle: User Flows
  - projectSectionBody: >-
      Once the initial wireframes had been completed, I again met with our
      product owner, business analysts, and back-end architects to review
      initial screens and ensure they not only met the business goals, but were
      also technically feasible based on the current back-end framework. Several
      improvement opportunities were identified around the checkout process and
      the use of stamps. These improvement opportunities were then wrapped up
      into an initial set of mockups – stylized wireframes adhering to brand
      style guides and finalizing content placement and styling. Again, all
      teams involved in the process met to discuss the flow, the incorporation
      of all business goals, and the back-end feasibility.


      After finalizing the mockups, I progressed to generating front-end code. To begin, I mocked up all back-end services and created simulated API calls so that I could test functionality prior to back-end services being available. I focused first on the kiosk application which inmates use to interact with the product. This application is created as one of many modules which are displayed on a kiosk terminal within the prison facility. Inmates have access to these kiosks at certain hours throughout the day and may use the provided services. Once completed, I moved to development of the responsive web application. This application serves the friends and family members of the incarcerated individuals. This application required much more development time as users have additional functionality including purchasing stamps and their actual composition capabilities. Back-end developers were then left to remove mocked API calls and replace with correct services. Throughout my entire design and development process I not only met with our product owner and business analysts but I also reviewed my progress at a weekly meeting with those individuals within our organization involved in UX and UI. Any feedback was incorporated into the final designs, where applicable.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: screenshots of mobile device wireframes
      imageOpacity: 100
      imageSource: /assets/isometric-wireframes.png
      imageTitle: ""
    projectSectionTitle: Wireframes
  - projectSectionBody: >-
      The responsive web application was the centerpiece of this project –
      allowing friends and family members the ability to communicate with their
      incarcerated loved ones in near-real time. Due to design and backend
      architecture restrictions, this application was required to be loaded
      within a webpage already containing a common header and footer along with
      subsequent site navigation controls. This meant special accommodations
      were required to provide users with a clear distinction between the
      application and its control as opposed to the site controls. From this
      application, users are able to draft messages to their loved ones and
      include images to be viewed. Message costs are quantified based on the
      message length, attachments included, and if the member has chosen to
      provide their loved one the ability to reply to the message. A member’s
      remaining stamps balance is always prominently displayed and a primary
      action button is always available to permit members the ability to
      purchase additional stamps. During design and development, one difficult
      hurdle was creating a responsive application that worked well on both
      desktops and mobile devices.


      [Axure Wireframes](https://www.messaging-client.seanmcquay.com/axure/wireframes/start.html#g=1&p=inbox)


      [Axure Mockups](https://www.messaging-client.seanmcquay.com/axure/mockups/start.html#g=1&p=inbox)
    projectSectionImageBlock:
      imageAlignment: right-narrow
      imageAlt: a screenshot of an email inbox of the application
      imageOpacity: 100
      imageSource: /assets/responsive-mobile-inbox.png
      imageTitle: ""
    projectSectionTitle: Responsive Web Application (Mobile)
  - projectSectionBody: Careful planning needs to be considered for any responsive
      application, ensuring controls and content are skillfully located within
      the reach of users. Having the ability to own the project from concept to
      development permitted me to ensure that all subtleties were accurately
      accounted for and implemented.
    projectSectionImageBlock:
      imageAlignment: left-wide
      imageAlt: a screenshot of a desktop email client
      imageOpacity: 100
      imageSource: /assets/inbox-responsive-desktop.png
      imageTitle: ""
    projectSectionTitle: Responsive Web Application (Desktop)
---
