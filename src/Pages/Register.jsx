import React from 'react'
import { Link } from 'react-router';

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-2xl py-4">
            Register your account
          </h2>
          <form className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            {/* Photo url  */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center py-3 text-[16px]">
              Already Have An Account ?{" "}
              <Link
                to={"/auth/login"}
                className="text-secondary font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register
