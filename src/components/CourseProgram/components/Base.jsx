import Wrapper from '../../WrapperList/Wrapper';
import List from '../../WrapperList/List';

import { item } from '../item';
import Vector from '../../../assets/courseProgram/Vector.svg';

import BtnBanner from '../../Bunner/BtnBanner/BtnBanner';

export default function Base({ highlightWord }) {


  return (
    <div className="courseProgram__wrapper">
      <div className="courseProgram__wrapper-block">
        <div className="courseProgram__wrapper-block_img">01</div>
        <h3 className="courseProgram__wrapper-block-title">Блок: База</h3>
      </div>
      <Wrapper courseProgramContainer>
        {item.map((item, index) => (
          <List courseProgramWrapperList key={index}>
            <div className="courseProgram__wrapper_container-list_icon">
              <div className={`img-container img-container-${index}`}>
                <img className="img__block_icon" src={item.img} alt="" />
              </div>
            </div>
            <div className="courseProgram__block-module_item">
              <h3 className="courseProgram__block-module_item-text">{item.module}</h3>
            </div>
            <div className="courseProgram__block-module_svg">
              <p className="courseProgram__block-module_title">{item.nameModule}</p>
             <img className="courseProgram__block-module_img" src={Vector} alt="" />
            </div>
            <div className="courseProgram__block-module">
              <svg className="connecting-line" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#E21B1B" strokeWidth="3" />
              </svg>
              <div className="courseProgram__block-module-text">
                <p className="block__text">{highlightWord(item.lesson1, item.lesson1HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson2, item.lesson2HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson3, item.lesson3HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson4, item.lesson4HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson5, item.lesson5HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson6, item.lesson6HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson7, item.lesson7HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson8, item.lesson8HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson9, item.lesson9HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson10, item.lesson10HighLight)}</p>
                <p className="block__text">{highlightWord(item.lesson11, item.lesson11HighLight)}</p>
              </div>
            </div>
          </List>
        ))}
      </Wrapper>
    </div>
  );
}
