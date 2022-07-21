import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './App.css';
import BuildPizza from './pages/BuildPizza';
import MakeTable from './pages/MakeTable';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuList from './components/MenuList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
          <Route index element={<Home />} />
          <Route path="maketable" element={<MakeTable />} />
          <Route path="menu" element={<Menu />}>
            <Route index element={<MenuList />} />
            <Route path="build-pizza" element={<BuildPizza />} />
          </Route>
          <Route path="*" element={<NoPage />} />
  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
