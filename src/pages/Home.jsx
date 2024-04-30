import Banner from '../components/Bunner/Banner';


import People from '../components/People/People';
import Footer from '../components/Footer/Footer';
import Avtor from '../components/Avtor/Avtor';


// import People from '../components/People';
import Questions from '../components/Questions/Questions';

import HowTheTraining from '../components/HowTheTraining/HowTheTraining';
import Tariff from '../components/Tariff/Tariff';
import Doubts from '../components/Doubts/Doubts';
import WayDesk from '../components/WayTraining/WayDesk';
import CourseProgram from '../components/CourseProgram/CourseProgram';
import Overdraft from '../components/Overdraft/Overdraft';


import './Home.scss';
import Study from '../components/Study/Study';
export default function Home() {
  return (
    <>
      <Banner/>
      <People />
      <WayDesk />
      <Avtor />
      <CourseProgram />
      <HowTheTraining />
      <Study/>
      <Tariff />
      <Overdraft />
      <Doubts />
      <Questions></Questions>
      <Footer />
    </>
  );
}
