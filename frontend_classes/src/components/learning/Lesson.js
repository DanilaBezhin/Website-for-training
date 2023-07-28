import { NavLink } from 'react-router-dom';
import './learning.css';
import books from './dataLesson/books';
import sites from './dataLesson/sites';

const Lesson = ({ language, LessonDate, breads }) => {
  return (
    <>
      <div className="main__wrapper">
        <p className="main__breadcrumbs">
          /
          <NavLink className="main__breadcrumbs-item" to="/">
            {' '}
            {language ? ' Home' : ' Главная '}
          </NavLink>{' '}
          /
          <NavLink className="main__breadcrumbs-item" to="/learning">
            {' '}
            {language ? ' Learning ' : ' Обучение '}
          </NavLink>
          /
          <NavLink className="main__breadcrumbs-item" to="/learning/html">
            {' '}
            {breads}
          </NavLink>
        </p>
      </div>
      <div className="main__learning">
        <h2>{language ? 'Useful sources:' : 'Полезные источники:'}</h2>

        <div className="main__learning-flex-block">
          <div className="main__learning-first-col main__learning-col">
            <h3 className="main__learning-title-col">
              {language ? 'YouTube Channel' : 'YouTube Каналы'}
            </h3>
            {LessonDate.link.map((el, i) => (
              <p key={el}>
                <a href={el} rel="noreferrer" target="_blank">
                  {LessonDate.title[i]}
                </a>
              </p>
            ))}
          </div>
          <div className="main__learning-second-col main__learning-col">
            <h3 className="main__learning-title-col">{language ? 'Books' : 'Книги'}</h3>
            {books[0].title.map((el, i) => (
              <p key={i}>
                <a href={books[0].link[i]} rel="noreferrer" target="_blank">
                  {books[0].title[i]}
                </a>
              </p>
            ))}
          </div>
          <div className="main__learning-third-col main__learning-col">
            <h3 className="main__learning-title-col">{language ? 'Sites' : 'Сайты'}</h3>
            {sites[0].title.map((el, i) => (
              <p key={i}>
                <a href={sites[0].link[i]} rel="noreferrer" target="_blank">
                  {sites[0].title[i]}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson;
