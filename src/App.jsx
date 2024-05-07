// import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login';
import Menu from './pages/Menu';

function App() {

  return (
    <div className="wrapper">
      <Header className="header" />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App
