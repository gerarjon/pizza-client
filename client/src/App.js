import React, { useState } from 'react'
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
  const [isActive, setIsActive] = useState(false)

  const isActiveHandle = () => {
		setIsActive(!isActive)
	}
  return (
    <BrowserRouter>
      <MainNav 
        isActive={isActive}
        isActiveHandle={isActiveHandle}
      />
      <main>
        <SideNav />
        <Routes>
            <Route index element={<Home />} />
            <Route path="/maketable" element={<MakeTable />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/menu" element={<Menu />}>
              <Route index element={<MenuList />} />
              <Route path="build-pizza" element={<BuildPizza />} />
            </Route>
            <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
