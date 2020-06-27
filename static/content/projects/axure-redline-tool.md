---
path: axure-redline-tool
pageSEO:
  pageDescription: >-
    An interactive redline plugin which simplifies the transition between design
    and development - ensuring developers have all the specifications they need
    to confidently and accurately materialize your designs.
  pageKeywords: >-
    axure,javascript,jquery,css,wireframe,mockup,protoype,prototyping,plugin,spec,design-specs,redline
  pagePostingTitle: Axure Redline Tool
  pageTitle: Axure Redline Tool
  pageType: article
projectTitle: Axure Redline Tool
projectSourceCodeURL: 'https://github.com/srm985/portfolio-website'
projectDemoURL: 'https://www.seanmcquay.com/'
role: Creator (Open Source)
projectDate: 2016-08-14T01:07:44.048Z
projectExcerpt: >-
  An interactive redline plugin which simplifies the transition between design
  and development - ensuring developers have all the specifications they need to
  confidently and accurately materialize your designs.
projectThumbnailImageBlock:
  imageAlt: >-
    zoomed in view of silver analog calipers with a blue circuit board in
    background
  imageSource: /assets/calipers.jpg
  citation:
    authorLink: 'https://unsplash.com/@dansku'
    authorName: Daniel Andrade
    hostingSiteName: Unsplash
    hostingSiteLink: 'https://unsplash.com/'
heroImageBlock:
  imageAlt: >-
    zoomed in view of silver analog calipers with a blue circuit board in
    background
  imageSource: /assets/calipers.jpg
  citation:
    hostingSiteLink: 'https://unsplash.com/'
    hostingSiteName: Unsplash
    authorName: Daniel Andrade
    authorLink: 'https://unsplash.com/@dansku'
projectDescription: >-
  This plugin intends to mimic some of the functionality of the plugin Measure
  for Sketch or InVision Inspect. This application is meant for those who rely
  on Axure in their organizations and would like to provide developers with
  always-up-to-date design specifications. As Axure does not support plugins
  within the application itself, this code resides within and is applied to your
  AxShare projects.  

  [![](https://data.jsdelivr.com/v1/package/npm/axure-redline-tool/badge)](https://www.jsdelivr.com/package/npm/axure-redline-tool)
projectSkillsList: []
projectSectionList:
  - projectSectionBody: >-
      As designer’s, you’re focused on the small details. You notice that
      one-pixel misalignment. When handing off your designs to developers, it’s
      important to accurately convey these details. Simple images might suffice
      for the most robust of component libraries, but otherwise they’re not
      going to cut it. Many design and prototyping tools realized this and
      provide ways to export your designs into interactive redlines – providing
      important details such as spacing, sizing, and CSS attributes. When I
      created this tool, Axure had not joined the list of tools offering this.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a screenshot of the tool showing measurements between various elements
      imageSource: /assets/tool-screenshot.jpg
      citation:
        isCited: true
    projectSectionTitle: What's The Need?
  - projectSectionBody: >-
      Plugins aren’t something officially supported in Axure, but I found an
      interesting loophole. When using AxShare – Axure’s remote hosting service,
      you are provided the ability to add simple scripts into the document. This
      is used for things such as tracking or enhancing your prototypes. I
      decided to see how far I could push this. I generated a script which
      injects itself into the pages, wrapping a new UI around AxShare
      prototypes, while tweaking the existing UI. This initially was
      accomplished by pasting the entire script into the page, but I migrated to
      the jsDelivr CDN for better availability and tracking.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a demo of the user implementing the plugin
      imageOpacity: 100
      imageSource: /assets/laptop-collaboration.jpg
      imageTitle: ''
      citation:
        isCited: true
        authorName: Helloquence
        authorLink: 'https://unsplash.com/@helloquence'
        hostingSiteName: Unsplash
        hostingSiteLink: 'https://unsplash.com/'
    projectSectionTitle: How's It Work?
  - projectSectionBody: >-
      Version 1 was simple. I had no idea if anybody besides me had the desire
      for such a tool. I thought, “If it were needed, it would have been built
      already.” Things are complicated in Axure prototypes. You’ve the ability
      to create a whole host of interactions not seen in other tools such as
      Sketch. As I wasn’t sure of the feasibility or sustainability, the initial
      code base leveraged a simple structure of HTML, JavaScript, CSS, and
      jQuery for complicated DOM interactions. This worked! Word spread and
      interest was piqued. Feature requests and bug fixes started flowing in
      through all channels. GitHub became my primary tracking tool for all of
      this content. 


      As I continued development, it became evident that my simple project
      structure was no longer sustainable. It was time to migrate to a more
      robust solution. React became my preferred framework. I began development
      efforts on version 3. It was a complete rewrite. I ported over the logic
      and built new components. This build took many months, and I finally
      released, just one day before Axure formally announced their built-in
      inspection tool.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a macro photo of a circuit board
      imageOpacity: 100
      imageSource: /assets/circuit-board.jpg
      imageTitle: ''
      citation:
        isCited: true
        authorName: Alexandre Debiève
        authorLink: 'https://unsplash.com/@alexkixa'
        hostingSiteName: Unsplash
        hostingSiteLink: 'https://unsplash.com/'
    projectSectionTitle: How's It Built?
  - projectSectionBody: >-
      My analytics are limited, but the short answer is, yes. I’ve never
      actively promoted the tool, other than posting on forums, but usage has
      grown organically. I received writeups around the world and have chatted
      directly with Axure about the tool. Users provide enhancement requests and
      identify bugs within the tool’s active community.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: >-
        a laptop screening displaying various charts and graphs with plant in
        background
      imageOpacity: 100
      imageSource: /assets/laptop-graphics.jpg
      imageTitle: ''
      citation:
        isCited: true
        authorName: Luke Chesser
        authorLink: 'https://unsplash.com/@lukechesser'
        hostingSiteName: Unsplash
        hostingSiteLink: 'https://unsplash.com/'
    projectSectionTitle: Is It Used?
---
