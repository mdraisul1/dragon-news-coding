import React from 'react'
import { Link } from 'react-router';

const NewsDetailsCart = ({news}) => {
    console.log(news);
  return (
    <div className="space-y-6">
      <img
        className="w-full h-[350px] rounded-md"
        src={news.image_url}
        alt=""
      />
      <h1 className="font-bold">{news.title}</h1>
      <p>{news.details}</p>
      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        All news in this category
      </Link>
    </div>
  );
}

export default NewsDetailsCart
