import React from "react";
import MainBtn from "../MainBtn";

const Entries = () => {
  return (
    <div className="content third-content">
      <div className="container-fluid">
        <div className="col-md-12">
          <div className="row">
            <div className="first-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-content">
                      <h2>Front-End Development</h2>
                      <p>
                        Saya telah menyelesaikan proyek pengembangan antarmuka
                        pengguna (front-end) dengan menggunakan teknologi web
                        seperti HTML, CSS, dan JavaScript. Proyek ini berfokus
                        pada tampilan yang responsif dan pengalaman pengguna
                        yang intuitif.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-image">
                      <img src="/img/react.png" alt="first service" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-section">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="/img/css.png" alt="second service" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="right-content">
                      <h2>Mobile Application Development</h2>
                      <p>
                        Dalam proyek ini, saya merancang tampilan dan alur kerja
                        aplikasi mobile. Fokus utamanya adalah menciptakan
                        desain yang user-friendly dengan pendekatan UI/UX
                        modern, sehingga memudahkan pengguna dalam berinteraksi
                        dengan aplikasi.
                      </p>
                      <div className="main-btn">
                        <a href="#4">Next Page</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entries;
