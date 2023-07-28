import './footer-two.css';
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";

const FooterTwo = ({language}) => {
    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, []);

    return (
        <div className='footer-two'>    
            <div className='footer-two__container first container'>
                <div data-aos="fade-down-right" data-aos-once={true} className='footer-two__col'>
                    <p>{language ? 'Courses' : 'Курсы'}</p>
                    <p>{language ? 'Basics' : 'Основы'}</p>
                    <p>{language ? 'ReactJS' : 'ReactJS'}</p>
                    <p>{language ? 'CSS' : 'CSS'}</p>
                </div>

                <div data-aos="fade-down" data-aos-once={true} className='footer-two__col'>
                    <p>{language ? 'Resources' : 'Ресурсы'}</p>
                    <p>{language ? 'Blog' : 'Блог'}</p>
                    <p>{language ? 'Tutorial' : 'Учебники'}</p>
                    <p>{language ? 'Glossary' : 'Словарь'}</p>
                </div>

                <div data-aos="fade-down-left" data-aos-once={true} className='footer-two__col'>
                    <p>{language ? 'Support' : 'Поддержка'}</p>
                    <p>{language ? 'Contacts' : 'Контакты'}</p>
                    <p>{language ? 'FAQ' : 'FAQ'}</p>
                    <p>{language ? 'Community' : 'Сообщество'}</p>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-once={true} className='footer-two__container second container'>
                <div className='footer-two__icon'>
                    <i className="fa-brands fa-vk"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-telegram"></i>
                    <i className="fa-brands fa-discord"></i>
                </div>
                <p>{language ? '© 2023 Interface Mastery' : '© 2023 Мастерство web интерфейса'}</p>
            </div>
        </div>
    );
}
 
export default FooterTwo;