import dubts from '../../assets/Dubts/dubts.webp';
import check from '../../assets/Dubts/check.webp';

import Container from '../WrapperList/Container';
import BtnBanner from '../Bunner/BtnBanner/BtnBanner';

import './Doubts.scss';

export default function Doubts() {
  return (
    <div className="doubts">
      <Container>
        <h2 className="doubts__title">Ще є сумніви?</h2>
        <div className="doubts__wrapper">
          <h3 className="doubts__wrapper_subtitle">ЯКЩО тобі ПОТРІБНА КОНСУЛЬТАЦІЯ, залишай заявку</h3>
          <div className="doubts__wrapper_item">
            <h4 className="doubts__wrapper_item_title">Безкоштовна консультація</h4>
            <img className="doubts__wrapper_item_img" src={dubts} alt="" />
            <BtnBanner btnWrapperDoubts btnDoubts discountBtn btnWayUpText btnCount timeBtn buttonText="Залишити заявку" />
          </div>
          <div className="doubts__wrapper_item_counseling">
            <img className="doubts__wrapper_item_counseling-img" src={check} alt="" />
            <p className="doubts__wrapper_item_counseling-text">Відповіді на запитання</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
