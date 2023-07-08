import React from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <div className="homepage-main">
      <div   className="homepage-btn-div" onClick={() => logout()}>
        <Button id="homepage-btn" variant="contained" style={{backgroundColor:"white",color:"black",margin:"10px"}}> <LogoutIcon fontSize="medium" /> Logout</Button> 
      </div>
      <div className="homepage">
        <h1>🎉🥳 The User Logged In Successfully 🎉🥳🎉🥳🎉 </h1>
      </div>
    </div>
  );
}
