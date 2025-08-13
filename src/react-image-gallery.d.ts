declare module "react-image-gallery" {
    import { ComponentType, ReactNode } from "react";

    export interface GalleryItem {
        original: string;
        thumbnail?: string;
        originalAlt?: string;
        thumbnailAlt?: string;
        description?: string;
        originalTitle?: string;
        thumbnailTitle?: string;
    }

    const ImageGallery: ComponentType<{
        items: GalleryItem[];
        showPlayButton?: boolean;
        showFullscreenButton?: boolean;
        showNav?: boolean;
        slideOnThumbnailOver?: boolean;
        thumbnailPosition?: "bottom" | "top" | "left" | "right";
        renderItem?: (item: GalleryItem) => ReactNode;
    }>;

    export default ImageGallery;
}
