import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { ComponentsPage, ComputersPage, HomePage, OneComponentPage, OneComputerPage } from './pages';
import { homeRoute } from './config/constants';

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Layout/>}>
        <Route path={`${homeRoute}`} element={<HomePage/>}/>
        <Route path={`${homeRoute}/components`} element={<ComponentsPage/>}/>
        <Route path={`${homeRoute}/computers`} element={<ComputersPage/>}/>
        <Route path={`${homeRoute}/computer/:id`} element={<OneComputerPage/>}/>
        <Route path={`${homeRoute}/component/:id`} element={<OneComponentPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
