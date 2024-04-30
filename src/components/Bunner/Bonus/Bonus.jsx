import img from '../.././../assets/icons/mdi_education-outline.svg';
import img2 from '../.././../assets/icons/mi_message-alt.svg';
import './Bonus.scss';

export default function Bonus() {
  return (
    <div className="bonus__container">
      <div className="div1 divBorder">При оплаті курсу сьогодні - отримаєш 7 бонусів!</div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div className="div2 divBorder">
          <span className="readCircle">90</span> 90 уроків в записі
        </div>
        <div className="div3 divBorder">
          <span className="readCircle">
            30<span className="readCircle__textMini">min</span>
          </span>
          30 хвилин на навчання в день
        </div>
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div className="div4 divBorder">
          <span className="readCircle">
            <img src={img} alt="" />
          </span>
          14 модулей
        </div>
        <div className="div5 divBorder">
          <span className="readCircle">
            <img src={img2} alt="" />
          </span>
          Зворотній зв’язок та підтримка куратора
        </div>
      </div>
    </div>
  );
}
