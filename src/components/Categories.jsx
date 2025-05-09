import React, { use } from 'react'
const CategoriesPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {

    const categories = use(CategoriesPromise);

  return (
    <div>
      <h2 className='font-bold'>All Categories ({categories.length})</h2>
    </div>
  )
}

export default Categories
