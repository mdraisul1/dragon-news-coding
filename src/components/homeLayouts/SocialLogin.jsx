import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-primary w-full">
          <FaGoogle size={22} />
          Login With Google
        </button>
        <button className="btn btn-outline btn-secondary w-full">
          <FaGithub size={22} />
          Login With GitHub
        </button>
      </div>
    </div>
  );
}

export default SocialLogin
