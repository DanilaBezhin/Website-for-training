import { NavLink } from 'react-router-dom';
import './task.css';

const Task = ({ language, DataPractice, DataTask }) => {
  return (
    <div>
      <p className="main__breadcrumbs main__breadcrumbs-test">
        /
        <NavLink className="main__breadcrumbs-item" to="/">
          {language ? ' Home' : ' Главная '}{' '}
        </NavLink>
        /
        <NavLink className="main__breadcrumbs-item" to="/practice">
          {' '}
          {language ? ' Practice' : ' Практика'}{' '}
        </NavLink>
        /
        <NavLink className="main__breadcrumbs-item" to="/tests/html">
          {' '}
          {DataPractice.title}
        </NavLink>
      </p>
      <div className="TestHtml task">
        <h2>{language ? ` Task in ${DataPractice.title}` : ` Задачи по ${DataPractice.title}`}</h2>
        {language
          ? DataTask.titleENG.map((el, i) => (
              <p>
                <span>{i + 1}. </span>
                {el}
              </p>
            ))
          : DataTask.title.map((el, i) => (
              <p>
                <span>{i + 1}. </span>
                {el}
              </p>
            ))}
      </div>
    </div>
  );
};

export default Task;
