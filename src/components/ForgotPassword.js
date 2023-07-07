import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../App";
import { Link } from "react-router-dom/dist";

export default function ForgotPassword() {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  const navigate = useNavigate();

  const done = async (email) => {
    let payload = { email };

    console.log("payload ==", payload);
    try {
      let res = await axios.post(`${url}/users/forgetPassword`, payload);
      console.log(res);
      localStorage.setItem("RandomString", res.data.randomS.randomString);
      toast.success(res.data.message);
      setShow(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setShow(false);
    }
  };

  return (
    <div className="login-main">
      <div className="formm-outer">
        {show ? (
          <Form className="formm shadow-lg p-3 mb-5 bg-white rounded">
            <div style={{ textAlign: "center", fontFamily: "Montserrat" }}>
              <h2 style={{}}>
                {" "}
                {show ? "Check Your Email" : "Forgot Your Password?"}{" "}
              </h2>

              <p className="forget-exp">
                {" "}
                {show
                  ? "A Link Has Been Sent To Your Mail Id To Reset Your Password !"
                  : "Enter your email address below, we'll send you a link to reset your password."}{" "}
              </p>
            </div>
            <div className="login-fields">
              <Button
                style={{
                  marginTop: "15px",
                  backgroundColor: "#4e73df",
                  borderColor: "#4e73df",
                  color: "#fff",
                  borderRadius: "20px",
                }}
                variant="primary"
                type="submit"
                onClick={() => navigate("/")}
              >
                Go Back
              </Button>
            </div>
          </Form>
        ) : (
          <Form className="formm shadow-lg p-3 mb-5 bg-white rounded">
            <div style={{ textAlign: "center", fontFamily: "Montserrat" }}>
              <h2 style={{}}>
                {" "}
                {show ? "Check Your Email" : "Forgot Your Password?"}{" "}
              </h2>

              <p className="forget-exp">
                {" "}
                {show
                  ? "A Link Has Been Sent To Your Mail Id To Reset Your Password !"
                  : "Enter your email address below, we'll send you a link to reset your password."}{" "}
              </p>
            </div>
            <div className="login-fields">
              <TextField
                label="Enter The Email"
                variant="outlined"
                style={{
                  marginTop: "20px",
                  fontSize: "15px",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                style={{
                  marginTop: "15px",
                  backgroundColor: "#4e73df",
                  borderColor: "#4e73df",
                  color: "#fff",
                  borderRadius: "20px",
                }}
                variant="primary"
                onClick={() => done(email)}
              >
                Submit
              </Button>
            </div>
            <div style={{ marginTop: "25px" }}>
              <div className="text-center mb-1">
                <Link to="/account-registration" underline="hover">
                  {" "}
                  Create A New Account{" "}
                </Link>
              </div>
              <div className="text-center">
                <Link to="/" underline="hover">
                  {" "}
                  Already Have A Account? Login.{" "}
                </Link>
              </div>
            </div>
          </Form>
        )}
      </div>
    </div>
  );
}
