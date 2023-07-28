import './preload.css';

const Preload = ({ language, setLanguage }) => {
  let preloader = document.getElementById('preloader');
  let body = document.querySelector('body');

  window.addEventListener('load', function () {
    let LocalLang = localStorage.getItem('language');
    setLanguage(JSON.parse(LocalLang) === true);

    preloader = document.getElementById('preloader');
    setTimeout(function () {
      preloader.classList.add('hide-preloader');
      body.classList.add('no_preloader');
    }, 200);
  });

  return (
    <div id="preloader">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>{language ? 'Loading' : 'Загрузка'}</span>
      </div>
    </div>
  );
};

export default Preload;
