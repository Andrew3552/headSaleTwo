import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function QuestionsCard({ data, cuntNumber }) {
  const [isOpen, setIsOpen] = useState(false);

  function openAnswer() {
    setIsOpen(!isOpen);
  }

  return (
    <li className="questionsCard__item">
      <div className="question" onClick={openAnswer}>
        <p className='questionsCard__question'>
          {cuntNumber}. {data.question}
        </p>
        <button className="questionsCard__btn">
          <IoIosArrowDown className={`${isOpen ? 'openBtn' : 'closeBtn'}`} />
        </button>
      </div>
      {isOpen && <p className='questionsCard__answer' >{data.answer}</p>}
    </li>
  );
}
