import Container from '../WrapperList/Container';

import Card from '../../assets/Overdraft/card.webp';
import cardMob from '../../assets/Overdraft/cardMob.png';
import Check from '../../assets/Overdraft/check.png';
import EllipseRight from '../../assets/Overdraft/EllipseRight.png';
import EllipseLeft from '../../assets/Overdraft/EllipseLeft.png';
import StarRight from '../../assets/Overdraft/StartRight.png';
import StarLeft from '../../assets/Overdraft/StartLeft.png';
import GrayTGMob1 from '../../assets/Overdraft/GrayTGMob1.png';
import GrayTGMob2 from '../../assets/Overdraft/GrayTGMob2.png';
import GrayTGMob3 from '../../assets/Overdraft/GrayTGMob3.png';
import './Overdraft.scss';

export default function Overdraft() {
  return (
    <div className="overdraft">
      <Container>
        <h2 className="overdraft__title">РОЗСТРОЧКА</h2>
        <div className="overdraft__wrapper">
          <div className="overdraft__wrapper-text">
            <p className="overdraft__wrapper-text_parts">ЧИ МОЖНА ОПЛАТИТИ ЧАСТИНАМИ?</p>
            <div className='overdraft__wrapper-text_container-percents'>
              <img src={Check} alt="" />
              <p className='overdraft__wrapper-text_container-percents-text'>Так, без відсотків від 3 до 12 місяців</p>
            </div>
            <p className='overdraft__wrapper-text_overdraft'>В розстрочку без %</p>
            <div className='overdraft__wrapper-text_container-feedback'>
              <img src={Check} alt="" />
              <p className='overdraft__wrapper-text_container-feedback-text'>Якщо ваш банк не погодив розстрочку, напишіть нам у телеграм, щоб оформити оплату частинами </p>
            </div>
            <p className='overdraft__wrapper-text_telegram'>Написати в Telegram</p>
          </div>
          <img className="overdraft__wrapper-img_mob" src={cardMob} alt="" />
          <img className="overdraft__wrapper-img" src={Card} alt="overdraft" />
          <img className="overdraft__wrapper-ellipse_right" src={EllipseRight} alt="ellipse" />
          <img className="overdraft__wrapper-ellipse_left" src={EllipseLeft} alt="ellipse" />
          <img className="overdraft__wrapper-star_right" src={StarRight} alt="star" />
          <img className="overdraft__wrapper-star_left" src={StarLeft} alt="star" />
          <img className="overdraft__wrapper-grayTGMob1" src={GrayTGMob1} alt="grayTGMob1" />
          <img className="overdraft__wrapper-grayTGMob2" src={GrayTGMob2} alt="grayTGMob2" />
          <img className="overdraft__wrapper-grayTGMob3" src={GrayTGMob3} alt="grayTGMob3" />
        </div>
      </Container>
    </div>
  );
}
