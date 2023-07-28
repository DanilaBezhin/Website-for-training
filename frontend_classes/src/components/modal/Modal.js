import { useRef } from 'react';
import './modal.css';

// встроено в modal
const Modal = ({ modalActive, setModalActive, language }) => {
  const modal = useRef();

  function onClickModalWrap(event) {
    let body = document.querySelector('body');
    if (event.target === document.querySelector('.modal')) {
      setModalActive('modal');
      body.classList.add('no_preloader');
    }
  }

  return (
    <div ref={modal} className={modalActive} onClick={onClickModalWrap}>
      <div className="modal__wrap">
        <div className="modal__main-content">
          <div className="modal__core-item">
            <h2>{language ? "LET'S GO!" : 'ВПЕРЕД, ПРЯМО СЕЙЧАС!'}</h2>
            <div className="modal__form-email">
              <input className="c-checkbox" type="checkbox" id="checkbox" />
              <div className="c-formContainer">
                <form className="c-form" action="">
                  <input
                    className="c-form__input"
                    placeholder="E-mail"
                    type="email"
                    pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                    required
                  />
                  <label className="c-form__buttonLabel" htmlFor="checkbox">
                    <button className="c-form__button" type="button">
                      {language ? 'Send' : 'GO'}
                    </button>
                  </label>
                  <label
                    className="c-form__toggle"
                    htmlFor="checkbox"
                    data-title={language ? 'Apply' : 'Отправить'}></label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
