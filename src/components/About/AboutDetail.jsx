const AboutDetail = () => {
    return (
        <>
            <div className='container py-16 pb-5'>
                <div className='row'>
                    <div className='col-md-8 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>Javid</span> Namah
                        </h1>
                        <p className='col-md-8 fs-5 text-dark'>
                            Saya adalah seorang fullstack developer yang baru bulan mei 2023 memulai untuk menggeluti bidang ini dan sangat tertarik untuk masuk dalam bidang it
                        </p>
                    </div>
                    <div className='col-md-4 mt-5 d-flex align-items-center justify-content-center'>
                        <img
                            src='public/images/javid.jpg'
                            alt='Foto Sendiri'
                            width='630'
                            height='450'
                            loading='lazy'
                            class='d-block mx-lg-auto img-fluid'></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutDetail;
