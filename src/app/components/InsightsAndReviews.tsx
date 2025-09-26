'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Types
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

interface Project {
    type: string; // Villa Construction, Structure Repair, Cladding
    name: string;
}

// Main Component
const InsightsAndReviews = ({
    content,
    projects,
}: {
    content?: TestimonialContent;
    projects?: Project[];
}) => {
    const safeContent = content || { testimonialSection: { title: '', heading: '' } };
    const safeProjects = projects || [];

    const [reviews, setReviews] = useState<TestimonialItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    // Fetch reviews
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api'); // تأكدي إن مسار الـ API صحيح
                if (!response.ok) throw new Error('Failed to fetch reviews');
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
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setLoading(false);
            }
        };
        fetchReviews();
    }, []);

    // Slider logic
    useEffect(() => {
        if (reviews.length > 1) {
            const interval = setInterval(() => {
                setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            }, 3500); // Autoplay speed
            return () => clearInterval(interval);
        }
    }, [reviews]);

    const totalProjects = safeProjects.length;
    const villaCount = safeProjects.filter(p => p.type === 'Villa Construction').length;
    const structureCount = safeProjects.filter(p => p.type === 'Structure Repair').length;
    const claddingCount = safeProjects.filter(p => p.type === 'Cladding').length;

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>Error loading reviews: {error}</p>;

    return (
        <section style={{ display: 'flex', gap: '40px', padding: '80px', background: '#FFF5E6' }}>
            {/* Insight on the Left */}
            <div style={{ flex: 1 }}>
                <div style={{ background: '#fff', padding: '30px', borderRadius: '20px', border: '4px solid #d97706' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Projects Insight</h3>
                    <p><strong>Total Projects:</strong> {totalProjects}</p>
                    <p><strong>Villa Construction:</strong> {villaCount}</p>
                    <p><strong>Structure Repair:</strong> {structureCount}</p>
                    <p><strong>Cladding:</strong> {claddingCount}</p>
                </div>
            </div>

            {/* Reviews Slider on the Right */}
            <div style={{ flex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <span style={{ fontSize: '18px', color: '#ff914d', fontWeight: 'bold' }}>{safeContent.testimonialSection.title}</span>
                    <h2 style={{ fontSize: '32px', color: '#ff914d' }}>{safeContent.testimonialSection.heading}</h2>
                </div>

                {reviews.length > 0 && (
                    <div style={{ position: 'relative' }}>
                        {reviews.map((item, idx) => (
                            <div
                                key={idx}
                                style={{
                                    transition: 'opacity 0.6s ease-in-out',
                                    opacity: idx === currentReviewIndex ? 1 : 0,
                                    position: idx === currentReviewIndex ? 'relative' : 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    minHeight: '320px',
                                }}
                            >
                                <div
                                    style={{
                                        background: '#fff',
                                        borderRadius: '20px',
                                        padding: '35px',
                                        border: '5px solid #d97706',
                                        textAlign: 'center',
                                        height: '100%',
                                        boxShadow: '0 6px 18px rgba(0,0,0,0.05)',
                                    }}
                                >
                                    <div style={{ fontSize: '18px', fontStyle: 'italic', color: 'orange', marginBottom: '20px' }}>
                                        “{item.text}”
                                    </div>
                                    <div>
                                        <div style={{ marginBottom: '10px' }}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={80}
                                                height={80}
                                                style={{ borderRadius: '50%', border: '3px solid #d97706' }}
                                            />
                                        </div>
                                        <h5 style={{ fontSize: '20px', fontWeight: 600, color: '#111', marginBottom: '5px' }}>
                                            {item.name}
                                        </h5>
                                        <span style={{ display: 'block', color: '#666', marginBottom: '10px' }}>{item.date}</span>
                                        <span>
                                            {Array(item.rating).fill(0).map((_, i) => (
                                                <span key={i} style={{ color: '#f59e0b', fontSize: '20px', margin: '0 1px' }}>
                                                    ★
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default InsightsAndReviews;
