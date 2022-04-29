import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Inventory from './Components/Pages/Inventory/Inventory';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/inventory/:id' element={<Inventory/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
