import { useEffect } from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';


function App() {

  const navigate = useNavigate();
  useEffect(()=>{
    const data = localStorage.getItem("token")
    if(data)
      navigate('/dashboard')
    else
      navigate('/')
  },[])

  return (
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
  );
}

export default App;
