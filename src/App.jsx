import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Menu from './pages/Menu';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import DinamicUserOrder from './pages/DynamicUserOrder/DynamicUserOrder';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div className="wrapper">
      <Header className="header" />

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order/new' element={<Order />} />
        <Route path='/order/:id' element={<DinamicUserOrder />} />

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App
