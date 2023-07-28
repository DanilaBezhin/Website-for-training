// import DataTests from "../../data/DataTests";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Search from '../search/Search';

const Tests = ({ language, DataTests }) => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="main__wrapper">
      <div className="main__breadcrumbs main__breadcrumbs-search">
        /
        <NavLink className="main__breadcrumbs-item main__breadcrumbs-item-search" to="/">
          {language ? ' Home' : ' Главная '}
        </NavLink>
        /
        <NavLink
          className="main__breadcrumbs-item main__breadcrumbs-item-search active"
          to="/tests">
          {language ? ' Tests' : ' Тесты'}
        </NavLink>
        <Search
          language={language}
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
        />
      </div>
      {DataTests.filter((obj) => {
        return obj.title.toLowerCase().includes(searchValue.toLowerCase());
      }).map((obj) => (
        <div key={obj.id} className="main__block" style={{ backgroundImage: `url(${obj.bgImg})` }}>
          <NavLink className="main__link" to={obj.linkPreTest}>
            {obj.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Tests;
