import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUserInfo } from '../../Redux/Slice/UserSlice';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userNameRef = useRef();
  const userMailRef = useRef();
  const userPasswordRef = useRef();

  const reg = (e) => {
    e.preventDefault();

    const user =
     {
      userName: userNameRef.current.value,
      userMail: userMailRef.current.value,
      userPassword: userPasswordRef.current.value,
    };

    dispatch(setUserInfo(user));
    navigate('/login');
    
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="form my-3">
                <label htmlFor="userName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="Enter Your Name"
                  ref={userNameRef}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="userMail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="userMail"
                  placeholder="name@example.com"
                  ref={userMailRef}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="userPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                  placeholder="Password"
                  ref={userPasswordRef}
                />
              </div>
              <div className="my-3">
                <p>
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-underline text-info">
                    Login
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" onClick={reg}>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
