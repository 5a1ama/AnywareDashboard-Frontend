import { useEffect } from 'react';
import {Routes,Route, useNavigate} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import store from './Redux/store';

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
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
