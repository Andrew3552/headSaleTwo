import Container from '../WrapperList/Container';
import Liner from '../../assets/linerYellow.webp';
import BtnBanner from '../Bunner/BtnBanner/BtnBanner';

import './Study.scss';
export default function Study() {
  return (
    <div className="study">
      <Container>
        <div className="study__wrapper">
          <h2 className="study__title">Що ти зробиш протягом онлайн-курсу?</h2>
          <ul className="study__list">
            <li className="study__item">
              <img src={Liner} className="img__liner one" alt="study" />
              <p className="study__item_text">
                Опануєш <span className="gold_gradient span">4 професії</span> і вже під час навчання знайдеш свої перші
                проекти, замовлення і окупиш вартість навчання 
              </p>
            </li>
            <li className="study__item">
              <img src={Liner} className="img__liner two" alt="study" />
              <p className="study__item_text">
                Почнеш заробляти <span className="gold_gradient span">від 500$</span> в місяць, маючи під рукою лише
                телефон
              </p>
            </li>
            <li className="study__item">
              <p className="study__item_text">
                Створиш <span className="gold_gradient span">власний Телеграм-канал без вкладень</span>, навчишся
                переливати трафік і вийдеш на стабільний дохід
              </p>
            </li>
            <li className="study__item">
              <img src={Liner} className="img__liner three" alt="study" />
              <p className="study__item_text">
                Почнеш отримувати<span className="gold_gradient span">прибуток від 1000$</span> в місяць і будувати свою
                імперію
              </p>
            </li>
            <li className="study__item">
              <p className="study__item_text">
                <span className="gold_gradient span span">Інвестуєш в онлайн-бізнес</span> з середньою окупністю 9
                місяців і масштабуєш з моєю допомогою
              </p>
            </li>
            <li className="study__item">
              <img src={Liner} className="img__liner four" alt="study" />
              <p className="study__item_text">
                І вийдеш на <span className="gold_gradient span">пасивний дохід від 5000$</span> в місяць
              </p>
            </li>
          </ul>
          <BtnBanner buttonText="Зайняти місце" />
        </div>
      </Container>
    </div>
  );
}
