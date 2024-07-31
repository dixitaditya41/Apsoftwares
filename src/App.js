import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Software from './Pages/Software';
import Hardware from './Pages/Hardware';
import Contact from './Pages/Contact';

import './App.css';

function App() {



  return (
    <div className=''>
      <div >
        <Navbar/>
      </div>
      
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/hardware' element={<Hardware/>}/>
      <Route path='/software' element={<Software/>}/>
      <Route path="/contact" component={<Contact/>}/>
      <Route path="/login" component={<Login/>}/>
    
      </Routes>

    </div>
  );
}

export default App;
