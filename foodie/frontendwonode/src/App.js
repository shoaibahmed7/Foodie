import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePortal from "./components/Homeportal";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/home/*" element={<HomePortal/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
