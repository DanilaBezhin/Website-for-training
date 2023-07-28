import './swiper.css';
import Slide from '../../data/Slide';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const SwiperNew = ({ language }) => {
  const onClickStart = (e) => {
    const target = e.target;
    const elementList = target.nextSibling.children;
    const targetBlock = target.closest('.swiper__img');
    const BlockList = document.querySelectorAll('.swiper__img');

    target.classList.add('swiper__title-color');

    let second = 200;
    for (let i = 0; i < elementList.length; i += 1) {
      setTimeout(() => {
        elementList[i].style.opacity = '1';
      }, second);
      second += 100;
    }

    for (let i = 0; i < BlockList.length; i += 1) {
      if (BlockList[i] === targetBlock) {
        BlockList[i].classList.add('ban-block');
      }
    }

    setTimeout(function () {
      targetBlock.classList.add('active-1');
    }, 2500);

    setTimeout(function () {
      //находим нужные элементы (для анимации переворота карточки)
      const textInBlock = targetBlock.querySelector('.swiper__start-learning');
      const imgInBlock = targetBlock.querySelector('.swiper__img-core');
      const textInBlockMain = targetBlock.querySelector('.swiper__title-hidden');
      const textActiveBlock = targetBlock.querySelector('.swiper__title-back-txt');

      //удаляем текст "start leaning" и название
      textInBlock.remove();
      textInBlockMain.classList.remove('swiper__title');
      textInBlockMain.classList.add('swiper__title-back');

      //убираем картинку
      imgInBlock.classList.add('img-active');

      //показываем текст на обратной стороне карточки
      textActiveBlock.classList.add('open-txt-title');
      //до разворачиваем карточку
      targetBlock.classList.add('active-2');
    }, 3000);
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1 },
        890: { slidesPerView: 2 },
        1300: { slidesPerView: 3 },
        1420: { slidesPerView: 4 },
      }}>
      {Slide.map((element, i) => {
        return (
          <SwiperSlide key={element.id}>
            <div className="swiper__img" style={{ backgroundColor: `${element.bgColor}` }}>
              <div
                className={`swiper__img-core swiper__img-core-${i + 1}`}
                style={{ backgroundImage: `url(${element.bgImg})` }}></div>
              <p className="swiper__title-back-txt">{language ? element.txtEng : element.txtRu}</p>
              <p className="swiper__title swiper__title-hidden" onClick={onClickStart}>
                {element.title}
              </p>
              <p className="swiper__start-learning">
                <span className="swiper_span">s</span>
                <span className="swiper_span">t</span>
                <span className="swiper_span">a</span>
                <span className="swiper_span">r</span>
                <span className="swiper_span">t</span>
                <span className="swiper_span"> </span>
                <span className="swiper_span">l</span>
                <span className="swiper_span">e</span>
                <span className="swiper_span">a</span>
                <span className="swiper_span">r</span>
                <span className="swiper_span">n</span>
                <span className="swiper_span">i</span>
                <span className="swiper_span">n</span>
                <span className="swiper_span">g</span>
                <span className="swiper_span">.</span>
                <span className="swiper_span">.</span>
                <span className="swiper_span">.</span>
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperNew;
