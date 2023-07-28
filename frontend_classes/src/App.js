import { useState } from 'react';
import Header from './components/header/Header';
import Swiper from './components/swiper/SwiperNew';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import FooterTwo from './components/footer-two/Footer-two';
import Preload from './components/preload/Preload';
import './app.css';

function App() {
  const [language, setLanguage] = useState(true);

  return (
    <div className="App">
      <Preload language={language} setLanguage={setLanguage} />

      <div className="App__wrapper">
        <Header language={language} setLanguage={setLanguage} />
        <Swiper language={language} />
      </div>

      <Main language={language} />
      <Footer language={language} />
      <FooterTwo language={language} />
    </div>
  );
}

export default App;
