import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'
import NewsCart from '../components/NewsCart';

const CategoryNews = () => {

  const {id} = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {

    if(id == '0'){
      setCategoryNews(data);
      return;
    }else if(id == '1'){
      const filterNews = data.filter((news) => news.others.is_today_pick == true);
      setCategoryNews(filterNews);
    }else{
      const filterNews = data.filter((news) => news.category_id == id);
      console.log(filterNews);
      setCategoryNews(filterNews);
    }
  },[data, id])

  return (
    <div>
      categories news - {categoryNews.length}
      <div className='grid grid-cols-1 gap-3'>
        {
          categoryNews.map((news) => <NewsCart news={news}></NewsCart>)
        }
      </div>
    </div>
  )
}

export default CategoryNews
