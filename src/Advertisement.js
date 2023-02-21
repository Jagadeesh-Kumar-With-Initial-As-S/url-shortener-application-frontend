import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Login from "./Routes/Login";

import Register from "./Routes/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActivateAccount from "./Routes/ActivateAccount";
import Dashboard from "./Routes/Dashboard";
import Passwordreset from "./Routes/Passwordreset";
import ResetPasswordPage from "./Routes/ResetPasswordPage";
import EnterURL from "./Routes/EnterURL";



function Advertisement() {
  return (
    <><p className="advertisement text-center">Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me, you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</p>
    </>
  );
}

export default Advertisement;