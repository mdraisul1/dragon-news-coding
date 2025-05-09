import React, { use } from 'react'
import { NavLink } from 'react-router';
const CategoriesPromise = fetch('/categories.json').then((res) => res.json());

const Categories = () => {

    const categories = use(CategoriesPromise);

  return (
    <div>
      <h2 className='font-bold'>All Categories ({categories.length})</h2>
      <div className='grid grid-cols-1 mt-5 gap-3'>
        {
          categories.map((category) => <NavLink key={category.id} className={'btn border-0 bg-base-100 shadow-none hover:bg-base-200 font-semibold text-accent'} to={`/category/${category.id}`}>{category.name}</NavLink>)
        }
      </div>
    </div>
  )
}

export default Categories
