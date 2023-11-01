import { Route, Routes } from 'react-router-dom';
import Api from './Api';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import CountryDetails from './CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Api/> */}
      <Routes>
          <Route path="/" element={<Api/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/country/:code" element={<CountryDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
