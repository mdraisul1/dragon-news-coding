import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const FindUS = () => {
  return (
    <div>
      <h2 className="font-bold text-[20px]">Find Us On</h2>
      <div className="w-full flex flex-col mt-4">
        <button className="btn bg-base-100 justify-start">
          <FaFacebook size={22} />
          Facebook
        </button>
        <button className="btn bg-base-100 justify-start">
          <FaTwitter size={22} />
          Twitter
        </button>
        <button className="btn bg-base-100 justify-start">
          <FaInstagramSquare />
          Instagram
        </button>
      </div>
    </div>
  );
}

export default FindUS
