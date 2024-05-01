import { useState } from 'react';
import classNames from 'classnames';
import Container from '../WrapperList/Container';
import Base from './components/Base';
import Freelance from './components/Freelance';
import Busines from './components/Busines';

import EllipseLeftMob from '../../assets/courseProgram/EllipseLeftMob.png';
import starLeftMob from '../../assets/courseProgram/starLeftMob.png';
import EllipseRight from '../../assets/courseProgram/EllipseRight.png';
import starRight from '../../assets/courseProgram/starRight.png';

import './CourseProgram.scss';
import './components/StyleComponents.scss';

export default function CourseProgram() {
  const [isButtonClicked, setIsButtonClicked] = useState(false); // начальное состояние - кнопка не была нажата

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

  return (
    <div className="courseProgram">
      <Container>
        <div className="courseProgram__wrapper_block">
          <h2 className="courseProgram__title">Програма онлайн-курсу</h2>
          <Base highlightWord={highlightWord} className={classNames('animated', { show: !isButtonClicked })} />
          <Freelance highlightWord={highlightWord} className={classNames('animated', { show: isButtonClicked })} />
          <Busines highlightWord={highlightWord} className={classNames('animated', { show: isButtonClicked })} />
          <button className="courseProgram__wrapper_btn" onClick={() => setIsButtonClicked(!isButtonClicked)}>
            {isButtonClicked ? 'Приховати блоки' : 'Відкрити всі модулі'}
          </button>
        </div>
      </Container>
    </div>
  );
}
