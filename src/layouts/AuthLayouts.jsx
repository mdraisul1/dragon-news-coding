import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router';

const AuthLayouts = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto pt-4">
        <Navbar></Navbar>
      </header>
      <main className='w-11/12 mx-auto py-8'>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default AuthLayouts
