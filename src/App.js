import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import New from "./Components/Auth/NewPassword";
import Reset from "./Components/Auth/ResetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/newpassword" element={<New />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
