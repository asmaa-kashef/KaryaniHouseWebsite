'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

interface TestimonialContent {
    testimonialSection: {
        title: string;
        heading: string;
    };
}

interface GoogleReview {
    author_name: string;
    profile_photo_url: string;
    text: string;
    rating: number;
    relative_time_description: string;
}

interface TestimonialItem {
    text: string;
    name: string;
    image: string;
    date: string;
    rating: number;
}

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
};

const Reviews = ({ content }: { content: TestimonialContent }) => {
    const [reviews, setReviews] = useState<TestimonialItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api');
                if (!response.ok) throw new Error('Failed to fetch reviews from API');

                const data = await response.json();

                const formattedReviews = data.reviews.map((review: GoogleReview) => ({
                    text: review.text,
                    name: review.author_name,
                    image: review.profile_photo_url,
                    date: review.relative_time_description,
                    rating: review.rating,
                }));

                setReviews(formattedReviews);
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred.');
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>Error loading reviews: {error}</p>;

    const displayData = reviews.length > 0 ? reviews : [];

    return (
        <section className="testimonial-section-two">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="float-text">{content.testimonialSection.title}</span>
                    <h2>{content.testimonialSection.heading}</h2>
                </div>

                <Slider {...sliderSettings}>
                    {displayData.map((item, idx) => (
                        <div key={idx} className="testimonial-block-two">
                            <div className="inner-box">
                                <div className="text">“{item.text}”</div>
                                <div className="info-box">
                                    <div className="thumb">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                        />
                                    </div>
                                    <h5 className="name">{item.name}</h5>
                                    <span className="date">{item.date}</span>
                                    <span className="rating">
                                        {Array(item.rating)
                                            .fill(0)
                                            .map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* CSS styles */}
            <style jsx>{`
                .testimonial-section-two {
                    background: #fff5e6;
                    padding: 100px 0;
                }
                .auto-container {
                    max-width: 950px;
                    margin: 0 auto;
                }
                .sec-title {
                    text-align: center;
                    margin-bottom: 70px;
                }
                .sec-title h2 {
                    font-size: 34px;
                    font-weight: 800;
                    color: #d97706; /* أكتر وضوح */
                }
                .inner-box {
                    background-color: #fff;
                    border-radius: 22px;
                    padding: 50px 40px;
                    border: 5px solid #d97706;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
                    text-align: center;
                    min-height: 350px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .text {
                    font-size: 19px;
                    font-style: italic;
                    line-height: 1.9;
                    color: #ff7f00;
                    margin-bottom: 35px;
                }
                .thumb {
                    margin: 0 auto 18px;
                }
                .thumb :global(img) {
                    border-radius: 50%;
                    border: 3px solid #d97706;
                }
                .name {
                    margin-bottom: 6px;
                    font-size: 21px;
                    font-weight: 700;
                    color: #111;
                }
                .date {
                    display: block;
                    margin-bottom: 14px;
                    color: #666;
                }
                .rating span {
                    color: #f59e0b;
                    font-size: 22px;
                    margin: 0 2px;
                }

                /* Slider dots */
                :global(.slick-dots li button:before) {
                    font-size: 12px;
                    color: #bbb;
                    opacity: 1;
                }
                :global(.slick-dots li.slick-active button:before) {
                    color: #d97706;
                }

                /* 📱 Responsive */
                @media (max-width: 767px) {
                    .testimonial-section-two {
                        padding: 60px 0;
                    }
                    .inner-box {
                        padding: 28px 20px;
                        min-height: auto;
                    }
                    .text {
                        font-size: 16px;
                        line-height: 1.7;
                    }
                    .name {
                        font-size: 18px;
                    }
                    .thumb :global(img) {
                        width: 60px !important;
                        height: 60px !important;
                    }
                    .rating span {
                        font-size: 17px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Reviews;
