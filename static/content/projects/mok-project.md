---
path: mok-project
pageSEO:
  pageDescription: A touchscreen kiosk keyboard providing support for nearly 100 languages!
  pageKeywords: JavaScript, Keyboard, Kiosk, Multilingual, On-Screen, Terminal,
    Touch, Virtual, jQuery
  pagePostingTitle: Multilingual Onscreen Keyboard
  pageTitle: MOK Project
  pageType: article
projectTitle: MOK Project
projectSourceCodeURL: https://github.com/srm985/mok-project
projectDemoURL: https://www.mok-project.seanmcquay.com/
role: Creator (Open Source)
projectDate: 2017-04-02T05:00:00.000Z
projectExcerpt: A simple jQuery plugin enabling developers to support their
  native-language keyboards on terminals and kiosks.
projectThumbnailImageBlock:
  imageAlt: a picture of a black keyboard with lit up keys
  imageOpacity: 100
  imageSource: /assets/keyboard-closeup.jpg
  imageTitle: ""
  citation:
    authorLink: https://www.pexels.com/@hitarth-jadhav-57415
    authorName: Hitarth Jadhav
    hostingSiteLink: https://www.pexels.com/
    hostingSiteName: Pexels
heroImageBlock:
  imageAlt: a picture of a black keyboard with lit up keys
  imageOpacity: 100
  imageSource: /assets/keyboard-closeup.jpg
  imageTitle: ""
  citation:
    authorLink: https://www.pexels.com/@hitarth-jadhav-57415
    authorName: Hitarth Jadhav
    hostingSiteName: Pexels
    hostingSiteLink: https://www.pexels.com/
projectDescription: >-
  The goal of this project is to materialize a well-styled, onscreen keyboard
  capable of supporting numerous languages fed from .klc files generated by
  Microsoft Keyboard Layout Creator. This has proven to be the most-reliable
  source of unicode data along with dead keys and ligature support but I am
  willing to make revisions if a better source is found. Typical use cases for
  this application include terminals, kiosks, and other touch-point devices. I
  hope to provide the community with a valuable resource that only grows better
  with time and your support!  

  [![](https://data.jsdelivr.com/v1/package/npm/mok-project/badge)](https://www.jsdelivr.com/package/npm/mok-project)
projectSectionList:
  - projectSectionBody: >-
      At one point in my career, I found myself creating multilingual kiosk
      applications. There were plenty of jQuery keyboard plugins available, but
      none seemed to be as robust as I’d like. More importantly, why don’t any
      of them support ALL languages? I’m passionate about spoken languages and
      wanted to provide developers a way to allow them to ship their
      applications with native keyboards.


      The concept was simple – somehow generate a list of every keyboard layout and write some logic to parse and display it.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a screenshot of the rendered keyboard
      imageOpacity: 100
      imageSource: /assets/keyboard-screenshot.png
      imageTitle: ""
    projectSectionTitle: Why Build It?
  - projectSectionBody: >-
      Usage is quite straightforward. This project exposes a simple jQuery
      plugin which can either be directly imported into the project or served
      from a script tag pointed at the CDN,
      [jsDelivr](https://www.jsdelivr.com/package/npm/mok-project). When
      initializing the project, users specify their desired languages. If
      they’re not found locally, the plugin simply fetches the appropriate
      version-controlled language from the CDN.


      ```html

      <script src="https://cdn.jsdelivr.net/npm/mok-project@latest/dist/main.js"></script>

      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/mok-project@latest/dist/styles.css">


      <script type="text/javascript">
          $(document).ready(function() {
              $(document).keyboard({
                  language: 'us',
                  keyboardPosition: 'bottom'
              });
          });
      </script>

      ```
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a closeup picture of typewriter hammers
      imageOpacity: 100
      imageSource: /assets/typewriter.jpg
      imageTitle: ""
      citation:
        isCited: true
        authorLink: https://unsplash.com/@meteorphoto
        authorName: Peter Pryharski
        hostingSiteLink: https://unsplash.com/
        hostingSiteName: Unsplash
    projectSectionTitle: How's It Work?
  - projectSectionBody: >-
      How do you generate 99 keyboard layouts? Fortunately, I was lucky. I
      discovered I had the ability to export language flat files from a utility
      called Microsoft Keyboard Layout Creator. From there, I started the
      arduous process of coding the “processing engine”. This engine consisted
      of a complex regular expression along with all rules required in written
      languages.


      At first, the concept seems simple – or at least it did to me as an English speaker. The user touches a key and we write that to the focused field. Simple enough… I quickly discovered previously-unknown words such as *ligature* and *deadkeys*. These required the plugin to watch for, and interpret, combinations of keys such as ``a + ` = à`` or `a + e = æ`.
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: various used tools such as pliers and cutters in a rack
      imageOpacity: 100
      imageSource: /assets/tools.jpg
      imageTitle: ""
      citation:
        isCited: true
        authorName: NeONBRAND
        authorLink: https://unsplash.com/@neonbrand
        hostingSiteLink: https://unsplash.com/
        hostingSiteName: Unsplash
    projectSectionTitle: How's It Built?
  - projectSectionBody: |-
      

      * Albanian
      * Arabic
      * Azeri-Cyrillic
      * Azeri-Latin
      * Bashkir
      * Belarusian
      * Belgian
      * Bengali
      * Bosnian
      * Bulgarian
      * Croatian
      * Czech-Programmer
      * Czech
      * Danish
      * Dutch
      * Estonian
      * Faeroese
      * Finnish-Sami
      * Finnish
      * French
      * Gaelic
      * Georgian
      * German
      * Greek
      * Greenlandic
      * Gujarati
      * Hausa
      * Hebrew
      * Hindi
      * Hungarian
      * Icelandic
      * Igbo
      * Irish
      * Italian
      * Japanese-Latin
      * Kannada
      * Kazakh
      * Khmer
      * Korean-Latin
      * Kyrgyz
      * Languages
      * Lao
      * Latvian
      * Lithuanian
      * Macedonian
      * Malayalam
      * Maltese
      * Maori
      * Marathi
      * Mongolian
      * Nepali
      * Norwegian
      * Oriya
      * Pashto
      * Persian
      * Polish
      * Portguese-Brazil
      * Portguese
      * Punjabi
      * Romanian
      * Russian
      * Serbian
      * Sesotho-Sa-Leboa
      * Setswana
      * Sinhala
      * Slovak
      * Slovenian
      * Sorbian
      * Spanish
      * Swedish
      * Swiss-French
      * Swiss-German
      * Syriac
      * Tajik
      * Tamil
      * Tatar
      * Telugu
      * Thai-Kedmanee
      * Thai-Pattachote
      * Tibetan
      * Turkish-F
      * Turkish-Q
      * Turkmen
      * Uk
      * Ukranian
      * Urdu
      * US-Dvorak
      * US
      * Uyghur
      * Uzbek
      * Vietnamese
      * Wolof
      * Yakut
      * Yoruba
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a picture of various languages on wooden street signs
      imageOpacity: 100
      imageSource: /assets/languages-sign.jpg
      imageTitle: ""
      citation:
        isCited: true
        authorName: Soner Eker
        hostingSiteName: https://unsplash.com/
        authorLink: Unsplash
    projectSectionTitle: Language Support
  - projectSectionBody: Despite jQuery losing popularity over the years, this
      keyboard has seen incredible growth! This keyboard has presented me with
      the fantastic opportunity of connecting with developers around the world.
      I’ve since coordinated with developers on every inhabited continent. I’ve
      fielded numerous enhancement requests and bugs. As I view the usage
      statistics, I’ve been so thrilled to see its usage with languages and
      layouts I never even knew existed!
    projectSectionImageBlock:
      imageAlignment: full
      imageAlt: a person typing on a computer on a table
      imageOpacity: 100
      imageSource: /assets/typing.jpg
      imageTitle: ""
      citation:
        isCited: true
        authorName: fauxels
        authorLink: https://www.pexels.com/@fauxels
        hostingSiteName: Pexels
        hostingSiteLink: https://www.pexels.com/
    projectSectionTitle: Is It Used?
---
