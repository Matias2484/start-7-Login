import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { VscKey } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";
import userLogin from "./login";

import "./App.css";

function App() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    userLogin(data);
    const token = window.localStorage.getItem("token");

    if (token) {
      swal({
        title: "¡Bienvenido! Sesión iniciada exitosamente",
        icon: "success",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            closeModal: true,
          },
        },
      });
    } else {
      swal({
        title: "Correo o contraseña incorrectos. Inténtelo de nuevo.",
        icon: "error",
      });
    }
  };

  return (
    <div className="App">
      {/* <div className="semi-circulo" /> */}
      <div className="container">
        <form className="login" onSubmit={handleSumbit}>
          <div className="login_text">
            <h1>Login</h1>
            <h3>Please enter your Login and your Password</h3>
          </div>
          <div className="form">
            <div className="mb-3">
              <FaRegUser className={"icon"} />
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Username or E-mail"
                required
                name="username"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <VscKey className="icon" />
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
                required
                name="password"
                onChange={handleChange}
              />
            </div>
            <h3 className="forgot">Forgot password?</h3>
          </div>
          <div className="form_dos">
            <div className="d-grid gap-2">
              <button id="login" className="btn" type="submit">
                Login
              </button>
              <div className="google_btn">
                <FcGoogle className="google_icon" />
                <button id="google" className="btn btn-primary" type="button">
                  Or sign-in with Google
                </button>
              </div>
            </div>
            <div className="not_member">
              <h3>
                Not a member yet? <span>Register!</span>
              </h3>
            </div>
          </div>
        </form>
      </div>
      {/* <div className="semi-circulo2" />
      <div className="semi-circulo3" />
      <div className="semi-circulo4" /> */}
    </div>
  );
}

export default App;
