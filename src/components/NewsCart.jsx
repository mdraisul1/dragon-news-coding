import React from 'react'
import { FaShareAlt, FaEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiBookmark } from 'react-icons/ci';
import { Link } from 'react-router';

const NewsCart = ({news}) => {

    const {
    id, 
    author,
    title,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      {/* Author Info */}
      <div className="bg-base-200 p-3 flex justify-between items-center mb-4 rounded-md">
        <div className="flex items-center space-x-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="text-sm font-semibold">{author?.name}</h4>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().slice(0, 10)}
            </p>
          </div>
        </div>
        <div className='flex items-center gap-6'>
            <CiBookmark size={24} className="text-gray-500 cursor-pointer" />
            <FaShareAlt size={24} className="text-gray-500 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-3">{title}</h2>

      {/* Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-52 object-cover rounded-md mb-4"
      />

      {/* Description */}
      <p className="text-sm text-gray-600">
        {details.slice(0, 150)}...{" "}
        <Link to={`/news-details/${id}`} className="text-orange-500 font-medium cursor-pointer">
          Read More
        </Link>
      </p>

      {/* Footer: Rating and Views */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-1 text-orange-500">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className="text-sm" />
          ))}
          <span className="text-black ml-2 font-semibold">
            {rating?.number}
          </span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <FaEye className="mr-1" /> {total_view}
        </div>
      </div>
    </div>
  );
}

export default NewsCart
