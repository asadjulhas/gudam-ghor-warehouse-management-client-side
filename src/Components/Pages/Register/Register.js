import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebaseinit";
import "./Register.css";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <section className="section-tb-padding">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="register-area">
              <div className="register-box">
                <h1>Create account</h1>
                <p>Please register below account detail</p>
                <form>
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
                  <a href="terms-conditions.html" className="terms-link">
                    <span>*</span> Terms &amp; conditions.
                  </a>
                  <p>
                    Your privacy and security are important to us. For more
                    information on how we use your data read our
                    <a href="privacy-policy.html">privacy policy</a>
                  </p>
                  <div className="text-center">
                <Button onClick={()=> signInWithGoogle()} className="btn-style2 google_signin">{loading ? 'Please Wait' : 'Signin with google'} </Button>
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
