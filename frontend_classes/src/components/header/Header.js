import './header.css';

const Header = ({ language, setLanguage }) => {
  const onClickLanguage = (props) => {
    setLanguage(props);
    localStorage.setItem('language', props);
  };

  const onClickLearning = () => {
    const el = document.getElementById('main_container');
    el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="header container">
      <div className="header__language glow-on-hover">
        <span className="header__RU" onClick={() => onClickLanguage(false)}>
          RU
        </span>
        |
        <span className="header__ENG" onClick={() => onClickLanguage(true)}>
          {' '}
          ENG
        </span>
      </div>

      <div className="header__wrap-pre-title">
        {/* <hr/> */}
        <p className="header__pre-title">
          {language ? 'Learn, live in your free time' : 'Учись, живи в свободное время'}
        </p>
      </div>

      <h1 className="header__title">
        {language ? 'Master Modern Web Development' : 'Мастер современной веб-разработки'}
      </h1>
      <p className="header__main-txt">
        {language
          ? 'Welcome to the ultimate learning site dedicated to the art of interface development.Expand your skills in JavaScript, ReactJS, CSS, HTML, TypeScript, and Git. Dive into the world of interactive web applications and create unique, stylish interfaces.'
          : 'Добро пожаловать на лучший обучающий сайт, посвященный искусству разработки интерфейсов. Расширьте свои навыки в JavaScript, ReactJS, CSS, HTML, TypeScript и Git. Погрузитесь в мир интерактивных веб-приложений и создайте уникальные стильные интерфейсы.'}
      </p>
      <div className="header__btn-wrapper">
        <a
          className="header__btn header__btn-left"
          rel="noreferrer"
          href="https://github.com/DanilaBezhin"
          target="_blank">
          <i className="fa-brands fa-github fa-lg"></i>
          <span className="header_text-btn">
            {language ? 'My page on github' : 'Моя страница GitHub'}
          </span>
        </a>
        <div
          className="header__btn header__btn-right"
          onClick={() => onClickLearning()}
          href="https://github.com/DanilaBezhin"
          target="_blank">
          <i className="fa-solid fa-circle-play fa-lg"></i>
          <span className="header_text-btn">{language ? 'Start learning' : 'Начать обучение'}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
