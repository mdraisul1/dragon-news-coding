import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homeLayouts/LeftAside";
import RightAside from "../components/homeLayouts/RightAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
            <LatesNews></LatesNews>
        </section>
        <nav className="w-11/12 mx-auto">
            <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-8 grid grid-cols-12">
        <aside className="col-span-3">
            <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
            <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
            <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
