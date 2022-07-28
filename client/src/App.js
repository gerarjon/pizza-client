import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './App.css';
import BuildPizza from './pages/BuildPizza';
import MakeTable from './pages/MakeTable';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import MenuList from './components/MenuList';
import MainNav from './components/MainNav';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className='main-container'>
      <BrowserRouter>
        <MainNav />
        <div className='under-main-nav'>
          <SideNav />
          <div className='routed-content'>
            <Routes>
                <Route index element={<Home />} />
                <Route path="maketable" element={<MakeTable />} />
                <Route path='cart' element={<Cart />} />
                <Route path="menu" element={<Menu />}>
                  <Route index element={<MenuList />} />
                  <Route path="build-pizza" element={<BuildPizza />} />
                </Route>
                <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
