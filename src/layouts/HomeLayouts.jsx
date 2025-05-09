import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatesNews from "../components/LatesNews";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section>
            <LatesNews></LatesNews>
        </section>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
            <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayouts;
