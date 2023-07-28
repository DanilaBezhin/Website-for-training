import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navigation = ({ collections, language }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="main__wrapper">
      <p className="main__breadcrumbs main__breadcrumbs-navigation">
        /{' '}
        <NavLink className="main__breadcrumbs-item" to="/">
          {language ? 'Home' : 'Главная'}
        </NavLink>
      </p>

      {collections.map((obj) => (
        <div key={obj.id} className="main__block" style={{ backgroundImage: `url(${obj.bgImg})` }}>
          <NavLink className="main__link" to={obj.link}>
            {language ? obj.title : obj.titleRU}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
