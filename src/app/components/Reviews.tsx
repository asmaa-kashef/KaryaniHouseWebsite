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
                    background: #FFF5E6; /* ✅ خلفية رمادي فاتح */
                    padding: 90px 0;
                }
                .auto-container {
                    max-width: 950px;
                    margin: 0 auto;
                }
                .sec-title {
                    text-align: center;
                    margin-bottom: 60px;
                }
                .sec-title h2 {
                    font-size: 32px;
                    font-weight: 700;
                    color: #ff914d;
                }
                .inner-box {
                    background-color: #fff;
                    border-radius: 20px;
                    padding: 45px 35px;
                    border: 5px solid #d97706; /* ✅ بوردر برتقالي */
                    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
                    text-align: center;
                    min-height: 320px;
                }
                .text {
                    font-size: 18px;
                    font-style: italic;
                    line-height: 1.8;
                    color: orange;
                    margin-bottom: 30px;
                }
                .thumb {
                    margin: 0 auto 15px;
                }
                .thumb :global(img) {
                    border-radius: 50%;
                    border: 3px solid #d97706; /* ✅ برتقالي */
                }
                .name {
                    margin-bottom: 5px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #111;
                }
                .date {
                    display: block;
                    margin-bottom: 12px;
                    color: #666;
                }
                .rating span {
                    color: #f59e0b; /* أصفر/برتقالي للنجوم */
                    font-size: 20px;
                    margin: 0 1px;
                }

                /* Slider dots */
                :global(.slick-dots li button:before) {
                    font-size: 10px;
                    color: #bbb;
                    opacity: 1;
                }
                :global(.slick-dots li.slick-active button:before) {
                    color: #d97706; /* ✅ برتقالي */
                }

                /* 📱 موبايل */
                @media (max-width: 767px) {
                    .testimonial-section-two {
                        padding: 50px 0;
                    }
                    .inner-box {
                        padding: 25px 18px;
                        min-height: auto;
                    }
                    .text {
                        font-size: 15px;
                    }
                    .name {
                        font-size: 17px;
                    }
                    .thumb :global(img) {
                        width: 60px !important;
                        height: 60px !important;
                    }
                    .rating span {
                        font-size: 16px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Reviews;
