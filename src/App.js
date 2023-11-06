import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Art from './pages/Art';
import History from './pages/History';
import Entertainment from './pages/Entertainment';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/art' element={<Art/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/sports' element={<Entertainment/>}/>

     </Routes>
    </div>
  );
}

export default App;
