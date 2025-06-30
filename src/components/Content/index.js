import React from "react";
import Home from "../Home";
import About from "../About";
import Entries from "../Entries";
import Contact from "../Contact";

const Content = ({ slideId }) => {
  const renderContent = () => {
    switch (slideId) {
      case "1":
        return <Home />;
      case "2":
        return <About />;
      case "3":
        return <Entries />;
      case "4":
        return <Contact />;
      default:
        return <div className="content">Content for slide {slideId}</div>;
    }
  };

  return renderContent();
};

export default Content;
