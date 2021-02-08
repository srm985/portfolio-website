---
path: the-case-for-strictly-linting-everything
pageSEO:
  pageTitle: Articles
  pageType: article
  pagePostingTitle: The Case for Strictly Linting…Everything
  pageDescription: Linting is controversial. Linting is the cause of many debates.
    Linting can be one of your most powerful tools, if done right.
  pageKeywords: linting, eslint, stylelint, javascript, css, html, scss, sass, less, prettier
articleTitle: The Case for Strictly Linting…Everything
articlePublishDate: 2020-11-01T16:03:37.572Z
articleCategory: Development
articleExcerpt: Linting is controversial. Linting is the cause of many debates.
  Linting can be one of your most powerful tools, if done right.
articleThumbnailImageBlock:
  imageTitle: ""
  imageOpacity: 100
  imageAlignment: full
  imageSource: /assets/linting-hero-2x.png
  imageAlt: a lint roller rolling over lines of code
heroImageBlock:
  imageTitle: ""
  imageOpacity: 40
  imageAlignment: full
  imageAlt: a lint roller rolling over lines of code
  imageSource: /assets/linting-hero-2x.png
articleSectionList:
  - articleSectionTitle: Creating controversy
    articleSectionBody: "Linting is controversial. Linting is the cause of many
      debates. Linting can be one of your most powerful tools, if done right. If
      you’ve spent any time in the front-end development ecosystem, you’ve most
      likely heard the word “linter” or “linting”. My definition of linting is,
      “The systematic application of preferential best practices in coding,”
      with a heavy emphasis on “preferential”. The easiest block of linting
      rules to justify are those which relate to the prevention of unexpected
      bugs through ambiguity, such as nested scope declaration of variables.
      This block of rules addresses coding techniques which teams will
      unanimously call wrong. \r

      \r

      For me, the next block of rules surrounds version control diff
      management. These rules are opinionated, but in my view, carry a bit more
      logic. For example, we might consider the notorious example of tabs versus
      spaces, carriage returns, or even trailing commas. Getting buy-in on this
      block isn’t too hard as they don’t affect the day-to-day life of
      developers. \r

      \r

      The block of rules I’m talking about today though are those rules
      which lean heavily into the preferential category. This can be something
      like destructuring versus dot notation. Whatever justification used for
      the rule can be used against the rule. The simple enforcement of these
      rules alone adds zero value to your code base. The case I’m making though
      is the value added by making the cognizant choice to define preferences
      and capture in enforced linting rules."
  - articleSectionTitle: Consistency
    articleSectionBody: "Preferential linting rules can feel repressive to the
      individuality of developers, but it’s important to understand why we
      implement such a strict set of rules – consistency. Consistency reigns
      supreme here. When you open any given file, it should feel familiar and
      easy to understand, even if you’ve never worked on that feature or portion
      of the code base. There shouldn’t be hints as to which developer wrote the
      code. Again, this may be starting to sound like a repressive regime, but
      that’s not the goal. We’re not looking to repress how developers go about
      solving problems and implementing solutions. We’re instead looking to
      bring consistency to the syntax leveraged in those given solutions.
      Consistency means that developers aren’t stuck trying to interpret a file
      or confused about syntax they’ve never seen before. Consistency means that
      new developers can quickly onboard and contribute across your code base.
      Consistency means that files written a year ago by an entirely different
      team feel identical to the new team just refactoring them. Maintaining
      true consistency is hard. It can only be achieved through a strict set of
      linting rules. Leaving gaps or ambiguity opens the door to inconsistency.
      "
  - articleSectionBody: "The hardest hurdle on your way to strict linting is getting
      initial buy-in. If you have an existing code base and developers
      accustomed to a certain way of coding, you’ll find a lot of pushback. In
      these scenarios though, it may be best to hand the task over to your
      developers to work through defining these rules. Setting up a steering
      committee tasked with defining linting rules has been a favorable
      approach, as it ensures everyone’s voice is heard. \r

      \r

      The other major challenge of working in an existing code base is the
      sudden introduction of numerous new rules triggering thousands, if not
      tens of thousands of errors. I’ve created some techniques to solve this
      issue which I’ll discuss in a future article. For new code bases, now is
      the time to go all out on linting rules. You’ll find it much harder to
      retroactively implement stricter rules and developers will be coming into
      a fresh code base where all of the rules have already been defined. With
      either approach though, listen to your development teams. Give them the
      tools to modify rules, such as a steering committee. These rules should be
      strict and deliberate, but they should not be set in stone."
    articleSectionTitle: Earning buy-in
  - articleSectionBody: >-
      Most everyone has heard of ESLint or TSLint (TSLint has recently been
      [marked as
      deprecated](https://medium.com/palantir/tslint-in-2019-1a144c2317a9)). If
      you’re using a popular front-end framework, these might already be baked
      right in. I’d venture to guess though that fewer people are linting their
      CSS or HTML (where applicable). I’m making the case for linting
      everything. JavaScript, CSS, and HTML are the three most extensions in
      which your teams will be working and will see the most value from
      standardization through linting. Yes, you may have the occasional JSON or
      YML configuration file, but they’re most likely one-off instances where
      consistency is less critical.


      Linting CSS (or SCSS/LESS) serves to not only maintain consistency in your code, but in the visual appearance of your application. Defining strict linting rules for CSS allows you to prevent design inconsistencies such as the use of unauthorized colors, measurement units, or even the level of selector nesting seen in precompiled instances such as SCSS. Linting CSS also aims to prevent unexpected bugs by identifying mismatched attributes or those attributes which have no applicability based on element or superseding attributes.


      There’s also a strong case for linting HTML nowadays. While less applicable, linting HTML can ensure you’re properly structuring elements in a way which does not violate any permissible nesting rules. We can also configure this to monitor ADA compliance violations. If you’re leveraging JSX, this functionality can even be baked right into ESLint through [a11y support.](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
    articleSectionTitle: There’s more than just JavaScript
  - articleSectionBody: >-
      Prettier is [opinionated](https://prettier.io/docs/en/index.html) – that’s
      their entire philosophy. After all, that’s what I’m preaching so why
      wouldn’t I suggest Prettier? For me, it comes down to granularity and
      control. As I mentioned before, rules should be strict and deliberate, but
      they should not be immovable. Developer consensus should carry enough
      weight to override or modify rules. Prettier only allows this on a small
      scale. In my quest for consistency, one could argue that simply using
      Prettier ensures a consistent set of expected rules, even for developers
      just joining your organization. As the Prettier rules are nearly the same
      in any implementation, you might be able to expect incoming developers to
      have already mastered the ruleset. For me though, the lacking granularity
      of Prettier does not justify the case for consistency.


      Additionally, both ESLint and its CSS equivalent, stylelint, offer better support for automatic fixes. This allows you to programmatically apply these rules with minimal disturbances to developers. We’ll talk a little more about this in the next section. Setting up linters for JavaScript, CSS, and HTML takes effort. Prettier may sound tempting, but for any large-scale code base I don’t not believe Prettier offers the support or granularity needed to adequately express your preferences. Given its broad support though, I do appreciate Prettier for those less-critical file types such as JSON or YML. Prettier offers a quick and simple ROI for these.
    articleSectionTitle: Why not Prettier?
  - articleSectionBody: Implementing linting rulesets is just half of the process.
      These rules should be configured to fail builds if they are not met, but
      our goal is to simplify the lives of our developers. If we can reduce
      their time spent refactoring just to satisfy a bunch of linting rules, it
      will ensure acceptance of strict rulesets. Most linters provide automatic
      resolution of discernable errors. We can simply capture this in an npm
      script which developers execute before committing code. This script
      resolves all errors which it is capable of discerning. Those remaining are
      returned as errors in the console. We can take this one step further
      though and automate this process through Husky. By setting up a pre-commit
      hook, we can lint our code before committing anything. During this process
      we’ll attempt to correct any linting errors found. If we are unable to
      resolve errors, we’ll fail the commit, ensuring only well-formatted code
      is entering our code base.
    articleSectionTitle: Be lazy, automate everything
---
