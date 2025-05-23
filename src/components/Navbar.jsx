import { use, useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { authContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const { user, logOutUser } = use(authContext);

  const handleLogOut = () => {
    logOutUser()
    .then(() => {
      alert("user successfully logout");
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <div className="flex justify-between items-center">
      <div>{user?.email}</div>
      <div className="flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex items-center gap-5">
        <img src={userIcon} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-7">LogOut</button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-7">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar
