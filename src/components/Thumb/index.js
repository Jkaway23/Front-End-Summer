import React from "react";
import Image from "../Image";

const Thumb = () => {
  return (
    <div className="thumb">
      <a href="img/first_big_item.jpg" data-lightbox="image-1">
        <div className="hover-effect">
          <div className="hover-content">
            <h2>Number One</h2>
            <p>
              Quisque sit amet lacus in diam pretium faucibus. Cras vel justo
              lorem.
            </p>
          </div>
        </div>
      </a>
      <Image />
    </div>
  );
};

export default Thumb;
