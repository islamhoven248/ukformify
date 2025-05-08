import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { doneAndReplace } from "../../Redux/Slice/UserSlice";


const SignIn = () => {

    const userReg = useSelector((state)=>state.User.userInfo)
    const userMailRef = useRef();
    const userPasswordRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
   
    
    const done = (e) => {
      e.preventDefault();
    
      const user = {
        userMail: userMailRef.current.value,
        userPassword: userPasswordRef.current.value,
      };
    
      const matchedUser = userReg.find(
        (u) => u.userMail === user.userMail && u.userPassword === user.userPassword
      );
    
      if (matchedUser) {
        dispatch(doneAndReplace(matchedUser));
        alert("Login successful");
        navigate('/');
      } else {
        alert("Invalid email or password");
      }
    };



  return (
    <>
      
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  ref={userMailRef}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  ref={userPasswordRef}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/signup" className="text-decoration-underline text-info">Register Now!</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={done} >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default SignIn;
