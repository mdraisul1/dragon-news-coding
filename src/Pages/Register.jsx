import React, { use } from 'react'
import { Link } from 'react-router';
import { authContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = use(authContext);
    // console.log(createUser);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            setUser(user);
            // console.log(user);
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
          <h2 className="text-center font-bold text-2xl py-4">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              autoComplete="username"
              className="input"
              placeholder="Name"
            />

            {/* Photo url  */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              autoComplete='photo'
              className="input"
              placeholder="Photo URL"
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              autoComplete='email'
              className="input"
              placeholder="Email"
            />

            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              className="input"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
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
