import React from "react";
import BookList from "../components/BookList";
import CategoryMenu from "../components/CategoryMenu";

const AboutUs = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <BookList />
    </div>
  );
};

export default AboutUs;