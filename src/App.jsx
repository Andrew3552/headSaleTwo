import './App.css';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import {Routes, Route} from 'react-router-dom';

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
    </Routes>
  ) 
}

export default App;
