import React from "react";

export default function ClientsAndVideoSection() {
    return (
        <>
            {/* Clients Section */}
            <section className="clients-section style-two">
                <div className="auto-container">
                    <div className="sponsors-outer">
                        <ul className="sponsors-carousel owl-carousel owl-theme">
                            {["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"].map((num, index) => (
                                <li className="slide-item" key={index}>
                                    <figure className="image-box">
                                        <a href="#"><img src={`/images/clients/${num}.png`} alt="" /></a>
                                    </figure>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section className="video-section">
                <div className="outer-box" style={{ backgroundImage: 'url(/images/background/9.jpg)' }}>
                    <div className="auto-container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title light">
                                        <span className="float-text">See Video</span>
                                        <h2>Campaign Video</h2>
                                    </div>
                                    <span className="title">We Give You The Best</span>
                                    <div className="text">
                                        Present all the speakers and participants in GenesisExpo`s beautiful layouts. Choose your favorite variant of layout and create your own. You can create also single speaker profile with all relevant information.
                                    </div>
                                </div>
                            </div>

                            <div className="video-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="video-box">
                                        <figure className="image">
                                            <img src="/images/resource/video-img.jpg" alt="Video Preview" />
                                            <a href="https://www.youtube.com/watch?v=Fvae8nxzVz4" className="link" data-fancybox="gallery">
                                                <span className="icon fa fa-play"></span>
                                            </a>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
