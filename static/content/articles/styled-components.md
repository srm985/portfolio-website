---
path: styled-components
pageSEO:
  pageTitle: Articles
  pagePostingTitle: Is styled-components your answer to everything CSS?
articleTitle: Is styled-components your answer to everything CSS?
articlePublishDate: 2020-12-01T22:13:06.246Z
articleCategory: Development
articleExcerpt: The library styled-components is one of the hottest options for
  implementing CSS-in-JavaScript solutions. Does it solve more problems than it
  creates though?
articleThumbnailImageBlock:
  imageTitle: ""
  imageOpacity: 100
  imageAlignment: full
  imageSource: /assets/styled-components.jpg
  imageAlt: a bunch of large, identical concrete structures lying in a blue sea
heroImageBlock:
  imageTitle: ""
  imageOpacity: 40
  imageAlignment: full
  imageSource: /assets/styled-components.jpg
  imageAlt: a bunch of large, identical concrete structures lying in a blue sea
articleSectionList:
  - articleSectionTitle: Mixing scripts
    articleSectionBody: If you’re working with React, then you’re certainly already
      familiar with the JSX syntax - the concept of blending JavaScript and
      HTML. Initially this can be a bit unintuitive, but most developers find it
      quickly grows on them. The next logical step then would be to mix
      JavaScript and CSS to programmatically control how our components render.
      This is what styled-components aims to achieve. While there are many
      CSS-in-JavaScript libraries available, we’ll specifically focus on
      styled-components due to its growing popularity. In this article, I’ll
      take a look at the problems styled-components aims to solve. In life, most
      things come at a price. While I appreciate styled-components and its
      approach, I don’t believe it’s immune to this mantra.
  - articleSectionTitle: Why take a CSS-in-JavaScript approach?
    articleSectionBody: >-
      Working with JSX, we quickly see the benefits of this interspersed
      approach. Initially, this makes sense - if we want to modify the styling
      of a component, we can simply control it with JavaScript similar to a
      React prop, instead of applying an array of class names or using dreaded
      inline styling. While I believe inline styling should be avoided in almost
      every situation, I’m not sure that programmatically controlling class
      names is any additional effort, plus it provides very useful debugging
      information. Let’s take a look at a comparison:


      ```html

      <!-- Button using styLed-components -->

      <button class="_7bRF88hdb">Button</button>


      <!-- Button using CSS with BEM notation -->

      <button class="ButtonComponent ButtonComponent--secondary ButtonComponent--disabled">Button</button>

      ```


      In the styled-components instance, our class name gives us no identifying information as to the state of the button, while reading our BEM-notated class names gives us an insight into what our intended styling is. With a simple package such as [classnames](https://www.npmjs.com/package/classnames), you can easily coordinate the programmatic control of class names. Taking it one step further, you can simply roll your own to further reduce overhead.
  - articleSectionTitle: What does styled-components aim to solve?
    articleSectionBody: >-
      On their website, styled-components provides a bulleted [list of problems
      they aim to solve](https://styled-components.com/docs/basics#motivation).
      I’d like to break down and address each item.


      * Automatic critical CSS: styled-components keeps track of which components are rendered on a page and injects their styles and nothing else, fully automatically. Combined with code splitting, this means your users load the least amount of code necessary.

        * Code splitting is not specific to styled-components, it’s a feature provided by webpack. If you’re working with React, you’re working with webpack and can enable this feature regardless of how you write CSS. 
        * Only loading styling required for rendered components also is not unique to styled-components. Assuming your teams are adhering to best practices (more on their implementation later) you’re scoping CSS to a given component and have no component-specific styling which is applied from a global scope. To capture your component-specific CSS, simply leverage [style-loader](https://www.npmjs.com/package/style-loader), an npm package with nearly 10 million weekly downloads. Style-loader allows you to simply import your CSS in your React component. Style-loader can be further extended in your webpack configuration to allow for SCSS precompilation, the programmatic application of vendor prefixes, and any other piped functionality.
      * No class name bugs: styled-components generates unique class names for your styles. You never have to worry about duplication, overlap or misspellings.

        * The concern of unique class names or scoped CSS is simply mitigated in React by leveraging a [displayName](https://reactjs.org/docs/react-component.html#displayname) attribute and scoping everything in your component under this. You can enforce this practice with ESLint, stylelint (CSS linter), and BEM notation.
        * The misspelling of class names is certainly a real concern. Ideally, you’re not writing code and pushing it to production, so you’re most likely catching these errors during testing. That said, there is certainly some increase in developer effort from having no autocompletion support for class names in your text editor. I’d argue that [CSS Modules](https://github.com/css-modules/css-modules) is a better solution to solve this though.
      * Easier deletion of CSS: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.

        * How much code are you writing where you lose track of the CSS for a given component? If you're writing so much CSS for a component, it probably means your component is too complicated.
        * How does styled-components make it easy to identify code which can be deleted? You check what components you've imported, right? You'd just search for these with regular CSS. In my experience this would be a marginal gain.
        * In your code base, I’d suspect to see three sections of CSS. The first, and most global would be whatever your equivalent of a CSS reset is. In this file, you’d be applying CSS targeted at native elements. I wouldn’t expect to find any class names or ID selectors here. The second file would be global helper classes. These classes would provide useful classes to control element positioning, structure, or a few other restricted attributes. This file would clearly be identified as a global file and it would be implied that modification of any of these helper classes would have broad-sweeping consequences. Finally, I would suspect to see a file with component-scoped CSS. This would contain component-specific styling and would be scoped to the displayName of the component. If you find yourself needing CSS in a React view, you’ve probably done something wrong. That’s a topic for another discussion though.
      * Simple dynamic styling: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.

        * Is manually adding classes actually a negative? I find significant benefits in seeing actual class names on components when debugging in developer tools. Following BEM notation, I can easily see what I'm trying to achieve at a given point. For example, why is a button red? With styled-components you'd have to go back and look at the logic. With SCSS following BEM notation, I might see something like .button__primary--danger which is indicative of such a scenario. [Linked](https://github.com/srm985/portfolio-website/blob/master/src/components/ButtonComponent/index.js#L129) is an example of a button with many conditional classes. This has worked fine in many large-scale production environments for me. I believe that seeing all of the presentational logic in one neat object helps determine the intended goal of each class.
        * Following a programmatic class name approach, you’re still applying styling based off of passed props and I suspect the effort is comparable - it’s just a matter of where. Following styled-components, you’d apply a bit of conditional logic such as a ternary operator driven off of a prop to control an attribute. Following a SCSS/BEM approach, you might use a util to programmatically control the application of classes based on props, such as with [classnames](https://www.npmjs.com/package/classnames).
      * Painless maintenance: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.

        * Any enterprise-level code base will have practices in place which mitigate this, even with vanilla CSS. Styled-components can extend classes anyways which spreads CSS across files causing similar issues.
        * If you're using scoped SCSS (enforced through linting), your CSS will anyways be scoped. Additionally, with React we typically only write CSS for a component.
      * Automatic vendor prefixing: write your CSS to the current standard and let styled-components handle the rest.

        * We can do this automatically with SCSS through webpack. Furthermore, we have more granularity when configuring this through webpack. Bundled or embedded tools work well for small projects, but typically fail to scale.
  - articleSectionTitle: At what sacrifice?
    articleSectionBody: >-
      Styled-components tends to end up looking like a bunch of CSS with
      interspersed ternary operators. We can clean this up and create functional
      CSS, but much of this resides inside template literals which are immune to
      formatting by most formatting tools. This can lead to hard to read CSS, as
      even simple things like indentation won’t be maintained. Then again, isn’t
      that what JSX is - HTML interspersed with JavaScript. Yes, it is but JSX
      is supported by ESLint and even default formatters built into text
      editors. JSX can be incredibly intuitive if done right but can also be
      horrendous to read if done poorly. Your teams have probably experienced
      this, and perhaps even implemented an ESLint rule or two to remedy this.
      The same goes for styled-components. Almost every developer appreciates
      those slick, one-line solutions, but not many can understand them at a
      glance. Sometimes a more-verbose approach yields better readability in the
      long run. 


      I appreciate self-documenting code and as you’ve probably seen by now, I’m a big fan of [linting everything](https://www.saggezza.com/the-case-for-strictly-linting-everything/). Leveraging styled-components means there’s no easy way to lint your CSS. Perhaps you’ve never even thought to lint your CSS, but there’s a world of value to be found there. You can enforce everything from the sorting order of attributes to the restriction of units or adherence to brand colors. This guiding structure provided by linting CSS is essential in the mitigation of technical debt when working with large teams in large code bases.


      I’d like to compare the readability two approaches:


      ```jsx

      // styled-components

      const ButtonComponent = styled.button`
          width: 200px;
          height: 40px;
          color: ${(props) => (props.primary ? 'white' : 'black')};
          font-size: 20px;
          text-transform: ${(props) => (props.primary ? 'uppercase' : 'initial')};
          background-color: ${(props) => (props.primary ? 'black' : 'white')};
          border: ${(props) => (props.primary ? 'initial' : 'solid 1px black')};
          border-radius: 5px;
      `;

      ```


      ```jsx

      // SCSS + BEM

      const ButtonComponent = (props) => {
          const {
              isPrimary,
              isSecondary
          } = props;

          const {
              displayName
          } = ButtonComponent;

          const componentClassNames = classNames(
              displayName,
              {
                  [`${displayName}--primary`]: isPrimary,
                  [`${displayName}--secondary`]: isSecondary
              }
          );

          return (
              <button className={componentClassNames} />
          );
      };

      ```


      ```scss

      .ButtonComponent {
          width: 200px;
          height: 40px;
          font-size: 20px;
          border-radius: 5px;

          &--primary {
              color: white;
              text-transform: uppercase;
              background-color: black;
          }

          &--secondary {
              color: black;
              background-color: transparent;
              border: solid 1px black;
          }
      }

      ```


      While completely opinionated (what things aren’t opinionated in coding?) I’d argue that while the styled-components approach is much smaller, it can become much more difficult to read. Taking a JSX+BEM+SCSS approach groups things into nice little buckets. You’ll find all of the programmatic class names for your component in one easy spot and you can easily review what logic controls a given class name. The same goes for the CSS itself. We’re following BEM-structured SCSS which allows us to see our nice little blocks of attributes for each conditional class. There’s no time spent searching for a given attribute from a long list which may be sorted randomly. 


      Yes, my styled-components example is a worst-case scenario. You can drastically improve its readability by taking several steps, but how do you enforce this? To my knowledge, there aren’t any linting rules which prevent developers from using styled-components like in the example above. You’re relying on code reviews for manual intervention. This is not a sustainable practice. People make mistakes and may not catch everything. This also opens it up to developer interpretation and arguments. Linting rules aim to mitigate opinionated reviews by capturing consensual opinions in written rules. Relying on developers to enforce best practices will lead to divisions and time wasted on arguing what’s “best”.
  - articleSectionTitle: Off the rails
    articleSectionBody: Having read my previous sections, I’d suspect you’ve managed
      to infer my viewpoint on styled-components. To be clear, I believe
      styled-components does provide benefits through a low cost of entry, but I
      do not believe it is necessary if you have experienced developers to help
      establish the best practices required to sustain your code base. React
      does not care if you do a poor job of structuring your code base. It
      offers no help or guidance. This gives great flexibility, but also
      provides a situation for things to quickly jump off the rails. If you’re a
      startup or building out a product with less experienced developers and
      simply need to get things off the ground, that’s where styled-components
      shines. It’s a simple module which is easily dropped in, propagating out
      its rules throughout your code base. Styled-components gives inexperienced
      teams the ability to move fast without incurring loads of technical debt.
      It teaches best practices and ensures a quality product. As with anything
      in life, you’ll soon find that nothing in life comes for free. It’s
      important to understand what styled-components aims to solve.
  - articleSectionTitle: Which should I use?
    articleSectionBody: >-
      Styled-components: 


      * You find yourself needing to get a project off the ground with limited time and resources

      * Your development team is less experienced and may have trouble implementing a robust approach through SCSS/BEM coupled with the necessary linting rules

      * You are developing a small-to-medium offering which will 

      * You’ll have a small number of co-located resources working in the code base




      JSX + BEM + SCSS:


      * You’re looking to build out a large-scale product

      * You have direct or indirect access to skilled developers capable of placing the required infrastructure

      * You’re looking to control with high granularity every step in the build process

      * You’ll have a large number of resources working in the code base, potentially working in a distributed environment where highly consistent CSS is critical to developer efficiency and reduction of technical debt
---
