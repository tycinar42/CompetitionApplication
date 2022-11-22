import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import {Register} from './pages/Register';
import {Login} from './pages/Login';
import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector(state => state.auth.isAuthenticated);
  // console.log(isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {isLogin ? <Home /> : <Login />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/register' element = {<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
