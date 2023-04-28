import React from "react";
const BannerSection = () => {
    return(
        <section className="container Home-Banner">
            <div className="row ms-5">
                <div className="col-6">
                    <div className="Home-text">
                    <h1 className="h1">Hi My Name is Carms</h1>
                    <p> I have 2 years of experience creating and desgining graphics and Illustration.
                        Currently, I love to work on character design using application software like
                    Ibispaint, Illustrator, photoshop and canva.</p>
                    </div>
                </div>
                <div className="col-6">
                  <img src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/222783897_1061854407681120_3411865801675493282_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGewu8kngjV7nb1G0Ibjuw2GvpHeKlA3D0a-kd4qUDcPa3wTi5QU0yGdMNBMynW8QxTyEEKOHuvj5OQTlG5H5x-&_nc_ohc=-V4pKPKv4AkAX84Z5Yz&_nc_zt=23&_nc_ht=scontent.fmnl3-1.fna&oh=00_AfBm5xnATnw0QKiCaimI-SZnizkt_JFKEpyAkSKoQX1iEQ&oe=645163A5" height={500} width={500}/>
                </div>
            </div>
        </section>

    )
}
export default BannerSection;