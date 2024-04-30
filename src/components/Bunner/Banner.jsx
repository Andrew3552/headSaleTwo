import Container from '../WrapperList/Container';
import BtnBanner from './BtnBanner/BtnBanner';
import BannerGoldCard from './BannerGoldCard';

import TitlePhoto from '../../assets/Photo.webp';
import group from '../../assets/icons/Group 435.svg';
import mask from '../../assets/icons/Mask group.svg';
import vector from '../../assets/icons/Vector.svg';
import AvaTg from '../../assets/Banner/AvaTg.webp';
import avaDesc from '../../assets/Banner/avaDesc.webp';
import airPlane1 from '../../assets/Banner/airPlane1.webp';
import airPlane2 from '../../assets/Banner/airPlane2.webp';
import airPlane3 from '../../assets/Banner/airPlane3.webp';
import airPlane4 from '../../assets/Banner/airPlane4.webp';
import airPlane5 from '../../assets/Banner/airPlane5.webp';
import airPlane7 from '../../assets/Banner/airPlane7.webp';
import TgBlue from '../../assets/Banner/TgBlue.webp';
import TgBlueDesk from '../../assets/Banner/TgBlueDesk.webp';
import TgGray1 from '../../assets/Banner/TgGray1.webp';
import TgGray2 from '../../assets/Banner/TgGray2.webp';
import TgGray3 from '../../assets/Banner/TgGray3.webp';
import TgGray4 from '../../assets/Banner/TgGray4.webp';
import TgGray5 from '../../assets/Banner/TgGray5.webp';
import TgGray6 from '../../assets/Banner/TgGray6.webp';
import ray from '../../assets/Banner/ray.png';
import rayDesk from '../../assets/Banner/rayDesk.png';
import Ellipse1 from '../../assets/Banner/Ellipse1.png';
import starRight from '../../assets/Banner/starRight.png';
import starLeft from '../../assets/Banner/starLeft.png';
import starLeftDesk from '../../assets/Banner/starLeftDesk.png';
import starRightDesk from '../../assets/Banner/starRightDesk.png';
import Dollar from '../../assets/Banner/Dollar.png';
import DollarDeskLeft from '../../assets/Banner/DollarDeskLeft.png';
import DollarDeskRight from '../../assets/Banner/DollarDeskRight.png';
import DollarDeskLeftUp from '../../assets/Banner/DollarDeskLeftUp.png';
import DollarDeskRightUp from '../../assets/Banner/DollarDeskRightUp.png';


import './Banner.scss';

export default function Banner() {
  return (
    <div className="title__banner">
      <div className="bannerCards">
          <BannerGoldCard className="bannerCards__two" icon={group}>
            <p className="bannerCards__text--big">ОНЛАЙН <p className="bannerCards__text--small">формат навчання</p></p> 
          </BannerGoldCard>
          <BannerGoldCard  className="bannerCards__three" icon={mask}>
            <p className="bannerCards__text--big">7 тижнів <p className="bannerCards__text--small">тривалість курсу</p></p>
          </BannerGoldCard>
        </div>
      <img src={ray} className="title__banner_wrapper_ray" alt="" />
     
      <img src={Ellipse1 } className="title__banner_wrapper_ellipse_right" alt="" />
      {/* <img src={Ellipse1 } className="title__banner_wrapper_ellipse_right_desk" alt="" /> */}
      <img src={Ellipse1 } className="title__banner_wrapper_ellipse_left" alt="" />
      <img src={starRight} className="title__banner_wrapper_starRight" alt="" />
      <img src={starLeft} className="title__banner_wrapper_starLeft" alt="" />
      <img src={starLeftDesk} className="title__banner_wrapper_starLeft_desk" alt="" />
      <img src={starRightDesk} className="title__banner_wrapper_starRight_desk" alt="" />
      <img src={Dollar} className="title__banner_wrapper_dollar" alt="" />
      <Container>
        
        <div className="title__banner_wrapper">
          <p className="title__banner_wrapper_subText">Навчу тебе заробляти від 1000$ онлайн, опанувавши ТГ-професію, та будувати прибутковий бізнес <span className="gold_gradient-banner">з вкладеннями та без</span></p>
          <img className="title__banner_wrapper_img" src={TitlePhoto} alt="" />
          <h1 className="title__banner_wrapper_title">Traffic Wolves University</h1>
          <p className="title__banner_wrapper_subtitle">від 0 до мільйонного бізнесу на ТГ-каналах</p>
          <div className="title__banner_wrapper_text_one">
            <p className="title__banner_wrapper_text">Ростислав Смірнов</p>
          </div>
          <img src={DollarDeskRight} className="title__banner_wrapper_dollarDeskRight" alt="" />
          <img src={DollarDeskLeft} className="title__banner_wrapper_dollarDeskLeft" alt="" />
          <img src={DollarDeskLeftUp} className="title__banner_wrapper_dollarDeskLeftUp" alt="" />
          <img src={DollarDeskRightUp} className="title__banner_wrapper_dollarDeskRightUp" alt="" />     
          <img src={rayDesk} className="title__banner_wrapper_rayDesk" alt="" />
          <img src={AvaTg} className="title__banner_wrapper_ava" alt="" />
          <img src={avaDesc} className="title__banner_wrapper_avaDesc" alt="" />
          <img src={airPlane1} className="title__banner_wrapper_airplane1" alt="" />
          <img src={airPlane2} className="title__banner_wrapper_airplane2" alt="" />
          <img src={airPlane3} className="title__banner_wrapper_airplane3" alt="" />
          <img src={airPlane4} className="title__banner_wrapper_airplane4" alt="" />
          <img src={airPlane5} className="title__banner_wrapper_airplane5" alt="" />
          {/* <img src={airplane6} className="title__banner_wrapper_airplane6" alt="" /> */}
          <img src={airPlane7} className="title__banner_wrapper_airplane7" alt="" />
          <img src={TgBlue} className="title__banner_wrapper_TgBlue" alt="" />
          <img src={TgBlueDesk} className="title__banner_wrapper_TgBlueDesk" alt="" />
          <img src={TgGray1} className="title__banner_wrapper_TgGray1" alt="" />
          <img src={TgGray2} className="title__banner_wrapper_TgGray2" alt="" />
          <img src={TgGray3} className="title__banner_wrapper_TgGray3" alt="" />
          <img src={TgGray4} className="title__banner_wrapper_TgGray4" alt="" />
          <img src={TgGray5} className="title__banner_wrapper_TgGray5" alt="" />
          <img src={TgGray6} className="title__banner_wrapper_TgGray6" alt="" />
          <div className="title__banner_wrapper_text_two">
            <p className="title__banner_wrapper_text">Власник каналів з аудиторією 1.7+ млн</p>
          </div>
          <div className="title__banner_wrapper_text_three">
            <p className="title__banner_wrapper_text"> Агенція Traffic Wolves</p>
          </div>
          <div className="title__banner_wrapper_text_four">
            <p className="title__banner_wrapper_text">СМІРНОВ про Телеграм 141к підписників</p>
          </div>
        </div>
        <BtnBanner btnBanner bannerBtnWrapper buttonText="Взяти участь" />
      </Container>
    </div>
  );
}
