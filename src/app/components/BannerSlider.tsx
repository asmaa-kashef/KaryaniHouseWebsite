import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

interface Slide {
    bg: string;
    alt: string;
    video: string;
}

interface BannerSliderProps {
    slides: Slide[];
    content: {
        buttonText: string;
        h1Keyword: string;
        services: string[];
    };
}

export default function BannerSlider({ slides, content }: BannerSliderProps) {
    return (
        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="w-full h-full"
        >
            {slides.map((item, idx) => (
                <SwiperSlide key={idx} className="relative w-full h-full">
                    <Image
                        src={item.bg}
                        alt={item.alt}
                        fill
                        priority={idx === 0}
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-white px-5 text-center">
                        <Link
                            href="#offer-form"
                            className="bg-[#ff914d] text-white font-bold rounded-lg mb-5 
              px-6 py-3 lg:px-10 lg:py-4 text-lg lg:text-2xl"
                        >
                            {content.buttonText}
                        </Link>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mb-5">
                            {content.h1Keyword}
                        </h1>

                        {content.services.map((service, i) => (
                            <div key={i} className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug mb-3">
                                {service}
                            </div>
                        ))}

                        <div className="mt-8">
                            <a
                                href={item.video}
                                data-fancybox="gallery"
                                className="w-16 h-16 flex items-center justify-center 
                bg-white text-[#ff914d] rounded-full text-2xl"
                            >
                                <i className="fa fa-play"></i>
                            </a>
                        </div>
                    </div>

                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                        <svg
                            viewBox="0 0 500 150"
                            preserveAspectRatio="none"
                            className="w-full h-[100px]"
                        >
                            <path
                                d="M0.00,49.98 C150.00,150.00 349.28,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                                className="fill-white"
                            ></path>
                        </svg>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
