import './footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Modal from '../modal/Modal';

const Footer = ({ language }) => {
  const [modalActive, setModalActive] = useState('modal');
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  function onClickBtn() {
    let body = document.querySelector('body');
    setModalActive('modal active');
    body.classList.remove('no_preloader');
  }

  return (
    <div className="footer">
      <Modal modalActive={modalActive} setModalActive={setModalActive} language={language} />
      <div className="decor bg-decor"></div>
      <div className="decor bg-decor-two"></div>
      <div data-aos="fade-right" data-aos-once={true} className="footer__container container">
        <h2 className="footer__title">
          {language ? 'Ready, Set, Code!' : 'Приготовился, Настроился, Кооод!'}
        </h2>
        <p className="footer__txt">
          {language
            ? 'Embark on an exhilarating journey of self-discovery and skill building. Unleash your web development prowess and create unique, captivating online experiences. Are you ready to conquer the digital frontier?'
            : 'Отправляйтесь в увлекательное путешествие по самопознанию и развитию навыков. Раскройте свой потенциал в веб-разработке и создавайте уникальные, увлекательные онлайн-приложения. Готовы ли вы покорить цифровой рубеж?'}
        </p>
        <div className="footer__link" onClick={onClickBtn}>
          {language ? 'Join Now' : 'Присоединяйся сейчас'}
        </div>
      </div>
    </div>
  );
};

export default Footer;
