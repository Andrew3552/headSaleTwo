import './Avtor.scss';
import Checkbox from '../../assets/checkbox.webp';
import Owner from '../../assets/owner.webp';
import AvtorCourse from '../../assets/avtor.webp';
import RedLiner from '../../assets/linerRed.webp';
import Container from '../../components/WrapperList/Container';
import Cloud from '../../assets/fly.webp';
export default function Avtor() {
  return (
    <>
      <div className="avtor__container">
        <Container>
          <h1 className="avtor__title one">Про автора і ведучого курсу</h1>
          <h1 className="avtor__title two">Автор та ведучий курсу</h1>
          <div className="avtor__order">
            <ul className="avtor__list">
              <li className="avtor__item">
                <img src={Checkbox} alt="checkbox" />
                <p className="avtor__item_text">Власник каналів з аудиторією понад 1.7 мільйона підписників</p>
              </li>
              <li className="avtor__item">
                <img src={Checkbox} alt="checkbox" />
                <p className="avtor__item_text">Власник і гарант біржі купівлі-продажу ТГ каналів</p>
              </li>
              <li className="avtor__item">
                <img src={Checkbox} alt="checkbox" />
                <p className="avtor__item_text">Засновник ТГ-агенції Traffic Wolves</p>
              </li>
              <li className="avtor__item">
                <img src={Checkbox} alt="checkbox" />
                <p className="avtor__item_text">Засновник Київської школи державного управління</p>
              </li>
              <li className="avtor__item">
                <img src={Checkbox} alt="checkbox" />
                <p className="avtor__item_text">Засновник маркетплейсу сумісник закупок ToGether</p>
              </li>
              <li className="avtor__item">
                <img src={Checkbox} alt="checkbox" />
                <p className="avtor__item_text">Засновник кав’ярень самообслуговування UKava</p>
              </li>
              <li className="avtor__item">
                <img src={Checkbox} alt="checkbox" />
                <p className="avtor__item_text">Засновник Добробату – добровольчі будівельні батальйони</p>
              </li>
            </ul>
            <div className="owner__box">
              <img src={AvtorCourse} alt="avtor" className="img__owner" />
              <img src={Owner} alt="avtor" className="img__owner_avatar" />
              <img src={Cloud} alt="cloud" className="cloud" />
              <div className="owner__box_info">
                <a className="link__owner" href="https://t.me/telestarua" target="_blank">
                  <img src={RedLiner} alt="redLiner" className="red_liner" />
                  Ростислав Смірнов
                </a>
              </div>
              <div className="owner__box_order">
                <p className="owner__text">Підприємець і волонтер</p>
                <p className="avtor__title three">
                  Автор та ведучий
                  <p className="avtor__title_span">Traffic Wolves University</p>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
