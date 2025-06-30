import React from "react";
import MainBtn from "../MainBtn";

const Home = () => {
  return (
    <div className="content first-content">
      <div className="container-fluid">
        <div className="col-md-3">
          <div className="author-image">
            <img src="/img/nthn.jpg" alt="Author Image" />
          </div>
        </div>
        <div className="col-md-9">
          <h2>Welcome to my website</h2>
          <p>
            Selamat datang di website saya. Di sini, Anda dapat mengenal saya
            lebih dekat, melihat portofolio saya, dan mengetahui perjalanan
            serta karya yang telah saya buat. Terima kasih telah berkunjung!
          </p>
          <MainBtn />
        </div>
      </div>
    </div>
  );
};

export default Home;
