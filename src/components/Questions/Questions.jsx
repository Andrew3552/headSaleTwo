import { questionsArr } from './questionArr';

import QuestionsCard from './QuestionsCard';
import BtnBanner from '../Bunner/BtnBanner/BtnBanner';

import './Questions.scss';
export default function Questions() {
  return (
    <div className="questions__wrapper">
      <h2 className="questions__title">ВІДПОВІДІ НА ЗАПИТАННЯ</h2>
      <ul className="questions__list">
        {questionsArr.map((item, index) => (
          <QuestionsCard data={item} cuntNumber={index + 1} key={index}></QuestionsCard>
        ))}
      </ul>
      <button className="select__tariff"
        onClick={() => {
          const element = document.getElementById('tariffs');
          element.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Обрати тариф
      </button>
    </div>
  );
}
