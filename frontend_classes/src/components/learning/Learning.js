import DataLearning from '../../data/DataLearning';
import { NavLink } from 'react-router-dom';
import Search from '../search/Search';
import { useState } from 'react';

const Learning = ({ language }) => {
  const [searchValueLearning, setSearchValueLearning] = useState('');

  const onChangeSearchValue = (event) => {
    setSearchValueLearning(event.target.value);
  };

  return (
    <div className="main__wrapper">
      <div className="main__breadcrumbs main__breadcrumbs-search">
        /
        <NavLink className="main__breadcrumbs-item main__breadcrumbs-item-search" to="/">
          {' '}
          {language ? ' Home' : ' Главная '}
        </NavLink>{' '}
        /
        <NavLink className="main__breadcrumbs-item main__breadcrumbs-item-search" to="/learning">
          {' '}
          {language ? ' Learning' : ' Обучение '}
        </NavLink>
        <Search
          language={language}
          searchValue={searchValueLearning}
          onChangeSearchValue={onChangeSearchValue}
        />
      </div>

      {DataLearning.filter((obj) => {
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

export default Learning;
