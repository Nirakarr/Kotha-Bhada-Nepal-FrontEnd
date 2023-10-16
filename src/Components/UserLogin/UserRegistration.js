import React, { useState } from "react";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(""); // Add passwordError state
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  // Function to validate password
  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegistration = async () => {
    if (!email.trim() || !password.trim() || !retypePassword.trim()) {
      enqueueSnackbar(
        "Please enter valid username, password and retypepassword",
        {
          variant: "error",
        }
      );
      return;
    }

    setLoading(true);

    // Check if the password meets the requirements
    if (!isPasswordValid(password)) {
      setPasswordError(
        "Password must contain at least 8 characters, one lowercase letter, one uppercase letter, and one special symbol."
      );
      setLoading(false);
      return; // Do not proceed with registration if password is invalid
    }

    if (password !== retypePassword) {
      setPasswordError("Passwords do not match.");
      setLoading(false);
      return; // Do not proceed with registration if passwords do not match
    }

    try {
      const response = await axios.post("http://localhost:5000/user/signup", {
        email,
        password,
        retypePassword,
      });
      setLoading(false);

      if (response.status === 201) {
        enqueueSnackbar("User Registered Successfully", { variant: "success" });
        navigate("/userLogin");
      } else {
        enqueueSnackbar("User Registration Unsuccessfull", {
          variant: "error",
        });
        console.error(response);
      }
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("User Registration Unsuccessfull", {
        variant: "error",
      });
      console.error(error);
    }
  };

  return (
    <section
      className="h-100 gradient-form"
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
                      <h4 className="mt-1 mb-5 pb-1">User Registration</h4>
                    </div>

                    {loading && <Spinner />}

                    <form>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="form-control"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            setPasswordError(""); // Clear password error when user types
                          }}
                          className="form-control"
                          placeholder="Enter your password"
                        />
                        {passwordError && (
                          <p className="text-danger">{passwordError}</p>
                        )}
                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="retypePassword">
                          Retype Password
                        </label>
                        <input
                          type="password"
                          id="retypePassword"
                          value={retypePassword}
                          onChange={(e) => setRetypePassword(e.target.value)}
                          className="form-control"
                          placeholder="Retype your password"
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 text-black"
                          type="button"
                          onClick={handleRegistration}
                        >
                          Register
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4 text-black">
                        <p className="mb-0 me-2">Already have an account?</p>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => {
                            navigate("/userLogin");
                          }}
                        >
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRegistration;
