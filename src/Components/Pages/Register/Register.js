import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebaseinit";
import "./Register.css";
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import GoogleSignin from "../../../Hooks/GoogleSignin";
import PageTitle from "../../../Hooks/PageTitle";
import { async } from "@firebase/util";

const Register = () => {
  const [errorMessage, setError] = useState('')
  const [userLogin, loadingLogin, errorLogin] = useAuthState(auth);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:  true});

  const [updateProfile, updating, error2] = useUpdateProfile(auth);

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
  const handleRegisterForm = async (e) => {
   
    e.preventDefault();
    setError('');
    setError(error?.message);
    const userName = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.confirmpassword.value;

    if(!userName) {
      setError('Please provide a name');
      return;
    }

    if(!email) {
      setError('Please provide a email');
      return;
    }

    if(!password) {
      setError('Please provide a password');
      return;
    }

    const validateEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validateEmail.test(email)) {
      setError('Please provide a valid email');
      return;
    }

    const validatePassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(!validatePassword.test(password)) {
      setError('Password contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number:');
      return;
    }

    if(password !== passwordConfirm) {
      setError('Password not match')
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: userName });
    if(user) {
      setError('Register Successfully, Login now.');
    } else (
      setError(error?.message)
    )

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
                  <input required type="text" name="name" placeholder="Your name" />
                  <input required type="email" name="email" placeholder="Email" />
                  <input required type="password" name="password" placeholder="Password" />
                  <input required type="password" name="confirmpassword" placeholder="Confirm password" />
                  <Form.Text className="text-muted mt-3 d-block">Password contain minimum Eight characters, at least one Uppercase letter, one Lowercase letter and one Number:
    </Form.Text>
                 {
                   errorMessage ? <p className="error_message">{errorMessage}</p> : ''
                 }
                  <button className="btn-style1">
                  {loading ?   <Spinner animation="border" variant="light"/>: 'Create account'}
                    </button>
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
