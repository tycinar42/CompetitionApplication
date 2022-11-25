import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import { useSelector } from "react-redux";
function App() {
  /**
   * Eğer kullanıcı oturum açmamışsa ne olacak?
   * 
   */
  
  const islogin = useSelector(state=> state.auth.isAuthenticated) 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={islogin ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
