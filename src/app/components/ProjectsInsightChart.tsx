'use client';

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// ---------- Types ----------
interface BarPart {
  label: string;
  value: number;
  color: string;
}

interface ProjectBar {
  label: string;
  parts: BarPart[];
  icon?: string;
}

interface GoogleReview {
  author_name: string;
  profile_photo_url: string;
  text: string;
  rating: number;
  relative_time_description: string;
}

interface Review {
  author: string;
  text: string;
  rating: number;
  date: string;
}

// ---------- Translations ----------
const translations = {
  en: {
    insightsTitle: "Customer Reviews and Projects Insights",
    discoverText:
      "Discover the strength and growth of our projects! 🌟 Each project shows the completed work and ongoing progress clearly.",
    callToAction: "📞 Call Us Now",
    noReviews: "No reviews yet.",
    projectLabels: {
      villa: "Villa Construction",
      repair: "Structure Repair",
      cladding: "Cladding",
      completed: "Completed",
      inProgress: "In Progress",
    },
  },
  ar: {
    insightsTitle: "آراء العملاء وإحصائيات المشاريع",
    discoverText:
      "اكتشف قوة ونمو مشاريعنا! 🌟 كل مشروع يوضح الأعمال المنجزة والتقدم المستمر بوضوح.",
    callToAction: "📞 اتصل بنا الآن",
    noReviews: "لا توجد مراجعات بعد.",
    projectLabels: {
      villa: "بناء الفلل",
      repair: "ترميم الهياكل",
      cladding: "التكسية",
      completed: "مكتمل",
      inProgress: "قيد التنفيذ",
    },
  },
};

// ---------- Common Styles ----------
const cardStyles = {
  container: {
    border: "2px solid #ff914d",
    borderRadius: "18px",
    backgroundColor: "#fff",
    padding: "25px",
    width: "600px",
    height: "380px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    position: "relative" as const,
    overflow: "hidden",
  },
  heading: {
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "#ff914d",
    marginBottom: "15px",
    textAlign: "center" as const,
  },
  author: {
    fontWeight: 600,
    marginBottom: "8px",
    color: "#222",
  },
  text: {
    fontSize: "1rem",
    color: "#444",
    marginBottom: "10px",
    flexGrow: 1,
    overflowY: "auto" as const,
    lineHeight: 1.5,
  },
  meta: {
    fontSize: "0.85rem",
    color: "#777",
    marginTop: "10px",
  },
};

const buttonStyles = {
  base: {
    background: "#ff914d",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
};

// ---------- Reviews Card ----------
interface ReviewsCardProps {
  reviews: Review[];
  lang: "en" | "ar";
}

function ReviewsCard({ reviews, lang }: ReviewsCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const content = translations[lang];
  const isArabic = lang === "ar";

  const handleNext = () =>
    setCurrentIndex((prev) => (prev + 1) % reviews.length);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    if (reviews.length > 1) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [reviews]);

  return (
    <div
      style={{
        ...cardStyles.container,
        direction: isArabic ? "rtl" : "ltr",
        textAlign: isArabic ? "right" : "left",
      }}
    >
      <h3 style={cardStyles.heading}>⭐ {content.insightsTitle.split(" and ")[0]}</h3>

      {reviews.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>
          {content.noReviews}
        </p>
      ) : (
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                paddingBottom: "10px",
                opacity: currentIndex === idx ? 1 : 0,
                transform: `translateX(${100 * (idx - currentIndex)}%)`,
                transition: "opacity 0.6s ease, transform 0.6s ease",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <p style={cardStyles.author}>{rev.author}</p>
              <p style={cardStyles.text}>{rev.text}</p>
              <p style={cardStyles.meta}>
                {"⭐".repeat(rev.rating)} • {rev.date}
              </p>
            </div>
          ))}
        </div>
      )}

      {reviews.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <button onClick={handlePrev} style={buttonStyles.base}>
            &#8592;
          </button>
          <button onClick={handleNext} style={buttonStyles.base}>
            &#8594;
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- Main Component ----------
export default function InsightsAndReviews() {
  const pathname = usePathname();
  const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
  const content = translations[currentLang];
  const isArabic = currentLang === "ar";

  const data: ProjectBar[] = [
    {
      label: content.projectLabels.villa,
      icon: "🏠",
      parts: [
        { label: content.projectLabels.completed, value: 180, color: "#ff6b00" },
        { label: content.projectLabels.inProgress, value: 120, color: "#ffb366" },
      ],
    },
    {
      label: content.projectLabels.repair,
      icon: "🛠️",
      parts: [
        { label: content.projectLabels.completed, value: 150, color: "#ff914d" },
        { label: content.projectLabels.inProgress, value: 100, color: "#ffd1b3" },
      ],
    },
    {
      label: content.projectLabels.cladding,
      icon: "🧱",
      parts: [
        { label: content.projectLabels.completed, value: 130, color: "#00897b" },
        { label: content.projectLabels.inProgress, value: 70, color: "#4db6ac" },
      ],
    },
  ];

  const [animatedParts, setAnimatedParts] = useState<number[][]>(
    data.map((proj) => proj.parts.map(() => 0))
  );
  const [reviews, setReviews] = useState<Review[]>([]);

  // Animate bars
  useEffect(() => {
    let frame = 0;
    const maxFrames = 60;
    const interval = setInterval(() => {
      frame++;
      setAnimatedParts(
        data.map((proj) =>
          proj.parts.map((part) => {
            const progress = frame / maxFrames;
            const bounce = Math.sin(progress * Math.PI * 0.5) * part.value;
            return Math.min(Math.floor(bounce), part.value);
          })
        )
      );
      if (frame >= maxFrames) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  // Fetch Google Reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api");
        if (!response.ok) throw new Error("Failed to fetch reviews");

        const data = await response.json();
        const formatted: Review[] = data.reviews.map((rev: GoogleReview) => ({
          author: rev.author_name,
          text: rev.text,
          rating: rev.rating,
          date: rev.relative_time_description,
        }));
        setReviews(formatted);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <section
      style={{
        padding: "90px 20px",
        fontFamily: "'Segoe UI', sans-serif",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #f7f7f7, #eaeaea)",
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
          <h2
              style={{
                  fontWeight: 700,
                  fontSize: "2rem",
                  color: "#222",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.15)",
                  marginBottom: "60px",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: "10px",
              }}
          >
              {content.insightsTitle}
              <span
                  style={{
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "70px", // 🔹 عرض الخط
                      height: "3px",
                      backgroundColor: "#FF7A00", // أورنج براندينج
                      borderRadius: "2px",
                  }}
              ></span>
          </h2>


      {/* Flex Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Chart */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: "70px",
            padding: "0 10px",
            height: "420px",
          }}
        >
          {data.map((proj, idx) => (
            <div
              key={idx}
              style={{
                display: "inline-flex",
                flexDirection: "column-reverse",
                width: "80px",
                cursor: "pointer",
                marginBottom: "60px",
                position: "relative",
              }}
            >
              {proj.parts.map((part, j) => (
                <div
                  key={j}
                  style={{
                    height: `${animatedParts[idx][j]}px`,
                    background: part.color,
                    borderRadius: j === 0 ? "10px 10px 0 0" : "0",
                    boxShadow: `0 6px 18px ${part.color}80`,
                    border: "1px solid rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}

              {/* Total Bubble */}
              <div
                style={{
                  position: "absolute",
                  top: `-40px`,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff",
                  color: "#222",
                  borderRadius: "50%",
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
                  fontSize: "1rem",
                }}
              >
                {animatedParts[idx].reduce((a, b) => a + b, 0)}
              </div>

              {/* Labels */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-55px",
                  fontSize: "1rem",
                  color: "#222",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  fontWeight: 700,
                }}
              >
                {proj.icon && (
                  <span style={{ fontSize: "1.4rem" }}>{proj.icon}</span>
                )}
                <span>{proj.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Card */}
        <ReviewsCard reviews={reviews} lang={currentLang} />
      </div>

      {/* Call to Action */}
      <div
        style={{
          background: "linear-gradient(135deg, #ff914d, #ff6b00)",
          margin: "70px auto 0",
          maxWidth: "900px",
          padding: "40px 30px",
          borderRadius: "18px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "25px",
            fontWeight: 600,
            lineHeight: 1.6,
            color: "white",
          }}
        >
          {content.discoverText}
        </p>
        <a
          href="tel:0097150660715"
          style={{
            display: "inline-block",
            padding: "16px 40px",
            background: "#fff",
            color: "#ff6b00",
            textDecoration: "none",
            borderRadius: "50px",
            fontWeight: "700",
            fontSize: "1.1rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            transition: "all 0.3s ease",
          }}
        >
          {content.callToAction}
        </a>
      </div>
    </section>
  );
}
