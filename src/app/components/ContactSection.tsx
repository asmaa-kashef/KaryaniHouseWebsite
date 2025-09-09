'use client';
import React from "react";
import { usePathname } from "next/navigation";

export default function ContactSection() {
    const pathname = usePathname();
    const lang = pathname.startsWith("/ar") ? "ar" : "en";
    const isArabic = lang === "ar";

    const translations = {
        en: {
            informer: "Informer",
            title: "Contact Us",
            placeholders: {
                name: "Name",
                phone: "Phone",
                company: "Company",
                email: "Email",
                message: "Message",
            },
            submit: "Submit",
            locationTitle: "Location",
            locationText: "Alniyadi Building, 6th Floor, Office 602\nAirport Road, Abu Dhabi, UAE",
            callTitle: "Call Us",
            callNumber: "+971 50 660 7159",
            emailTitle: "Email",
            email: "info@karyani-house.com",
        },
        ar: {
            informer: "إعلام",
            title: "اتصل بنا",
            placeholders: {
                name: "الاسم",
                phone: "رقم الهاتف",
                company: "الشركة",
                email: "البريد الإلكتروني",
                message: "الرسالة",
            },
            submit: "إرسال",
            locationTitle: "الموقع",
            locationText: "مبنى النيادي، الطابق السادس، مكتب 602\nطريق المطار، أبوظبي، الإمارات",
            callTitle: "اتصل بنا",
            callNumber: "+971 50 660 7159",
            emailTitle: "البريد الإلكتروني",
            email: "info@karyani-house.com",
        },
    };

    const t = translations[lang];

    return (
        <section className="contact-page-section" style={{ padding: "60px 0", background: "rgb(240, 240, 240)" }}>
            <div
                className="auto-container"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "30px",
                    alignItems: "stretch",
                    direction: isArabic ? "rtl" : "ltr",
                }}
            >
                {/* Form Column */}
                <div style={boxStyle}>
                    <div style={{ marginBottom: "20px" }}>
                        <span style={{ fontSize: "14px", color: "#ff6600", textTransform: "uppercase" }}>
                            {t.informer}
                        </span>
                        <h2 style={{ fontSize: "30px", margin: "10px 0", color: "#222" }}>{t.title}</h2>
                    </div>

                    <form method="post" action="#" id="contact-form">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gap: "15px",
                            }}
                        >
                            <input type="text" name="username" placeholder={t.placeholders.name} required style={inputStyle} />
                            <input type="text" name="phone" placeholder={t.placeholders.phone} required style={inputStyle} />
                            <input type="text" name="company" placeholder={t.placeholders.company} style={inputStyle} />
                            <input type="email" name="email" placeholder={t.placeholders.email} required style={inputStyle} />
                        </div>
                        <textarea
                            name="message"
                            placeholder={t.placeholders.message}
                            style={{ ...inputStyle, height: "120px", marginTop: "15px" }}
                        />
                        <button type="submit" style={buttonStyle}>
                            {t.submit}
                        </button>
                    </form>
                </div>

                {/* Map Column */}
                <div style={mapBoxStyle}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14453.230!2d54.374897!3d24.465204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2sae!4v1691245678900"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "400px" }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Contact Info */}
            <div
                className="contact-info"
                style={{
                    marginTop: "50px",
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                }}
            >
                <div style={infoBoxStyle}>
                    <h4 style={infoTitleStyle}>{t.locationTitle}</h4>
                    <p style={infoTextStyle}>{t.locationText}</p>
                </div>
                <div style={infoBoxStyle}>
                    <h4 style={infoTitleStyle}>{t.callTitle}</h4>
                    <p style={{ ...infoTextStyle, fontWeight: "bold", color: "#ff6600" }}>{t.callNumber}</p>
                </div>
                <div style={infoBoxStyle}>
                    <h4 style={infoTitleStyle}>{t.emailTitle}</h4>
                    <p style={infoTextStyle}>
                        <a href={`mailto:${t.email}`} style={{ color: "#ff6600", textDecoration: "none" }}>
                            {t.email}
                        </a>
                    </p>
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .auto-container {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-info {
                        grid-template-columns: 1fr !important;
                    }
                }
                button:hover {
                    background: #e65c00;
                }
            `}</style>
        </section>
    );
}

// Shared styles
const boxStyle: React.CSSProperties = {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)", // شادو للفورم
};

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.06)", // شادو داخلي للحقول
};

const buttonStyle: React.CSSProperties = {
    marginTop: "20px",
    background: "#ff6600",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)", // شادو للزر
};

const infoBoxStyle: React.CSSProperties = {
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
};

const infoTitleStyle: React.CSSProperties = {
    marginBottom: "12px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#222",
};

const infoTextStyle: React.CSSProperties = {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
};

const mapBoxStyle: React.CSSProperties = {
    background: "#fff",
    padding: 0,
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)", // شادو للخريطة
};
