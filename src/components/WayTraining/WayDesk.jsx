import { useState, useEffect, useMemo } from 'react';
import { useSpring, animated, useInView } from 'react-spring';
// import { useInView } from 'react-intersection-observer';

import Container from '../WrapperList/Container';
import BtnBanner from '../Bunner/BtnBanner/BtnBanner';

import WayTrainingMob from '../../assets/WayTraining/wayTrainingMob.png';
import WayTrainingDesk from '../../assets/WayTraining/wayTrainingDesk.webp';
import airplane from '../../assets/WayTraining/airplane.webp';
import circle from '../../assets/WayTraining/circle.webp';
import Key from '../../assets/WayTraining/Key.webp';
import closedLock from '../../assets/WayTraining/closedLock.webp';
import openLock from '../../assets/WayTraining/openLock.webp';

import './WayTraining.scss';

export default function WayTraining() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [activePoint, setActivePoint] = useState(0);
  const [started, setStarted] = useState(false);
  const [{ x, y }, api] = useSpring(() => ({
    x: windowWidth > 1250 ? 0 : 50,
    y: windowHeight > 768 ? 0 : 45,
  }));

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const points = useMemo(() => {
    if (windowWidth > 1250) {
      return [
        { x: 245, y: 45 },
        { x: 450, y: 45 },
        { x: 450, y: 155 },
        { x: 650, y: 155 },
        { x: 850, y: 155 },
        { x: 850, y: 50 },
        { x: 1000, y: 50 },
        { x: 1265, y: 50 },
        { x: 1265, y: 360 },
        { x: 1265, y: 525 },
        { x: 840, y: 525 },
        { x: 150, y: 520 },
      ];
    } else if (windowWidth > 768) {
      return [
        { x: 150, y: 50 },
        { x: 275, y: 50 },
        { x: 275, y: 135 },
        { x: 405, y: 135 },
        { x: 520, y: 135 },
        { x: 520, y: 55 },
        { x: 630, y: 55 },
        { x: 790, y: 55 },
        { x: 790, y: 275 },
        { x: 790, y: 400 },
        { x: 520, y: 400 },
        { x: 80, y: 400 },

        // ...
      ];
    } else {
      return [
        { x: 50, y: 140 },
        { x: 50, y: 280 },
        { x: 50, y: 425 },
        { x: 50, y: 565 },
        { x: 50, y: 705 },
        { x: 50, y: 845 },
        // ...
      ];
    }
  }, [windowWidth]);

  const actionPoints = useMemo(() => {
    if (windowWidth > 1250) {
      return [
        { x: 245, y: 45 },
        { x: 650, y: 155 },
        { x: 1000, y: 50 },
        { x: 1265, y: 360 },
        { x: 840, y: 525 },
        { x: 150, y: 520 },
      ];
    } else if (windowWidth > 768) {
      return [
        { x: 150, y: 50 },
        { x: 405, y: 135 },
        { x: 630, y: 55 },
        { x: 790, y: 275 },
        { x: 520, y: 400 },
        { x: 80, y: 400 },
        // ...
      ];
    } else {
      return [
        { x: 50, y: 140 },
        { x: 50, y: 280 },
        { x: 50, y: 425 },
        { x: 50, y: 565 },
        { x: 50, y: 705 },
        { x: 50, y: 845 },
        // ...
      ];
    }
  }, [windowWidth]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      points.forEach((point, i) => {
        setTimeout(() => {
          api.start({ to: point });
          const actionPointIndex = actionPoints.findIndex(
            actionPoint => actionPoint.x === point.x && actionPoint.y === point.y
          );
          if (actionPointIndex !== -1) {
            setActivePoint(actionPointIndex + 1);
          }
        }, i * 2500); // начать каждую следующую анимацию через 1 секунду
      });
    }
  }, [inView, started, api, points, actionPoints]);

  return (
    <div className="wayTraining">
      <Container>
        <div className="wayTraining__wrapper">
          <h2 className="wayTraining__wrapper_title">Твій шлях на навчанні</h2>
          <div className="wayTraining__wrapper_img-container">
            <div className="line-r">
              <img className="desk" src={WayTrainingDesk} alt="" />
              <img className="line" src={WayTrainingMob} alt="" />
              <animated.img ref={ref} style={{ x, y }} className="airplane" src={airplane} alt="" />
            </div>
            <div className={`controlPoint ${activePoint >= 1 ? 'active' : ''}`}>
              <div className="line-r">
                <img className="circle one" src={circle} alt="" />
                {activePoint < 1 && <img className="key K_one" src={Key} alt="" />}
              </div>
              {activePoint >= 1 && (
                <div className="controlPoint__text_one">
                  <p className="strong">Старт навчання</p>
                </div>
              )}
            </div>

            <div className="controlPoint">
              <div className="line-r">
                <img className="circle two" src={circle} alt="" />
                {activePoint < 2 && <img className="key K_two" src={Key} alt="" />}
              </div>
              {activePoint >= 2 && (
                <div className="controlPoint__text_two">
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Знайомство з експертом</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Программа навчання</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Постановка цілей</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Мислення</p>
                </div>
              )}
            </div>

            <div className="controlPoint">
              <div className="line-r">
                <img className="circle three" src={circle} alt="" />
                {activePoint < 3 && <img className="key K_three" src={Key} alt="" />}
              </div>
              {activePoint >= 3 && (
                <div className="controlPoint__text_three">
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Фундамент Телеграм</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Базові навичики</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Інструменти</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Боти і сервіси</p>
                </div>
              )}
            </div>

            <div className="controlPoint">
              <div className="line-r">
                <img className="circle four" src={circle} alt="" />
                {activePoint < 4 && <img className="key K_four" src={Key} alt="" />}
              </div>
              {activePoint >= 4 && (
                <div className="controlPoint__text_four">
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Занурення в професії</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Контент-менеджер</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Менеджер з продажу</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Медіа-баєр</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Адмін</p>
                </div>
              )}
            </div>

            <div className="controlPoint">
              <div className="line-r">
                <img className="circle five" src={circle} alt="" />
                {activePoint < 5 && <img className="key K_five" src={Key} alt="" />}
              </div>
              {activePoint >= 5 && (
                <div className="controlPoint__text_five">
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Онлайн-бізнес</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Перелив трафіку</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Створення та покупка каналів</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Окупність каналів та заробіток</p>
                </div>
              )}
            </div>

            <div className="controlPoint">
              <div className="line-r">
                <img className="circle six" src={circle} alt="" />
                {activePoint < 6 ? (
                  <img className="closedLock" src={closedLock} alt="" />
                ) : (
                  <img className="openLock" src={openLock} alt="" />
                )}
              </div>
              {activePoint >= 6 && (
                <div className="controlPoint__text_six">
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Маштабування</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Побудова команди</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Мережа каналів</p>
                  <p style={{ paddingLeft: '1em', textIndent: '-1em' }}>• Персональний бренд</p>
                </div>
              )}
            </div>
          </div>
          <button
            className="select__tariff"
            onClick={() => {
              const element = document.getElementById('tariffs');
              element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Обрати тариф
          </button>
        </div>
      </Container>
    </div>
  );
}
