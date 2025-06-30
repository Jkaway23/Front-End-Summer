import React from "react";
import MainBtn from "../MainBtn";

const About = () => {
  return (
    <div className="content second-content">
      <div className="container-fluid">
        <div className="col-md-6">
          <div className="left-content">
            <h2>About Me</h2>
            <p>
              Saya lahir di Manado pada tanggal 6 Maret 2003. Sejak kecil, saya
              tumbuh dalam lingkungan yang mendorong kedisiplinan dan semangat
              belajar, yang menjadi dasar dalam membentuk karakter saya hingga
              saat ini.
            </p>
            <p>
              Saat ini saya merupakan mahasiswa aktif di Universitas Klabat.
              Saya fokus dalam pengembangan akademik dan praktikal, serta
              tertarik pada Front End.
            </p>
            <p>
              Saya memiliki minat dalam [sebutkan bidang, misalnya teknologi
              informasi, desain grafis, komunikasi, dsb.], serta terus mengasah
              keterampilan di bidang tersebut melalui berbagai proyek,
              pelatihan, dan pengalaman organisasi. Saya juga terbiasa bekerja
              secara individu maupun dalam tim.
            </p>
            <p>
              Saya ingin menjadi pribadi yang berdampak positif di lingkungan
              saya, baik secara profesional maupun pribadi. Melalui portofolio
              ini, saya berharap dapat menunjukkan potensi diri saya dan membuka
              peluang baru untuk berkembang lebih jauh di bidang yang saya
              minati.
            </p>
            <div className="main-btn">
              <a href="#3">Next Page</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-image">
            <img src="/img/firsya2.jpg" alt="About Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
