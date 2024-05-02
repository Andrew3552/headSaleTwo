import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PublicOffer from './pages/PublicOffer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/public-offer" element={<PublicOffer/>} />
    </Routes>
  ) 
}

export default App;
