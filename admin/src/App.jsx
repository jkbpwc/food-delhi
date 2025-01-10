import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes,Route} from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Order from './pages/Order/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const url="http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <div className='flex flex-row'>
      <Sidebar/>
      <Routes>
        <Route path='/add' element={<Add url={url}/>}/>
        <Route path='/list' element={<List url={url}/>}/>
        <Route path='/order' element={<Order url={url}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
