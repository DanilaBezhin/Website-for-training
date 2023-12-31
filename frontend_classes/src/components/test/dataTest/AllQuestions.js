const AllQuestion = [
  [
    {
      id: 1001,
      title: 'HTML - это ... ?',
      variants: [
        'Язык гипертекстовой разметки текста',
        'Язык программирования для браузера',
        'Язык минитекстовой разметки текста',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'DOM-дерево - расшифровывается как ... ',
      variants: ['Document Obwohl Model', 'Document Object Model', 'Document Object Mood'],
      correct: 1,
    },
    {
      id: 1003,
      title: 'Какая разница между элементами div и span?',
      variants: [
        'div является блочным элементов, а тег span примыкающим',
        'div является строковым элементов, а тег span – блочным',
        'div является блочным элементов, а тег span – строковым',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Что такое мета теги?',
      variants: [
        'Специальные элементы кода, через которые браузер и поисковые машины считывают информацию о сайте',
        'Специальные элементы кода, блокирующие сторонние поисковые машины',
        'Специальные элементы кода, расширяющий функционал сайта и позволяющий работать на прямую с БД',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Разница между cookie, sessionStorage и localStorage?',
      variants: [
        'В объеме данных который могут хранить localStorage > sessionStorage > cookie. Отличается и время хранения данных + Локальное и сессионное хранилище доступны только на клиентской стороне в отличии от Cookie',
        'В названии',
        'Печенье вкусное',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Как из тегов ниже, являются одиночными?',
      variants: [
        '<br/>, <img/> <meta/> <hr/> <input/>',
        '<div/>, <col/> <area/> <source/> <wbr/>',
        '<span/>, <area/> <embed/> <keygen/> <param/>',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Как написать комментарии в HTML-коде?',
      variants: ['/* Я комментарий */', '// Я комментарий', '<!-- Я комментарий -->'],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Что такое Image Map?',
      variants: [
        'Это технология, которая позволяет привязывать ссылки к фрагментам изображения',
        'Это технология, которая позволяет отслеживать и оптимизировать изображения на странице',
        'Это технология, которая позволяет удалять ненужные изображения по интересам пользователя',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Что такое Canvas?',
      variants: [
        'Элемент HTML5 canvas можно использовать для вставки изображений, градиентов и комплексной анимации',
        'Элемент HTML4 canvas можно использовать для вставки изображений, градиентов и комплексной анимации',
        'Элемент HTML5 canvas можно использовать для вставки изображений, гиф изображений и не комплексной анимации',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'CSS - это ... ?',
      variants: [
        'Формальный язык описания внешнего вида страницы',
        'Неформальный язык описания внешнего вида страницы',
        'Формальный язык программирования',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'CSS расшифровывается как ... ',
      variants: ['Cascading Stylish Set', 'Cascading Style Sheets', 'Cookies Super Sweet'],
      correct: 1,
    },
    {
      id: 1003,
      title:
        'Каким способом я могу установить свойство "opacity" для элемента "button", у которого есть атрибут "disabled"?',
      variants: [
        'Через селектор кнопки (class/id и тд)',
        'Через класс :disabled',
        'Через псевдо-класс :disabled',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Что такое псевдокласс :root?',
      variants: [
        'Псевдокласс, которые отбирает корневой элемент в дереве документа. В случае HTML документа это элемент html. В случае SVG документа это элемент svg',
        'Псевдокласс, которые отбирает корневой элемент в дереве документа. В случае HTML документа это элемент body. В случае SVG документа это элемент img',
        'Класс, которые отбирает корневой элемент в дереве документа. В случае HTML документа это элемент html. В случае SVG документа это элемент svg',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Как работает псевдокласс ":placeholder-shown"?',
      variants: [
        'Псевдокласс ":placeholder-shown" срабатывает, когда у элементов "input" или "textarea" отображается "placeholder"',
        'Когда мы задаем его в ручную в фале .css/.scss',
        'Псевдокласс ":placeholder-shown" срабатывает, когда у элементов "input" или "textarea" скрыт "placeholder"',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Как рассчитывается значение свойства "height" у блочных элементов?',
      variants: [
        'В зависимости от высоты содержимого этого элемента',
        'В зависимости от установленных нами параметров (Желательно всегда устанавливать в пикселях, для удобного переноса верстки на систему управления контентом сайта, по типу Wordpress)',
        'В зависимости от высоты body дочернего элемента селектора p',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Можем ли мы задать тегу "span", высоту/ширину',
      variants: [
        'Можем, если изменить его "display" на "inline-block"',
        'Не можем',
        'Можем, если изменить его "display" на "block"',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Чем отличается "display: flex" от "display: grid"',
      variants: [
        'Flexbox это одномерные макеты, а Grid это двумерные',
        'Flexbox это двумерные макеты, а Grid это одномерные',
        'Flexbox это трехмерные макеты, а Grid это энергосистема',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Чему равняется высота элемента с "position: absolute"',
      variants: ['0', 'Содержимому элемента + отступам', 'Содержимому элемента'],
      correct: 0,
    },
    {
      id: 1010,
      title: 'С помощью чего можно разместить блок в центре другого блока?',
      variants: [
        'px, vh, vw, rem, em',
        'Это не возможно запомнить!',
        'Flexbox, margin, grid, если inline: text-align',
      ],
      correct: 2,
    },
  ],
  [
    {
      id: 1001,
      title: 'JS - это ... ?',
      variants: ['Язык программирования', 'Фреймворк', 'Приложение'],
      correct: 0,
    },
    {
      id: 1002,
      title: 'В чем разница между "null" и "undefined"?',
      variants: [
        '"null" представляет собой значение по умолчанию: переменной, которой не было присвоено значения, функции, которая ничего не возвращает явно, несуществующего свойства объекта. "undefined" — это значение, которое присваивается переменной явно',
        '"undefined" представляет собой значение по умолчанию: переменной, которой не было присвоено значения, функции, которая ничего не возвращает явно, несуществующего свойства объекта. "null" — это значение, которое присваивается переменной явно',
        'В названии',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title: 'В чем разница между методами "event.preventDefault()" и "event.stopPropagation()"?',
      variants: [
        'Метод "event.stopPropagation()" отключает поведение элемента по умолчанию. "event.preventDefault()" отключает распространение события (его всплытие или погружение)',
        'Метод "event.preventDefault()" включает поведение элемента по умолчанию. "event.stopPropagation()" включает распространение события (его всплытие или погружение)',
        'Метод "event.preventDefault()" отключает поведение элемента по умолчанию. "event.stopPropagation()" отключает распространение события (его всплытие или погружение)',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Что такое цель события или целевой элемент (event.target)?',
      variants: [
        'Элемент, в котором происходит событие, или элемент, вызвавший событие',
        'Родительский элемент, того в котором происходит событие',
        'Дочерний элемент, того в котором происходит событие',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'В чем разница между операторами "==" и "==="?',
      variants: [
        '"==" сравнивает значения после их преобразования или приведения к одному типу (Coersion), а "===" — без такого преобразования.',
        '"==" сравнивает значения перед преобразования к одному типу (Coersion), а "===" — после такого преобразования.',
        '"==" сравнивает значения во время преобразования к одному типу (Coersion), а "===" — после такого преобразования.',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Для чего используется оператор "!!"?',
      variants: [
        'Оператор "!!" (двойное отрицание) приводит значение справа от него к логическому значению',
        'Оператор "!!" (двойное отрицание) приводит значение справа от него к противоположному значению',
        'Оператор "!!" (двойное отрицание) приводит значение справа от него к двойному значению',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Какие есть области видимости (Scope)?',
      variants: [
        'Rare, Medium, Well Done',
        'Маленькая, средняя и большая',
        'Глобальная, функциональная и блочная',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Чем отличается "var" от "let" и "const"?',
      variants: [
        '"const", "let" – соблюдают блочную область видимости const в свою очередь, неизменяемая. "var" – игнорирует блочную область видимости',
        '"const", "let" – соблюдают глобальную область видимости const в свою очередь, неизменяемая. "var" – соблюдает блочную область видимости',
        '"const", "let" – соблюдают блочную область видимости const в свою очередь, изменяемая. "var" – игнорирует блочную область видимости',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Какие типы данных присутствуют в JavaScript?',
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
      title: 'REACT JS - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      id: 1002,
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      id: 1003,
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Зачем нужен хук "useState" ?',
      variants: [
        'Для определения состояния и его обновления',
        'Определяет статистику переданного объекта',
        'Функция Java Script выполняющая асинхронный запрос',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Какой подход мы используем, при создании приложений в ReactJS?',
      variants: ['Single page application', 'Multi page application', 'Mega page application'],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Что такое Хуки в ReactJS?',
      variants: [
        'Механизм в React, который позволяет работать полностью без классов',
        'Механизм в React, который позволяет создавать классы объектов для их изменения',
        'Механизм в React, который позволяет работать с путями перемещения по сайту',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Компонентный подход это - ... ?',
      variants: [
        'Способ организации приложения в виде одного компонента',
        'Способ организации методов классового программирования',
        'Способ организации приложения в виде иерархии компонентов',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Виртуальный DOM это - ... ?',
      variants: [
        'Это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса хранится в памяти и синхронизируется с «настоящим» DOM при помощи библиотеки, такой как ReactDOM',
        'Наше представление DOM и его древовидной структуры',
        'Это концепция программирования, в которой идеальное или «виртуальное» представление пользовательского интерфейса не хранится в памяти и работает напрямую с пользователем при помощи библиотеки, такой как ReactDOM',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'В чем отличия VirtualDOM от DOM?',
      variants: [
        'В отличие от DOM, Virtual DOM не является официальной спецификацией, а представляет собой новый метод взаимодействия с DOM, позволяющий обновлять только изменившиеся узлы DOM-дерева, а не перерисовывать всю страницу',
        'В отличие от DOM, Virtual DOM является официальной спецификацией, а представляет собой новый метод взаимодействия с DOM, позволяющий обновлять всю страницу без точечного воздействия на каждый узел DOM-дерева',
        'Надпись "Virtual"',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'GIT - это ... ?',
      variants: [
        'Это развитая система контроля версий с активной поддержкой и открытым исходным кодом',
        'Фреймворк',
        'Приложение',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'Что такое репозиторий Git?',
      variants: [
        'Локальное хранилище в браузере',
        'Место, где все файлы Git хранятся либо в локальном, либо в удаленном/центральном репозитории',
        'Главный сайт Git с новостями и обновлениями о системе',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title: 'Каковы состояния файла в Git?',
      variants: [
        'Ожидание, подготовлено, отправлено',
        'Ожидание, подготовлено, зафиксировано',
        'Изменено, подготовлено, зафиксировано',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Какова цель команды "git init"?',
      variants: [
        'Инициализирует новый проект "Git" и создает локальную папку ".git" в каталоге проекта',
        'Инициализирует новый проект "Github" и создает локальную папку ".github" в каталоге проекта',
        'Устанавливает "Git", глобально',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Что происходит после создания коммита?',
      variants: [
        'Снимки промежуточных файлов добавляются в репозиторий, а состояние проекта сохраняется',
        'Снимки промежуточных файлов добавляются в удаленный репозиторий, а состояние проекта сохраняется',
        'Удаление не добавленных файлов, и отправка добавленных на удаленный репозиторий',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Нужно ли отправлять коммиты на сервер для завершения рабочего процесса Git?',
      variants: ['Нет', 'Да', 'Не всегда'],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Разрешает ли Git конфликты автоматически?',
      variants: ['Да', 'Не уверен', 'Нет'],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Какой Язык Используется в Git?',
      variants: [
        'Git использует язык “C”',
        'Git использует язык “Python”',
        'Git использует язык “CSS”',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Git ветки - это ...',
      variants: [
        'Ветки в Git представляют собой указатель на снимок изменений. Если нужно добавить новую возможность или исправить ошибку (незначительную или серьезную), вы создаете новую ветку, в которой будут размещаться эти изменения',
        'Небольшой боковой отросток, побег дерева, кустарника или травянистого растения',
        'Отдельный файл, для джуна, что бы он ничего не сломал',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'TYPE SCRIPT - это ... ?',
      variants: [
        'Язык программирования, в котором исправлены многие недостатки JavaScript. Код на TypeScript выглядит почти так же, как и код на JS',
        'Фреймворк',
        'Библиотека',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'Каковы основные особенности TypeScript?',
      variants: [
        'Надежная База Данных, пакетный менеджер pip',
        'Кроссплатформенность, статическая типизация, необязательная статическая типизация, манипуляции с DOM',
        'Кроссплатформенность, обязательная статическая типизация, поддержка ООП, манипуляции с DOM',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title: 'В чем преимущества использования TypeScript?',
      variants: [
        'JS топ за свои деньги',
        'Высокая скорость работы, относительная простота, обязателен при создании динамического контента на странице',
        'Вносит порядок в код, упрощает нахождение багов, возможность использовать, как на клиентских проектах так и на серверных',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Какие типы данных встроены в TypeScript?',
      variants: [
        'Number, String, Boolean, Null, Undefined, Void',
        'Tuples, Dictionaries, Lists, Sets',
        'Var, let, const',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Что такое модуль в TypeScript?',
      variants: [
        'Набор связанных переменных, функций, классов и интерфейсов',
        'Набор не связанных переменных, функций, классов и интерфейсов',
        'Элемент разработки связанный с html parallax effect',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Как сделать все свойства интерфейса необязательными?',
      variants: ['Использовать тип "Partial"', 'Закомментировать их', 'Удалить интерфейс'],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Поддерживает ли TypeScript все принципы ООП?',
      variants: ['Нет', 'Не все', 'Да'],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Что представляют собой .map-файлы в TypeScript?',
      variants: [
        'Это файлы карты, которые позволяют инструментам сопоставлять выпущенный код JavaScript и исходные файлы TypeScript, которые его создали',
        'Это тексты карты, которые позволяют инструментам сопоставлять выпущенный код JavaScript и исходные файлы TypeScript, которые его создали',
        'Это схемы карты, которые позволяют инструментам сопоставлять выпущенный код JavaScript и исходные файлы TypeScript, которые его создали',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Чем различаются ключевые слова "interface" и "type" в TypeScript',
      variants: [
        'Интерфейсом можно описать только тип объекта, а типом можно описать примитивные значения. Не смотря на это у интерфейса есть преимущества',
        'Типом можно описать только тип объекта, а интерфейсом можно описать примитивные значения. Не смотря на это у типа есть преимущества',
        'Only Type',
      ],
      correct: 0,
    },
  ],
  [
    {
      id: 1001,
      title: 'BUNDLER - это ... ?',
      variants: [
        'Это инструмент для автоматизации рутинных задач, которые возникают при веб-разработке',
        'Фреймворк',
        'Библиотека',
      ],
      correct: 0,
    },
    {
      id: 1002,
      title: 'Что такое WebPack?',
      variants: [
        'Система сборки с небольшим количеством возможностей. В частности используется только для верстки и оптимизации ".html" файлов',
        'Система сборки с массой возможностей. В частности, он анализирует JS-код (а также CSS или иной, через лоадеры), это даёт ему superpowers',
        'POWER',
      ],
      correct: 1,
    },
    {
      id: 1003,
      title: 'Что такое Gulp?',
      variants: [
        'Глотательное движение',
        'Система для организации кода, которая сама по себе поддерживает сборку',
        'Общая система для организации задач, которая сама по себе сборку не поддерживает, но её можно на ней написать, с помощью плагинов',
      ],
      correct: 2,
    },
    {
      id: 1004,
      title: 'Зачем нужен Сборщик?',
      variants: [
        'Поможет автоматизировать процесс создания веб-сайтов',
        'Сделает тебя крутым Разработчиком',
        'Поможет автоматизировать процессы создания файлов',
      ],
      correct: 0,
    },
    {
      id: 1005,
      title: 'Какие сборщики существуют? (название) ',
      variants: [
        'Grunt, Webpack, Gulp, Feri',
        'Python, C#, Java, Mojo',
        'Grant, Webpuck, Galp, Fery',
      ],
      correct: 0,
    },
    {
      id: 1006,
      title: 'Как установить Сборщик?',
      variants: [
        'Использовать пакетный менажер "Yarn" или "Npm"',
        'Скачать из интернета',
        'Использовать "cdn" ссылку',
      ],
      correct: 0,
    },
    {
      id: 1007,
      title: 'Что из этого, может сделать Сборщик?',
      variants: [
        'При неверной ссылки на изображение, найти и подставит другое',
        'Написать фрагмент кода',
        'Оптимизировать ваш CSS, HTML, JS',
      ],
      correct: 2,
    },
    {
      id: 1008,
      title: 'Зачем нужен Webpack в React?',
      variants: [
        'Webpack позволяет комфортно создавать приложения по модульной структуре, он собирает все модули в один бандл и минифицирует его',
        'Webpack позволяет комфортно создавать приложения по модульной структуре, он сортирует все компоненты и минифицирует их',
        'Не нужен',
      ],
      correct: 0,
    },
    {
      id: 1009,
      title: 'Можно ли компилировать "Type Script" код в js с помощью "WebPack?"',
      variants: ['Да', 'Нет', 'Иногда'],
      correct: 0,
    },
  ],
];

export default AllQuestion;
