import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
