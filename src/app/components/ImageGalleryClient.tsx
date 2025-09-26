"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryClientProps {
    images: string[];
    title: string;
    isArchitectGallery?: boolean;
    autoplayInterval?: number; // نضيف خاصية جديدة للتحكم في التبديل التلقائي
}

export default function ImageGalleryClient({ images, title, isArchitectGallery = false, autoplayInterval = 5000 }: ImageGalleryClientProps) {
    const [mainImage, setMainImage] = useState(images[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect لتفعيل التبديل التلقائي
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, autoplayInterval);
        return () => clearInterval(interval); // تنظيف المؤقت عند إزالة المكون
    }, [images.length, autoplayInterval]);

    // useEffect لتحديث الصورة الرئيسية عند تغيير الـ index
    useEffect(() => {
        setMainImage(images[currentIndex]);
    }, [images, currentIndex]);

    const handleThumbnailClick = (img: string, index: number) => {
        setMainImage(img);
        setCurrentIndex(index);
    };

    return (
        <div style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
            <div style={{ marginBottom: '20px' }}>
                <Image
                    src={mainImage}
                    alt={title}
                    width={800}
                    height={500}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "auto",
                        maxHeight: "500px",
                        borderRadius: 8,
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '10px',
                    flexDirection: isArchitectGallery ? 'row' : 'row',
                }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        onClick={() => handleThumbnailClick(img, index)}
                        style={{
                            width: isArchitectGallery ? '100px' : '75px',
                            height: isArchitectGallery ? '75px' : '75px',
                            cursor: 'pointer',
                            border: `2px solid ${mainImage === img ? '#ff914d' : 'transparent'}`,
                            borderRadius: 4,
                            overflow: 'hidden',
                            transition: 'border-color 0.2s ease',
                        }}
                    >
                        <Image
                            src={img}
                            alt={`${title} - Thumbnail ${index + 1}`}
                            width={100}
                            height={75}
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
