import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Checkbox, TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "./App";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  let [show, setShow] = useState(false);
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function entryCheck() {
    try {
      let ResetToken = localStorage.getItem("Random String");
      console.log(ResetToken);
      let res = await axios.get(`${url}/resetPasswordCheck`, {
        headers: { Authorization: `Bearer ${ResetToken}` },
      });
      console.log(res);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      navigate("/forget-password");
    }
  }
  useEffect(() => {
    entryCheck();
  }, []);

  async function create(password) {
    let payload = { password };
    try {
      let Token = localStorage.getItem("Random String");
      console.log(Token);
      let res = await axios.post(`${url}/resetPassword`, payload, {
        headers: { Authorization: `Bearer ${Token}` },
      });
      console.log(res);
      toast.success(res.data.message);
      localStorage.clear()
      navigate("/forget-password");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="login-main">
      <div className="formm-outer">
        <Form className="formm shadow-lg p-3 mb-5 bg-white rounded">
          <div style={{ textAlign: "center", fontFamily: "Montserrat" }}>
            <h2 style={{}}>Reset Your Password Here</h2>
          </div>
          <div className="login-fields">
            <TextField
              label="Password"
              type={show ? "text" : "password"}
              variant="outlined"
              style={{
                marginTop: "20px",
                fontSize: "15px",
              }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="checkbox-div">
              <Checkbox onClick={() => setShow(!show)} />
              <p>Show Password</p>
            </div>
            <Button
              style={{
                marginTop: "15px",
                backgroundColor: "#4e73df",
                borderColor: "#4e73df",
                color: "#fff",
                borderRadius: "20px",
              }}
              variant="primary"
              onClick={() => create(password)}
            >
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
