'use client';

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// ترجمة النصوص
const translations = {
    en: {
        title: "Book your free consultation now",
        heading: "Want to get in touch? <br /> Fill out the form",
        subtext: "and we will call you back",
        soon: "Soon!",
        formFields: {
            FirstName: "Enter your first name",
            LastName: "Enter your last name",
            Company: "Enter your company",
            Email: "Enter your email",
            PhoneNumber: "Enter your phone number",
            Message: "Enter your message"
        },
        dropdownOptions: ["Villa Construction", "Structure Repair", "Cladding"],
        submitButton: "Send Now",
        sending: "Sending...",
        success: "Message sent successfully!",
        error: "Failed to send message. Try again!",
        contactInfo: {
            locationTitle: "Location",
            locationText: "Alniyadi Building, 6th Floor, Office 602\nAirport Road, Abu Dhabi, UAE",
            callTitle: "Call Us",
            callNumber: "+971 50 660 7159",
            emailTitle: "Email",
            email: "info@karyani-house.com",
        }
    },
    ar: {
        title: "احجز استشارتك المجانية الآن",
        heading: "هل ترغب في التواصل؟ <br /> املأ النموذج",
        subtext: "وسوف نتصل بك قريباً",
        soon: "قريباً!",
        formFields: {
            FirstName: "أدخل اسمك الأول",
            LastName: "أدخل اسمك الأخير",
            Company: "أدخل اسم شركتك",
            Email: "أدخل بريدك الإلكتروني",
            PhoneNumber: "أدخل رقم هاتفك",
            Message: "أدخل رسالتك"
        },
        dropdownOptions: ["بناء الفلل", "ترميم الهياكل", "التكسية"],
        submitButton: "أرسل الآن",
        sending: "جارٍ الإرسال...",
        success: "تم إرسال الرسالة بنجاح!",
        error: "فشل في إرسال الرسالة. حاول مرة أخرى!",
        contactInfo: {
            locationTitle: "الموقع",
            locationText: "مبنى النيادي، الطابق السادس، مكتب 602\nطريق المطار، أبوظبي، الإمارات",
            callTitle: "اتصل بنا",
            callNumber: "+971 50 660 7159",
            emailTitle: "البريد الإلكتروني",
            email: "info@karyani-house.com",
        }
    }
};

// Dropdown component
function CustomSelect({ value, onChange, options }: { value: string, onChange: (v: string) => void, options: string[] }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{ position: "relative", width: "100%" }}>
            <div
                onClick={() => setOpen(!open)}
                style={{
                    padding: "14px 18px",
                    borderRadius: "25px",
                    background: "#ff8a00",
                    color: "#000",
                    cursor: "pointer",
                    fontWeight: "bold",
                    userSelect: "none",
                }}
            >
                {value}
            </div>
            {open && (
                <ul style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    position: "absolute",
                    width: "100%",
                    backgroundColor: "#000",
                    color: "#fff",
                    borderRadius: "15px",
                    maxHeight: "150px",
                    overflowY: "auto",
                    zIndex: 1000,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                }}>
                    {options.map((opt, idx) => (
                        <li
                            key={idx}
                            onClick={() => { onChange(opt); setOpen(false); }}
                            style={{ padding: "10px 15px", cursor: "pointer", borderRadius: "10px" }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#333"}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#000"}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function ContactSection() {
    const pathname = usePathname();
    const router = useRouter();
    const currentLang = pathname.startsWith("/ar") ? "ar" : "en";
    const content = translations[currentLang];

    const sheetURL = "https://script.google.com/macros/s/AKfycbxrUcITfQZSkhsobRC6eoVgHaGaozHJPqDsOljwYvZeUC_6gN4UkoNvwCJ137uGqp3lXA/exec";

    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Company: "",
        Email: "",
        PhoneNumber: "",
        Subject: content.dropdownOptions[0],
        Message: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDropdownChange = (value: string) => {
        setFormData(prev => ({ ...prev, Subject: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch(sheetURL, {
                method: "POST",
                body: new URLSearchParams(formData as Record<string, string>).toString(),
                headers: { "Content-Type": "application/x-www-form-urlencoded" }
            });
            const result = await res.json();

            if (res.ok && result.result === "success") {
                setFormData({ FirstName: "", LastName: "", Company: "", Email: "", PhoneNumber: "", Subject: content.dropdownOptions[0], Message: "" });

                // Redirect إلى صفحة الشكر حسب اللغة
                router.push(currentLang === "ar" ? "/ar/thank-you" : "/en/thank-you");
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section className="contact-page-section" style={{ padding: "60px 0", background: "rgb(240, 240, 240)" }}>
            <div className="auto-container">
                <style jsx>{`
                    .auto-container {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 30px;
                        align-items: stretch;
                        direction: ${currentLang === "ar" ? "rtl" : "ltr"};
                    }
                    @media (min-width: 768px) {
                        .auto-container {
                            grid-template-columns: 1fr 1fr;
                        }
                        .form-grid {
                            grid-template-columns: 1fr 1fr;
                        }
                        .contact-info-grid {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    .form-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 15px;
                    }
                `}</style>

                {/* Form Column */}
                <div style={boxStyle}>
                    <div style={{ marginBottom: "20px" }}>
                        <span style={{ fontSize: "14px", color: "#ff6600", textTransform: "uppercase" }}>
                            {content.title}
                        </span>
                        <h2 style={{ fontSize: "30px", margin: "10px 0", color: "#222" }}>
                            {content.heading.split('<br />')[0]}
                            <br />
                            {content.heading.split('<br />')[1]}
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <input type="text" name="FirstName" placeholder={content.formFields.FirstName} value={formData.FirstName} onChange={handleChange} style={inputStyle} required />
                            <input type="text" name="LastName" placeholder={content.formFields.LastName} value={formData.LastName} onChange={handleChange} style={inputStyle} required />
                            <input type="text" name="Company" placeholder={content.formFields.Company} value={formData.Company} onChange={handleChange} style={inputStyle} />
                            <input type="email" name="Email" placeholder={content.formFields.Email} value={formData.Email} onChange={handleChange} style={inputStyle} required />
                            <input type="text" name="PhoneNumber" placeholder={content.formFields.PhoneNumber} value={formData.PhoneNumber} onChange={handleChange} style={inputStyle} required />
                        </div>
                        <CustomSelect value={formData.Subject} onChange={handleDropdownChange} options={content.dropdownOptions} />
                        <textarea name="Message" placeholder={content.formFields.Message} value={formData.Message} onChange={handleChange} style={{ ...inputStyle, height: "120px", marginTop: "15px" }} />
                        <button type="submit" style={buttonStyle}>
                            {status === "loading" ? content.sending : content.submitButton}
                        </button>
                        {status === "error" && <p style={{ color: "#dc3545", textAlign: "center" }}>{content.error}</p>}
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
                    />
                </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info-grid" style={{
                marginTop: "50px",
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "20px",
            }}>
                <div style={infoBoxStyle}>
                    <h4 style={infoTitleStyle}>{content.contactInfo.locationTitle}</h4>
                    <p style={infoTextStyle}>{content.contactInfo.locationText}</p>
                </div>
                <div style={infoBoxStyle}>
                    <h4 style={infoTitleStyle}>{content.contactInfo.callTitle}</h4>
                    <p style={{ ...infoTextStyle, fontWeight: "bold", color: "#ff6600" }}>{content.contactInfo.callNumber}</p>
                </div>
                <div style={infoBoxStyle}>
                    <h4 style={infoTitleStyle}>{content.contactInfo.emailTitle}</h4>
                    <p style={infoTextStyle}>
                        <a href={`mailto:${content.contactInfo.email}`} style={{ color: "#ff6600", textDecoration: "none" }}>
                            {content.contactInfo.email}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

// Shared styles
const boxStyle: React.CSSProperties = {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
};

const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    outline: "none",
    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.06)",
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
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
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
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
};
