const AllQuestionENG = [
  [
    {
      id: 1001,
      title: 'HTML is ... ?',
      variants: [
        'Hypertext markup language',
        'Browser programming language',
        'Minitext Markup Language',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'DOM Tree - stands for ... ',
      variants: ['Document Obwohl Model', 'Document Object Model', 'Document Object Mood'],
      correct: 1,
    },
    {
      id: 1003,
      title: 'Whats the difference between div and span elements?',
      variants: [
        'div is a block element and span is adjoining',
        'div is an inline element and span is a block element',
        'div is a block element and span is an inline element',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'What are meta tags?',
      variants: [
        'Special code elements through which the browser and search engines read information about the site',
        'Special code elements that block third-party search engines',
        'Special code elements that expand the functionality of the site and allow you to work directly with the database',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Difference between cookie, sessionStorage and localStorage?',
      variants: [
        'In the amount of data that localStorage > sessionStorage > cookies can store. The data storage time is also different + Local and session storage are available only on the client side, unlike Cookie',
        'In the name',
        'Delicious cookies',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Which of the tags below are single?',
      variants: [
        '<br/>, <img/> <meta/> <hr/> <input/>',
        '<div/>, <col/> <area/> <source/> <wbr/>',
        '<span/>, <area/> <embed/> <keygen/> <param/>',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'How to write comments in HTML code?',
      variants: ['/* I am a comment */', '// I am a comment', '<!-- I am a comment -->'],
      correct: 2,
    },
    {
      id: 1008,
      title: 'What is an Image Map?',
      variants: [
        'This is a technology that allows you to attach links to image fragments',
        'This is a technology that allows you to track and optimize images on the page',
        'This is a technology that allows you to remove unnecessary images according to the interests of the user',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'What is Canvas?',
      variants: [
        'The HTML5 canvas element can be used to insert images, gradients and complex animations',
        'The HTML4 canvas element can be used to insert images, gradients and complex animations',
        'The HTML5 canvas element can be used to insert images, gif images and non-complex animations',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'CSS is ... ?',
      variants: [
        'Formal language for describing page appearance',
        'Informal language for describing page appearance',
        'Formal programming language',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'CSS stands for ... ',
      variants: ['Cascading Stylish Set', 'Cascading Style Sheets', 'Cookies Super Sweet'],
      correct: 1,
    },
    {
      id: 1003,
      title:
        'How can I set the "opacity" property on a "button" element that has a "disabled" attribute?',
      variants: [
        'Via button selector (class/id etc)',
        'Via class :disabled',
        'Via pseudo-class :disabled',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'What is the :root pseudo-class?',
      variants: [
        'A pseudo-class that selects the root element in the document tree. In the case of an HTML document, this is the html element. In the case of an SVG document, this is the svg element',
        'A pseudo-class that selects the root element in the document tree. In the case of an HTML document, this is the body element. In the case of an SVG document, this is the img element',
        'A class that selects the root element in the document tree. In the case of an HTML document, this is the html element. In the case of an SVG document, this is the svg element',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'How does the ":placeholder-shown" pseudo-class work?',
      variants: [
        'The ":placeholder-shown" pseudo-class fires when "input" or "textarea" elements have "placeholder" displayed',
        'When we set it manually in the .css/.scss file',
        'The ":placeholder-shown" pseudo-class fires when the "input" or "textarea" element has its "placeholder" hidden',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'How is the "height" property value calculated for block elements?',
      variants: [
        'Depending on the height of this elements content',
        'Depending on the parameters we set (It is advisable to always set it in pixels, for easy transfer of layout to the content management system of the site, like Wordpress)',
        'Depending on the height of the body of the child element of the p selector',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Can we give the "span" tag a height/width',
      variants: [
        'We can if we change its "display" to "inline-block"',
        'Can not',
        'We can if we change its "display" to "block"',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'What is the difference between "display: flex" and "display: grid"',
      variants: [
        'Flexbox is 1D layouts, Grid is 2D',
        'Flexbox is 2D layouts, Grid is 1D',
        'Flexbox is 3D layouts, Grid is power grid',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'What is the height of the element with "position: absolute"',
      variants: ['0', 'Element content + padding', 'Element content'],
      correct: 0,
    },
    {
      id: 1010,
      title: 'How can I place a block in the center of another block?',
      variants: [
        'px, vh, vw, rem, em',
        'Its impossible to remember!',
        'Flexbox, margin, grid if inline: text-align',
      ],
      correct: 2,
    },
  ],
  [
    {
      id: 1001,
      title: 'JS is ... ?',
      variants: ['Programming language', 'Framework', 'Application'],
      correct: 0,
    },
    {
      id: 1002,
      title: 'Whats the difference between "null" and "undefined"?',
      variants: [
        '"null" represents the default value: a variable that has not been assigned a value, a function that does not explicitly return anything, a nonexistent object property. "undefined" is a value that is explicitly assigned to a variable',
        '"undefined" is the default value: a variable that hasnt been assigned a value, a function that doesnt explicitly return anything, a nonexistent object property. "null" is a value that is explicitly assigned to a variable',
        'In the name',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title:
        'What is the difference between "event.preventDefault()" and "event.stopPropagation()" methods?',
      variants: [
        'The "event.stopPropagation()" method disables the elements default behavior. "event.preventDefault()" disables event propagation (bubbling or sinking)',
        'The "event.preventDefault()" method enables the elements default behavior. "event.stopPropagation()" enables event propagation (bubbling or sinking)',
        'The "event.preventDefault()" method disables the elements default behavior. "event.stopPropagation()" disables event propagation (bubbling or sinking)',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'What is the event target or target element (event.target)?',
      variants: [
        'The element where the event occurs or the element that triggered the event',
        'Parent element where the event occurs',
        'Child of the one in which the event occurs',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Whats the difference between the "==" and "===" operators?',
      variants: [
        '"==" compares values after they have been converted or cast to the same type (Coersion), while "===" compares without such a conversion.',
        '"==" compares values before conversion to the same type (Coersion), and "===" compares values after such conversion.',
        '"==" compares values during conversion to the same type (Coersion), and "===" after such conversion.',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'What is the "!!!" operator used for?',
      variants: [
        'The "!!" operator (double negation) casts the value to its right to a boolean',
        'The "!!" operator (double negation) converts the value to its right to its opposite value',
        'The "!!" operator (double negation) doubles the value to its right',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'What are scopes?',
      variants: [
        'Rare, Medium, Well Done',
        'Small, medium and large',
        'Global, functional and block',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Whats the difference between "var" and "let" and "const"?',
      variants: [
        '"const", "let" – respect block scope const in turn, immutable. "var" – ignore block scope',
        '"const", "let" – respect the global scope const in turn, immutable. "var" – respect block scope',
        '"const", "let" – respect block scope const in turn, mutable. "var" – ignore block scope',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'What data types are in JavaScript?',
      variants: [
        'null, undefined, boolean, number, string, object, symbol',
        'var, let, const',
        'Tuples, Dictionaries, Lists, Sets',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'REACTJS is ... ?',
      variants: ['library', 'framework', 'application'],
      correct: 0,
    },
    {
      id: 1002,
      title: 'A component is... ',
      variants: ['application', 'part of an application or page', 'what I dont know what is'],
      correct: 1,
    },
    {
      id: 1003,
      title: 'What is JSX?',
      variants: [
        'This is plain HTML',
        'This is a function',
        'This is the same HTML, but with the ability to execute JS code',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Why is the "useState" hook necessary?',
      variants: [
        'To determine the state and update it',
        'Determines the statistics of the passed object',
        'Java Script function that executes an asynchronous request',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'What approach do we use when building ReactJS apps?',
      variants: ['Single page application', 'Multi page application', 'Mega page application'],
      correct: 0,
    },
    {
      id: 1006,
      title: 'What are Hooks in ReactJS?',
      variants: [
        'Mechanism in React that allows you to work completely without classes',
        'A mechanism in React that allows you to create object classes to modify them',
        'A mechanism in React that allows you to work with site navigation paths',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Component approach is ... ?',
      variants: [
        'A way to organize an application as a single component',
        'Method of organizing methods of class programming',
        'A way to organize an application as a hierarchy of components',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Virtual DOM is ... ?',
      variants: [
        'This is a programming concept in which an ideal or "virtual" representation of the user interface is stored in memory and synchronized with the "real" DOM using a library such as ReactDOM',
        'Our representation of the DOM and its tree structure',
        'This is a programming concept in which the ideal or "virtual" representation of the user interface is not stored in memory and works directly with the user using a library such as ReactDOM',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'What is the difference between VirtualDOM and DOM?',
      variants: [
        'Unlike DOM, Virtual DOM is not an official specification, but a new method of interacting with the DOM that allows you to update only changed nodes of the DOM tree, rather than redrawing the entire page',
        'Unlike DOM, Virtual DOM is an official specification, but a new method of interacting with the DOM that allows you to update the entire page without affecting every node of the DOM tree pointwise',
        'Inscription "Virtual"',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'GIT is ... ?',
      variants: [
        'It is an advanced version control system with active support and open source',
        'Framework',
        'Application',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'What is a Git repository?',
      variants: [
        'Local storage in browser',
        'The location where all Git files are stored either in a local or remote/central repository',
        'Main Git site with news and updates about the system',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title: 'What are file states in Git?',
      variants: [
        'Waiting, prepared, sent',
        'Waiting, prepared, fixed',
        'Changed, prepared, committed',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'What is the purpose of the "git init" command?',
      variants: [
        'Initializes a new project "Git" and creates a local folder ".git" in the project directory',
        'Initializes a new project "Github" and creates a local folder ".github" in the project directory',
        'Installs "Git", globally',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'What happens after a commit is made?',
      variants: [
        'Snapshots of intermediate files are added to the repository and the state of the project is saved',
        'Snapshots of intermediate files are added to the remote repository and the state of the project is saved',
        'Removing unadded files and pushing added files to remote repository',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Do I need to push commits to the server to complete a Git workflow?',
      variants: ['No', 'Yes', 'Not always'],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Does Git resolve conflicts automatically?',
      variants: ['Yes', 'Not sure', 'No'],
      correct: 2,
    },
    {
      id: 1008,
      title: 'What Language Does Git Use?',
      variants: [
        'Git uses the “C” language',
        'Git uses the language “Python”',
        'Git uses the language "CSS"',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Git branches are...',
      variants: [
        'Git branches are a pointer to a snapshot of changes. If you need to add a new feature or fix a bug (minor or major), you create a new branch to host those changes',
        'Small lateral shoot, shoot of a tree, shrub or herbaceous plant',
        'A separate file for jun, so that he doesnt break anything',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'TYPE SCRIPT is ... ?',
      variants: [
        'A programming language that fixes many of the shortcomings of JavaScript. The TypeScript code looks almost the same as the JS code',
        'Framework',
        'Library',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'What are the main features of TypeScript?',
      variants: [
        'Reliable Database, pip package manager',
        'Cross-platform, static typing, optional static typing, DOM manipulation',
        'Cross-platform, mandatory static typing, OOP support, DOM manipulation',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title: 'What are the benefits of using TypeScript?',
      variants: [
        'JS top for your money',
        'High speed, relative simplicity, required when creating dynamic content on the page',
        'Brings order to the code, makes it easier to find bugs, the ability to use it both on client projects and on server ones',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'What data types are built into TypeScript?',
      variants: [
        'Number, String, Boolean, Null, Undefined, Void',
        'Tuples, Dictionaries, Lists, Sets',
        'Var, let, const',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'What is a module in TypeScript?',
      variants: [
        'A set of related variables, functions, classes and interfaces',
        'A set of unrelated variables, functions, classes and interfaces',
        'Design element associated with html parallax effect',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'How to make all interface properties optional?',
      variants: ['Use type "Partial"', 'Comment them out', 'Remove interface'],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Does TypeScript support all OOP principles?',
      variants: ['No', 'Not all', 'Yes'],
      correct: 2,
    },
    {
      id: 1008,
      title: 'What are .map files in TypeScript?',
      variants: [
        'These are map files that allow tools to match the released JavaScript code to the TypeScript source files that created it',
        'These are map texts that allow tools to match the released JavaScript code to the TypeScript source files that created it',
        'These are map schemas that allow tools to match the released JavaScript code to the TypeScript source files that created it',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'What is the difference between "interface" and "type" keywords in TypeScript',
      variants: [
        'Interface can only describe the type of an object, and a type can describe primitive values. Despite this, the interface has advantages',
        'A type can only describe the type of an object, while an interface can describe primitive values. Despite this, the type has advantages',
        'Only Type',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'BUNDLER is... ?',
      variants: [
        'This is a tool for automating the routine tasks that come with web development',
        'Framework',
        'Library',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'What is WebPack?',
      variants: [
        'A build system with few variants. In particular, it is only used for layout and optimization of ".html" files',
        'A build system with tons of possibilities. In particular, it parses JS code (as well as CSS or otherwise, through loaders), this gives it superpowers',
        'POWER',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title: 'What is Gulp?',
      variants: [
        'Swallowing movement',
        'A system for organizing code that itself supports assembly',
        'A general system for organizing tasks that does not support the assembly itself, but it can be written on it using plugins',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Why is the Collector needed?',
      variants: [
        'Helps automate the process of creating websites',
        'Make you a cool Developer',
        'Helps automate file creation processes',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'What faucets are there? (Name) ',
      variants: [
        'Grunt, Webpack, Gulp, Feri',
        'Python, C#, Java, Mojo',
        'Grant, Webpuck, Galp, Fery',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'How to install the Collector?',
      variants: ['Use package manager "Yarn" or "Npm"', 'Download from Internet', 'Use "cdn" link'],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Which of these things can the Collector do?',
      variants: [
        'If the link to the image is incorrect, find and substitute another one',
        'Write code snippet',
        'Optimize your CSS, HTML, JS',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Why do we need Webpack in React?',
      variants: [
        'Webpack allows you to comfortably create applications in a modular structure, it collects all modules into one bundle and minifies it',
        'Webpack allows you to conveniently create applications in a modular structure, it sorts all the components and minifies them',
        'Not needed',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Is it possible to compile "Type Script" code to js using "WebPack?"',
      variants: ['Yes', 'No', 'Sometimes'],
      correct: 0,
    },
  ],
];

export default AllQuestionENG;
