const RecentWork = () => {
  return (
    <>
      <div className="container py-16 pt-5">
        <h1 className="border-bottom mt-5 mb-5 text-dark display-6 pb-4 text-center">
          Recent Work
        </h1>
        <div class="row gx-2 mb-5">
          <div class="col-12 col-lg-4">
            <p class="fw-semibold mb-1 fs-5 text-dark">CANCLEAN</p>
          </div>
          <div class="col-12 col-lg-8">
            <p class="fw-semibold fs-5 text-dark">
              web jualan sampah organik dan nonorganik
            </p>
            <p class="text-muted text-dark fw-light fs-5">
              <span>
                Membuat web yang menjual berbagai jenis sampah plastik dengan
                harga tertentu dan disertai waktu pengambilan atau diberitahukan
                tempat menukarkannya
              </span>
            </p>
            <a
              target="_blank"
              href="https://canclean.repl.id/"
              class="link-body fs-5 text-primary"
            >
              https://canclean.repl.id/
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentWork;
