import React, { use, useEffect, useState } from 'react'
import Header from '../components/Header'
import NewsDetailsCart from '../components/NewsDetailsCart';
import RightAside from '../components/homeLayouts/RightAside';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news, setNews] = useState({});

    // console.log(data, id);

   useEffect(() => {
    const newsDetails = data.find((singNews) => singNews.id == id);
    setNews(newsDetails);
   },[id, data])

  return (
    <div>
      <nav>
        <Header></Header>
      </nav>
      <main className='w-11/12 mx-auto mt-8 grid grid-cols-12 gap-5'>
        <div className='col-span-9'>
          <h2>Dragon News</h2>
          <NewsDetailsCart news={news}></NewsDetailsCart>
        </div>
        <aside className='col-span-3'>
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
}

export default NewsDetails
