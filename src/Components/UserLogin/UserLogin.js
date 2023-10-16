import React, { useState, useContext, useEffect } from "react";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";
import NavBar1 from "../NavBar1";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { setAccount } = useContext(DataContext);

  // Check if the user already has an access token
  useEffect(() => {
    const accessToken = sessionStorage.getItem("accessToken");
    if (accessToken) {
      // Redirect to the desired route if an access token exists
      navigate("/userpost");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      enqueueSnackbar("Please enter both email and password.", {
        variant: "error",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
      setLoading(false);
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreshToken",
        `Bearer ${response.data.refreshToken}`
      );
      setAccount({
        email: response.data.email,
        password: response.data.password,
      });

      if (response.status === 200) {
        enqueueSnackbar("User Logged in Successfully", { variant: "success" });
        navigate("/userpost");
      } else {
        enqueueSnackbar("An error occurred. Please check the console.", {
          variant: "error",
        });
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("User Login Unsuccessful", {
        variant: "error",
      });
      console.log(error);
    }
  };
  return (
    <div>
      <NavBar1 />
      <section
        className="h-100 gradient-form mt-[50px]"
        style={{ backgroundColor: "#eee" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          style={{ width: "185px" }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">We are RoomFinders</h4>
                      </div>

                      {loading && <Spinner />}

                      <form>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            User Mail
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Phone number or email address"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 text-black"
                            type="button"
                            onClick={handleLogin}
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4 text-black">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                              navigate("/userRegister");
                            }}
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserLogin;
