import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebaseinit";
import "./Register.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleSignin from "../../../Hooks/GoogleSignin";
import PageTitle from "../../../Hooks/PageTitle";

const Register = () => {
  const [userLogin, loadingLogin, errorLogin] = useAuthState(auth);

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if(loadingLogin) {
    return (
      <div className="spinner">
       <Spinner animation="grow" variant="danger" />
      </div>
    )
  }

  if(userLogin) {
    navigate(from, { replace: true });
  }

  // Signin with email and pass
  const handleRegisterForm = (e) => {

  }

  return (
    <section className="section-tb-padding">
    <PageTitle title='Register' />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="register-area">
              <div className="register-box">
                <h1>Create account</h1>
                <p>Please register below account detail</p>
                <form onSubmit={handleRegisterForm}>
                  <input type="text" name="name" placeholder="Your name" />
                  <input type="text" name="email" placeholder="Email" />
                  <input type="text" name="password" placeholder="Password" />
                  <Button className="btn-style1">Create account</Button>
                </form>
              </div>
              <div className="register-account">
                <h4>Already an account holder?</h4>
                <Link to='/login' className="ceate-a">
                  Log in
                </Link>
                <div className="register-info">
                <span className="terms-link">
                    <span>*</span> Terms &amp; conditions.
                  </span>
                  <p>
                    Your privacy and security are important to us. For more
                    information on how we use your data read our 
                    <span>privacy policy</span>
                  </p>
                  <div className="text-center">
                    <GoogleSignin/>
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

export default Register;
