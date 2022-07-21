import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './App.css';
import BuildPizza from './pages/BuildPizza';
import MakeTable from './pages/MakeTable';
import NoPage from './pages/NoPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="build-pizza" element={<BuildPizza />} />
          <Route path="maketable" element={<MakeTable />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
