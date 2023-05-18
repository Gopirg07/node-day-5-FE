import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import { toast } from 'react-toastify';
import ForgotPassword from "./ForgotPassword";

export const url=`https://password-rest-fu53.onrender.com/users`

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/forget-password" element={<ForgotPassword/>} />
        <Route path="reset-password/:id" element={<ResetPassword/>} />
        <Route path="/*" element={<Navigate to="/forget-password"/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
