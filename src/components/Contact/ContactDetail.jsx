const ContactDetail = () => {
  return (
    <>
      <div className="container py-16">
        <div className="row">
          <div className="col-md-7 mt-3">
            <h1 className="mt-5 text-dark display-6 pb-4">
              <span className="text-primary">My</span> Contact
            </h1>
            <p className="col-md-10 fs-5 text-dark">
              ini adalah sosial media saya. Anda dapat menghubungi saya disini
            </p>
          </div>
          <div className="col-md-5 mt-3 d-flex align-items-center justify-content-center">
            <div>
              <div className="mb-2">
                <a href="mailto:javidnam6@gmail.com" className="text-dark fs-4 text-decoration-none">
                  <i className="fa-regular fa-envelope"></i> javidnam6@gmail.com
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://www.facebook.com/javidnamah/"
                  target="_blank"
                  className="text-dark fs-4 text-decoration-none"
                >
                  <i className="fa-brands fa-facebook"></i> javidnamah
                </a>
              </div>
              <div className="mb-2">
                <a
                  href="https://www.instagram.com/idnam_/"
                  target="_blank"
                  className="text-dark fs-4 text-decoration-none"
                >
                  <i className="fa-brands fa-instagram"></i> @idnam_
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactDetail;
