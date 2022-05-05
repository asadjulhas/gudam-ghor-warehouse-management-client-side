import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "./firebaseinit";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";

function RequireAuth({ children }) {

  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if(loading) {
    return (
      <div className="spinner">
       <Spinner animation="grow" variant="danger" />
      </div>
    )
  }

  const sendVerifactionEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      toast('Email verification sent!')
    })
  }
  if(user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
    return(
      <div className="mt-5 d-block">
        <div className="verified_email py-5 px-4 bg-warning w-50 mx-auto rounded">
        <h2 className="text-danger mb-3">
          Please Verify your email
        </h2>
          <button onClick={sendVerifactionEmail} className="btn btn-success">Send Verification Email</button>
      </div>
      </div>
    )
  }
  if (!user?.uid) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;