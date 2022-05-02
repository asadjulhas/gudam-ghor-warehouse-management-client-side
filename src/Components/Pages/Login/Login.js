import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebaseinit";
import "./Login.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import GoogleSignin from "../../../Hooks/GoogleSignin";
import PageTitle from "../../../Hooks/PageTitle";

const Login = () => {
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

  return (
    <section className="section-tb-padding">
    <PageTitle title='Login' />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="register-area">
              <div className="register-box">
                <h1>Login</h1>
                <p>Please login below account detail</p>
                <form>
                  <input type="text" name="email" placeholder="Email" />
                  <input type="text" name="password" placeholder="Password" />
                  <Button className="btn-style1">Sign in</Button>
                  <Link to='' className="re-password">Request reset password?</Link>
                </form>
              </div>
              <div className="register-account">
                <h4>Don't have an account?</h4>
                <Link to='/register' className="ceate-a">
                Create account
                </Link>
                <div className="register-info">
                  <span className="terms-link">
                    <span>*</span> Terms &amp; conditions.
                  </span>
                  <p>
                    Your privacy and security are important to us. For more
                    information on how we use your data read our 
                    <span> privacy policy</span>
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

export default Login;
