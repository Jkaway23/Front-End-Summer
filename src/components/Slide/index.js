import React from "react";
import Content from "../Content";

const Slide = ({ id }) => {
  return (
    <div className="slide" id={id}>
      <Content slideId={id} />
    </div>
  );
};

export default Slide;
