"use client";
import React from "react";

export default function ContactSection() {
    return (
        <section className="contact-page-section">
            <div className="auto-container">
                <div className="row">
                    {/* Form Column */}
                    <div className="form-column col-lg-7 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="sec-title">
                                <span className="float-text">informer</span>
                                <h2>Contact Us</h2>
                            </div>

                            <div className="contact-form">
                                <form method="post" action="#" id="contact-form">
                                    <div className="row">
                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" name="username" placeholder="Name" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" name="phone" placeholder="Phone" required />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="text" name="company" placeholder="Company" />
                                        </div>
                                        <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                            <input type="email" name="email" placeholder="Email" required />
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <textarea name="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                            <button className="theme-btn btn-style-three" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="contact-info">
                                <div className="row">
                                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                        <div className="inner">
                                            <h4>Location</h4>
                                            <p>Alniyadi Building, 6th Floor, Office 602<br />Airport Road, Abu Dhabi, UAE</p>
                                        </div>
                                    </div>
                                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                        <div className="inner">
                                            <h4>Call Us</h4>
                                            <p>+971 50 660 7159</p>
                                        </div>
                                    </div>
                                    <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                        <div className="inner">
                                            <h4>Email</h4>
                                            <p><a href="mailto:info@karyani-house.com">info@karyani-house.com</a></p>
                                         
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="map-column col-lg-5 col-md-12 col-sm-12">
                        <div className="inner-column">
                            <div className="map-outer">
                                <div
                                    className="map-canvas"
                                    data-zoom="16"
                                    data-lat="24.451178"  // Approximate for Airport Road, Abu Dhabi
                                    data-lng="54.396389"
                                    data-type="roadmap"
                                    data-hue="#ffc400"
                                    data-title="Karyani House"
                                    data-icon-path="/images/icons/map-marker.png"
                                    data-content="Alniyadi Building, 6th Floor, Office 602, Abu Dhabi, UAE<br><a href='mailto:info@karyani-house.com'>info@karyani-house.com</a>"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
