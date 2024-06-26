import { Link } from 'react-router-dom';

import Container from '../WrapperList/Container';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__container">
          <div className="footer__order">
            <div className="footer__center order">
              <h2 className="footer__title contact">Контакти</h2>
              <a className="link telegram" href="https://t.me/Trafic_Wolves_University" target="_blank">
                Telegram
              </a>
              <a
                className="link instagram"
                href="https://www.instagram.com/smirnovrostyslav/?igsh=MWdoNGw1aHpwN2FqZA%3D%3D"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <ul className="footer__list_contact order">
              <li>ФОП: Смірнов Ростислав Володимирович</li>
              <li>ЄДРПОУ: 2520518503</li>
              <li>IBAN: UA243220010000026005340067231 АТ «УНІВЕРСАЛ БАНК»</li>
              <li>info@tele-star.com.ua</li>
            </ul>
            <div className="order">
              <h2 className="footer__title">Документи</h2>
              <ul className="footer__list_info">
                <li>
                  <Link className='footer__link' to="/privacy-policy">Політика конфіденційності</Link>
                </li>
                <li>
                  <Link className='footer__link' to="/public-offer">Публічна оферта</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__footer">
            <p className="footer__demark">Traffic Wolves University</p>
            <p className="footer__mark">© All Rights Reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
