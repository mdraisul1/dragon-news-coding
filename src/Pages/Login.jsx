import React, { use } from 'react'
import { Link } from 'react-router';
import { authContext } from '../Provider/AuthProvider';

const Login = () => {

  const {userSingIn} = use(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    userSingIn(email, password)
    .then(result => {
      const user = result.user;
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })

  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-3xl py-4">
            Login your account
          </h2>
          <form onSubmit={handleLogin} className="fieldset">
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />
            {/* password  */}
            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            <p className='font-semibold text-center py-3 text-[16px]'>
              Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary font-semibold hover:underline'>Register</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login
