
import StudentImg from "../../assets/student.webp";
import FindUsImg from "../../assets/findUs.webp";
import BusinessImg from "../../assets/business.webp";
import FreelanceImg from "../../assets/freelance.webp";
import InvestorImg from "../../assets/investor.webp";
import MotherImg from "../../assets/mother.webp";
import NotMoneyImg from "../../assets/notMoney.webp";
import WorkImg from "../../assets/work.webp";
import Aeroplane from "../../assets/flyMin.webp";
import Container from '../WrapperList/Container';

import './People.scss'
 export default function People() {
   return (
     <div className="people">
       <Container>
       <h1 className="title__people">НАВЧАННЯ ДЛЯ ТЕБЕ, ЯКЩО ТИ:</h1>
       <div className="gradient__wrapper">
         <div className="box__one">
           <div className="img__container">
             <img className="aeroplane_five" src={Aeroplane} alt="aeroplane" />
             <img className="box__img" src={FindUsImg} alt="find-us" />
             <h2 className="title__box">Шукаєш себе</h2>
           </div>
           <p className="box__text">
             І поки що не знаєш, чим хочеш займатися у житті, але
             <span className="gold_gradient"> заробляти хочеш вже зараз</span>
           </p>
         </div>
         <div className="box__two">
           <div className="img__container">
             <img className="aeroplane_two" src={Aeroplane} alt="aeroplane" />
             <img className="box__img" src={StudentImg} alt="student" />
             <h2 className="title__box">Студент</h2>
           </div>
           <p className="box__text">
             Шукаєш<span className="gold_gradient">можливість заробляти, поєднуючи свою професійну діяльність</span> з
             навчанням в університеті або старших класах школи
           </p>
         </div>
         <div className="box__three">
           <div className="img__container">
             <img className="aeroplane_one" src={Aeroplane} alt="aeroplane" />
             <img className="box__img" src={MotherImg} alt="mother" />
             <h2 className="title__box">Мама в декреті</h2>
           </div>
           <p className="box__text">
             І хочеш максимум часу приділяти своїй родині, при цьому
             <span className="gold_gradient">забезпечувати себе та дітей</span>
           </p>
         </div>
         <div className="box__four">
           <div className="img__container">
             <img className="aeroplane_six" src={Aeroplane} alt="aeroplane" />
             <img className="box__img" src={WorkImg} alt="work" />
             <h2 className="title__box">Працюєш в наймі</h2>
           </div>
           <p className="box__text">
             І хочеш мати вільний графік, подорожувати країною та світом і
             <span className="gold_gradient">жити , як хочеш сам</span>
           </p>
         </div>
         <div className="box__five">
           <img className="aeroplane_three" src={Aeroplane} alt="aeroplane" />
           <div className="img__container">
             <img className="box__img" src={NotMoneyImg} alt="not-money" />
             <h2 className="title__box special">Не маєш великих заощаджень</h2>
           </div>
           <p className="box__text">
             І хочеш навчитися будувати онлайн-бізнес на ТГ-каналах
             <span className="gold_gradient"> без вкладень </span>, створюючи канали на продаж
           </p>
         </div>
         <div className="box__six">
           <div className="img__container">
             <img className="aeroplane_seven" src={Aeroplane} alt="aeroplane" />
             <img className="box__img" src={BusinessImg} alt="business" />

             <h2 className="title__box">Людина бізнесу</h2>
           </div>
           <p className="box__text">
             І хочеш розібратися у можливостях ринку TELEGRAM та
             <span className="gold_gradient">вкласти кошти у мережу власних ТГ-каналів</span>
           </p>
         </div>
         <div className="box__seven">
           <div className="img__container">
             <img className="box__img" src={FreelanceImg} alt="freelance" />
             <h2 className="title__box">Фрілансер</h2>
           </div>
           <p className="box__text">
             І хочеш вивчити ще один вид онлайн заробітку, щоб
             <span className="gold_gradient">
               примножити власні заощадження та отримати альтернативне джерело доходу
             </span>
           </p>
         </div>
         <div className="box__eight">
           <div className="img__container">
             <img className="aeroplane_four" src={Aeroplane} alt="aeroplane" />
             <img className="box__img" src={InvestorImg} alt="investor" />
             <h2 className="title__box">Інвестор</h2>
           </div>
           <p className="box__text">
             <span className="gold_gradient">І шукаєш надійних партнерів та команду</span> для інвестицій в існуючу
             мережу ТГ-каналів та ТГ-агенцію або плануєш створити їх самостійно
           </p>
         </div>
         </div>
       </Container>
     </div>
   );
 }