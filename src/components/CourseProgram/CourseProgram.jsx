import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { item } from './item';

import Container from '../WrapperList/Container';
import Base from './components/Base';
import Freelance from './components/Freelance';
import Busines from './components/Busines';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';

import EllipseLeftMob from '../../assets/courseProgram/EllipseLeftMob.png';
import starLeftMob from '../../assets/courseProgram/starLeftMob.png';
import EllipseRight from '../../assets/courseProgram/EllipseRight.png';
import starRight from '../../assets/courseProgram/starRight.png';

import './CourseProgram.scss';
import './components/StyleComponents.scss';

export default function CourseProgram() {
  const [visibleItems, setVisibleItems] = useState(4); // начальное состояние - 4 видимых элемента
  const [isButtonClicked, setIsButtonClicked] = useState(false); // начальное состояние - кнопка не была нажата

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  function highlightWord(text, wordToHighlight) {
    if (!text || !wordToHighlight) {
      return text || '';
    }

    const parts = text.split(wordToHighlight);
    return (
      <span>
        {parts.map((part, i) => (
          <span className="colored_text" key={i}>
            {i > 0 && (
              <span className="colored_text" style={{ color: 'red' }}>
                {wordToHighlight}
              </span>
            )}
            {part}
          </span>
        ))}
      </span>
    );
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="courseProgram">
      <Container>
        <h2 className="courseProgram__title">Програма онлайн-курсу</h2>
        <div className="results__btn_container">
          <button className="results__btn_container_btn left" onClick={previous}>
            <FaArrowLeft className="left_icon" />
          </button>
          <button className="results__btn_container_btn right" onClick={next}>
            <FaArrowRight className="right_icon" />
          </button>
        </div>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
          <Base
            highlightWord={highlightWord}
            isButtonClicked={isButtonClicked}
            visibleItems={visibleItems}
            setVisibleItems={setVisibleItems}
            setIsButtonClicked={setIsButtonClicked}
          />
          <Freelance
            highlightWord={highlightWord}
            isButtonClicked={isButtonClicked}
            visibleItems={visibleItems}
            item2={item}
            setVisibleItems={setVisibleItems}
            setIsButtonClicked={setIsButtonClicked}
          />
          <Busines
            highlightWord={highlightWord}
            isButtonClicked={isButtonClicked}
            visibleItems={visibleItems}
            item2={item}
            setVisibleItems={setVisibleItems}
            setIsButtonClicked={setIsButtonClicked}
          />
        </Slider>
      </Container>
    </div>
  );
}
