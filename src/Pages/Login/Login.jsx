import "./Login.css";
import { Cloud, RestaurantRounded } from "@mui/icons-material";
import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { usePassword, useUserName } from "../../Features/loginValidators";
import { server } from "../../Features/config";
import { userExists } from "../../redux/reducer/authslice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";


const Login = () => {

  const [check, setcheck] = useState(""); // for errors in inputs
  const { user, setuser, userFlag, userErr } = useUserName("");
  const { pass, setpass, passFlag, passErr } = usePassword("");
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()


  const dispatch = useDispatch()

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!userFlag) {
      setcheck(userErr);
      return;
    } else if (!passFlag) {
      setcheck(passErr);
      return;
    }



    const toastId = toast.loading("Signing In...");
 
    setIsLoading(true);

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        `${server}/api/v1/user/login`,
        { username: user, password: pass },
        config
      );
      dispatch(userExists(data?.user));
      toast.success(data?.message, { id: toastId });
      console.log(data?.user)
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "something went wrong !", {
        id: toastId,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="backgroundImgContainer">
        <div className="loginCloudContainer">
          <Cloud
            sx={{
              width: "130px",
              height: "130px",
              fill: "grey",
              filter: "drop-shadow(0 0 20px rgba(1, 6, 0, 0.8))",
            }}
            className="loginCloud"
          />
        </div>
      </div>
      <div className="backgroundHouse"></div>{" "}
      <div className="wrapper">
        <form>
          <div className="github">Login / SignUp</div>
        </form>
        <form onSubmit={(e) => loginHandler(e)} className="form">
          <input
            type="text"
            placeholder="username"
            name="username"
            value={user}
            onChange={(e) => setuser(e.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={pass}
            onChange={(e) => setpass(e.currentTarget.value)}
          />
          <button onClick={(e) => loginHandler(e)}>Login</button>
          {check && (
            <span
              className="validationWarning"
              style={{ color: "red", fontWeight: "800" }}
            >
              {check}
            </span>
          )}
          <div style={{textShadow: "1px 1px 1px #333"}}>
            {"Your account will be created if you don't have one ..."}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
