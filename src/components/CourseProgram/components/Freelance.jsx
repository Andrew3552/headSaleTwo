import Wrapper from '../../WrapperList/Wrapper';
import List from '../../WrapperList/List';

import { item2 } from '../item';

import BtnBanner from '../../Bunner/BtnBanner/BtnBanner';

export default function Base({ highlightWord, visibleItems, isButtonClicked,setVisibleItems, setIsButtonClicked }) {

  const handleClick = () => {
    setVisibleItems(item2.length); // при клике показываем все элементы
    setIsButtonClicked(true); // устанавливаем, что кнопка была нажата
  };

  return (
    <div className="courseProgram__wrapper">
      <div className="courseProgram__wrapper-block">
        <div className="courseProgram__wrapper-block_img">02</div>
        <h3 className="courseProgram__wrapper-block-title">Блок: Фріланс</h3>
      </div>
      <Wrapper courseProgramContainer>
        {item2.slice(0, visibleItems).map((item, index) => (
          <List courseProgramWrapperList key={index}>
            <div className="courseProgram__wrapper_container-list_icon">
              <div className={`img-container img-container-${index}`}>
                <img className="img__block_icon" src={item.img} alt="" />
              </div>
            </div>
            <div className="courseProgram__block-module_item">
              <h3 className="courseProgram__block-module_item-text">{item.module}</h3>
            </div>
            <p className="courseProgram__block-module_title">{item.nameModule}</p>
            <div className="courseProgram__block-module">
              <svg className="connecting-line" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#E21B1B" strokeWidth="2" />
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
        {isButtonClicked && <BtnBanner courseWrapperBtn buttonText="Забронювати місце" />}
      </Wrapper>
      <button className="courseProgram__wrapper_btn" onClick={handleClick}>відкрити всі модулі</button>
    </div>
  );
}
