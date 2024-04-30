import { item } from './item';

import Container from '../WrapperList/Container';
import Wrapper from '../WrapperList/Wrapper';
import List from '../WrapperList/List';


import './Tariff.scss';

export default function Tariff() {
  function highlightWord(text, wordToHighlight) {
    const parts = text.split(wordToHighlight);
    return (
      <span>
        {parts.map((part, i) => (
          <span key={i}>
            {i > 0 && <strong>{wordToHighlight}</strong>}
            {part}
          </span>
        ))}
      </span>
    );
  }

  return (
    <div id="tariffs" className="tariff">
      <Container>
        <div className="tariff__wrapper_container">
          <h2 className="tariff__title">Обирай тариф, бронюй місце та отримуй корисний подарунок вже зараз</h2>
          <Wrapper tariffWrapper>
            {item.map((item, index) => (
              <List tariffWrapperList key={index}>
                <h3 className="tariff__wrapper_list-title">{item.title}</h3>
                <div className="tariff__wrapper_list-container">
                  <div className="tariff__wrapper_list-container-item">
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-1`}>
                        {highlightWord(item.text1, item.text1Highlight)}
                      </p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-2`}>
                        {highlightWord(item.text2, item.text2Highlight)}
                      </p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-3`}>{item.text3}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-4`}>
                        {highlightWord(item.text4, item.text4Highlight)}
                      </p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-5`}>{item.text5}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-6`}>
                        {highlightWord(item.text6, item.text6Highlight)}
                      </p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-7`}>{item.text7}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-8`}>{item.text8}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-9`}>{item.text9}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-10`}>
                        {highlightWord(item.text10, item.text10Highlight)}
                      </p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-11`}>
                        {highlightWord(item.text11, item.text11Highlight)}
                      </p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-12`}>{item.text12}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-13`}>
                        {highlightWord(item.text13, item.text13Highlight)}
                      </p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-14`}>{item.text14}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-15`}>{item.text15}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-16`}>{item.text16}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-17`}>{item.text17}</p>
                    </div>
                    <div className="text-container">
                      <p className={`tariff__wrapper_list-container-item-text text-${index}-18`}>
                        {item.text18 && item.text18Highlight
                          ? highlightWord(item.text18, item.text18Highlight)
                          : item.text18}
                      </p>
                    </div>
                  </div>
                  <div className={`tariff__wrapper_list-container-footer footer-${index}`}>
                    <p className="tariff__wrapper_list-container-footer-place">{item.place}</p>
                    <h3 className="tariff__wrapper_list-container-footer-sub_title">{item.title}</h3>
                    <div className="tariff__wrapper_list-container-footer-price-container">
                      <div className="tariff__wrapper_list-container-footer-price-container-item">
                        <p className="tariff__wrapper_list-container-footer-price">{item.price1}</p>
                        <p className="tariff__wrapper_list-container-footer-subtitle_price">{item.subTitlePrice1}</p>
                      </div>
                      <div className="tariff__wrapper_list-container-footer-price-container-item">
                        <p className="tariff__wrapper_list-container-footer-price price2">{item.price2}</p>
                        <p className="tariff__wrapper_list-container-footer-subtitle_price subtitle_price2">
                          {item.subTitlePrice2}
                        </p>
                      </div>
                      <div className="tariff__wrapper_list-container-footer-price-container-item">
                        <p className="tariff__wrapper_list-container-footer-price price3">{item.price3}</p>
                        <p className="tariff__wrapper_list-container-footer-subtitle_price subtitle_price3">
                          {item.subTitlePrice3}
                        </p>
                      </div>
                    </div>
                    <div className="tariff__wrapper_list-container-footer-pay">
                      <a
                        className="tariff__wrapper_list-container-footer-pay-link link1"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.pay1.link}
                      >
                        {item.pay1.text}
                      </a>
                      <a
                        className="tariff__wrapper_list-container-footer-pay-link link2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.pay2.link}
                      >
                        {item.pay2.text}
                      </a>
                      <a
                        className="tariff__wrapper_list-container-footer-pay-link link3"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.pay3.link}
                      >
                        {item.pay3.text}
                      </a>
                    </div>
                  </div>
                </div>
              </List>
            ))}
          </Wrapper>
        </div>
      </Container>
    </div>
  );
}
