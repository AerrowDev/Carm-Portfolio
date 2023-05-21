import React from "react";
const BannerSection = () => {
    return(
        <section className="container Home-Banner bg-cover bg-no-repeat bg-center">
            <div className="row ms-3">
                <div className="Home-text col-lg-6 col-md-6 col-sm-12 order-lg-1 order-md-1 order-sm-2">
                    <div className="Home-text">
                    <h1 className="banner-title h1 fw-bold ">Hi My Name is Carms</h1>
                    <p> I have 2 years of experience creating and desgining graphics and Illustration.
                        Currently, I love to work on character design using application software like
                    Ibispaint, Illustrator, photoshop and canva.</p>
                    <div className="button-about mt-4">
                        <button className="btn btn-primary btn-start"> View Works</button>
                    </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 order-lg-2 order-md-2 order-sm-1">
                  <img src="/assets/img/heroimg.jpg" height={500} width={500}/>
                </div>
            </div>
        </section>

    )
}
export default BannerSection;