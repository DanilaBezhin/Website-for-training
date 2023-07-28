import DataPractice from '../../data/DataPractice';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../search/Search';

const Practice = ({ language }) => {
  const [searchValueLearning, setSearchValueLearning] = useState('');

  const onChangeSearchValue = (event) => {
    setSearchValueLearning(event.target.value);
  };

  return (
    <div className="main__wrapper">
      <p className="main__breadcrumbs main__breadcrumbs-search">
        /
        <NavLink className="main__breadcrumbs-item main__breadcrumbs-item-search" to="/">
          {' '}
          {language ? ' Home' : ' Главная '}
        </NavLink>{' '}
        /
        <NavLink className="main__breadcrumbs-item main__breadcrumbs-item-search" to="/practice">
          {' '}
          {language ? ' Practice' : ' Практика '}
        </NavLink>
        <Search
          language={language}
          searchValue={searchValueLearning}
          onChangeSearchValue={onChangeSearchValue}
        />
      </p>
      {DataPractice.filter((obj) => {
        return obj.title.toLowerCase().includes(searchValueLearning.toLowerCase());
      }).map((obj) => (
        <div key={obj.id} className="main__block" style={{ backgroundImage: `url(${obj.bgImg})` }}>
          <NavLink className="main__link" to={obj.link}>
            {obj.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Practice;
