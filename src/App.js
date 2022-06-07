import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
