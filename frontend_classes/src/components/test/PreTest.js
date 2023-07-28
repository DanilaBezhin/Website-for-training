import { NavLink } from 'react-router-dom';

const PreTest = ({ title, questionsQ, link, language, imgTest }) => {
  return (
    <>
      <p className="main__breadcrumbs main__breadcrumbs-test">
        /
        <NavLink className="main__breadcrumbs-item" to="/">
          {language ? ' Home' : ' Главная '}{' '}
        </NavLink>
        /
        <NavLink className="main__breadcrumbs-item" to="/tests">
          {' '}
          {language ? ' Tests' : ' Тесты'}{' '}
        </NavLink>
        /
        <NavLink className="main__breadcrumbs-item" to="/tests/html">
          {' '}
          {title}
        </NavLink>
      </p>
      <div className="pretest">
        <img src={imgTest} alt="icon"></img>
        <h2>
          {title} {questionsQ.length} {language ? 'Questions' : 'Вопросов'}
        </h2>
        <NavLink className="pretest__link" to={link}>
          {language ? 'START' : 'НАЧАТЬ'}
        </NavLink>
      </div>
    </>
  );
};

export default PreTest;
