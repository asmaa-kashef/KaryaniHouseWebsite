// components/ImageGalleryClient.tsx
'use client';

import React, { ReactElement } from "react";
import Image from "next/image";
import ImageGallery, { GalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageGalleryClientProps {
    images: string[];
    title: string;
    isArchitectGallery?: boolean;
}

const renderImageItem = (item: GalleryItem, title: string): ReactElement => (
    <Image
        src={item.original}
        alt={title}
        width={800}
        height={500}
        style={{
            objectFit: "none",
            width: "100%", // Use 100% for better responsiveness
            height: "100%", // Use 100% for better responsiveness
            maxHeight: "500px", // Maintain aspect ratio
            margin: "auto",
            display: "block",
            borderRadius: 8,
        }}
    />
);

export default function ImageGalleryClient({ images, title, isArchitectGallery = false }: ImageGalleryClientProps) {
    const galleryItems = images.map((img) => ({
        original: img,
        thumbnail: img,
        renderItem: (item: GalleryItem) => renderImageItem(item, title),
    }));

    return (
        <ImageGallery
            items={galleryItems}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={true}
            slideOnThumbnailOver={true}
            thumbnailPosition={isArchitectGallery ? "bottom" : "left"}
        />
    );
}