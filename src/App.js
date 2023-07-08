
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";  
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
 
export const url=`https://node-day-05-be-re.onrender.com` 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/account-registration" element={<CreateAccount/>} />
        <Route path="/forget-password" element={<ForgotPassword/>} />
        <Route path="reset-password/:id" element={<ResetPassword/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/*" element={<Navigate to="/"/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
