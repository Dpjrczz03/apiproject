import './App.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Home from "./components/home";
import Carddetail from "./components/carddetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id" element={<Carddetail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
