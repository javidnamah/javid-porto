import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [tab, setTab] = useState(2);

  return (
    <>
      <div className="container py-16">
        {tab == 1 && (
          <div>
            <h1 className="border-bottom mt-5 text-dark display-6 pb-4 text-center">
              About Me
            </h1>
            <p className="text-dark fs-5 text-center">
              Perkenalkan saya Javid. Saya adalah seorang pelajar di MA
              al-mubarok Gilimanuk. Cita-cita saya untuk sekarang menjadi
              fullstack web development dan saya membuat portofolio ini untuk
              melihat perkembangan saya selama beberapa tahun kedepan.
            </p>
          </div>
        )}

        {tab == 2 && (
          <div>
            <h1 className="border-bottom mt-5 text-dark display-6 pb-4 text-center">
              About Me
            </h1>
            <p className="text-dark fs-5 text-center">
              beberapa hal yang sudah saya pelajari sedikit adalah html, css,
              dan javascript. untuk membantu dalam berbagai hal saya menggunakan
              bootstraps. untuk server saya menggunakan server gratis dari
              replit dan github.
            </p>
          </div>
        )}

        <div className="d-flex align-items-center justify-content-center">
          <div
            onClick={() => setTab(1)}
            className={
              "number-wrap mx-2 " + (tab == 1 ? "bg-primary text-white" : "")
            }
          >
            1
          </div>
          <div
            onClick={() => setTab(2)}
            className={
              "number-wrap mx-2 " + (tab == 2 ? "bg-primary text-white" : "")
            }
          >
            2
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
