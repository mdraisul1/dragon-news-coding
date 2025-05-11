import React from 'react'
import Header from '../components/Header'
import NewsDetailsCart from '../components/NewsDetailsCart';
import RightAside from '../components/homeLayouts/RightAside';

const NewsDetails = () => {
  return (
    <div>
      <nav>
        <Header></Header>
      </nav>
      <main className='w-11/12 mx-auto mt-8 grid grid-cols-12'>
        <div className='col-span-9'>
          <h2>Dragon News</h2>
          <NewsDetailsCart></NewsDetailsCart>
        </div>
        <aside className='col-span-3'>
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
}

export default NewsDetails
