"use client";

import { useState, useEffect } from "react";
import $ from "jquery";

// Conditionally import Owl Carousel
if (typeof window !== 'undefined') {
    require('owl.carousel');
}

// Custom Dropdown Component
function CustomSelect({ value, onChange }) {
    const options = ["Villa Construction", "Structure Repair", "Cladding"];
    const [open, setOpen] = useState(false);

    return (
        <div style={{ position: "relative", width: "100%" }}>
            <div
                onClick={() => setOpen(!open)}
                style={{
                    padding: "12px 15px",
                    borderRadius: "10px",
                    background: "#ff8a00", // solid orange
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
                    borderRadius: "10px",
                    maxHeight: "150px",
                    overflowY: "auto",
                    zIndex: 1000,
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                }}>
                    {options.map((opt) => (
                        <li
                            key={opt}
                            onClick={() => { onChange(opt); setOpen(false); }}
                            style={{ padding: "10px 15px", cursor: "pointer" }}
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

export default function OfferForm() {
    // Your Google Apps Script Web App URL
    const sheetURL = "https://script.google.com/macros/s/AKfycbxrUcITfQZSkhsobRC6eoVgHaGaozHJPqDsOljwYvZeUC_6gN4UkoNvwCJ137uGqp3lXA/exec";

    const [formData, setFormData] = useState({
        FirstName: "",
        lastname: "",
        Email: "",
        PhoneNumber: "",
        Subject: "Villa Construction",
        Message: ""
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        if ($ && $.fn.owlCarousel) {
            $('.owl-carousel').owlCarousel({});
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDropdownChange = (value: string) => {
        setFormData({ ...formData, Subject: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch(sheetURL, {
                method: "POST",
                body: new URLSearchParams(formData as Record<string, string>).toString(),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            const result = await res.json();

            if (res.ok && result.result === "success") {
                setStatus("success");
                setFormData({ FirstName: "", lastname: "", Email: "", PhoneNumber: "", Subject: "Villa Construction", Message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <section className="offer-section" style={{
            backgroundImage: "url(/images/background/6.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "60px 0"
        }}>
            <div className="auto-container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: "row", gap: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>

                    {/* Left Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12" style={{ color: "#fff", flex: "1 1 45%" }}>
                        <div className="inner-column">
                            <span className="title">Book your free consultation now</span>
                            <h2>
                                <span>Want to get in touch? </span>
                                <br /> Fill out the form
                            </h2>
                            <br />
                            <div className="text">
                                <h2>and we will call you back</h2>
                            </div>
                            <br />
                            <span className="discount">Soon!</span>
                            <span className="title">
                                <h2>+9710506607159</h2>
                            </span>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="form-column order-last col-lg-6 col-md-12 col-sm-12"
                        style={{
                            flex: "1 1 50%",
                            background: "rgba(255,255,255,0.95)",
                            padding: "30px",
                            borderRadius: "15px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                            marginTop: "-40px"
                        }}>
                        <div className="inner-column">
                            <div className="discount-form">
                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                                    {["FirstName", "lastname", "Email", "PhoneNumber"].map((field) => (
                                        <input
                                            key={field}
                                            type={field === "Email" ? "email" : "text"}
                                            name={field}
                                            placeholder={
                                                field === "FirstName" ? "Enter your first name" :
                                                    field === "lastname" ? "Enter your last name" :
                                                        field === "Email" ? "Enter your email" :
                                                            "Enter your phone number"
                                            }
                                            required
                                            value={(formData as any)[field]}
                                            onChange={handleChange}
                                            style={{
                                                padding: "12px 15px",
                                                borderRadius: "10px",
                                                border: "1px solid #ccc",
                                                fontSize: "16px",
                                                outline: "none",
                                                transition: "0.3s",
                                                background: "#fefefe"
                                            }}
                                            onFocus={(e) => e.currentTarget.style.borderColor = "#ff8a00"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
                                        />
                                    ))}

                                    {/* Custom Dropdown */}
                                    <CustomSelect value={formData.Subject} onChange={handleDropdownChange} />

                                    <textarea
                                        name="Message"
                                        placeholder="Enter your message"
                                        value={formData.Message}
                                        onChange={handleChange}
                                        rows={5}
                                        style={{
                                            padding: "12px 15px",
                                            borderRadius: "10px",
                                            border: "1px solid #ccc",
                                            fontSize: "16px",
                                            outline: "none",
                                            background: "#fefefe",
                                            resize: "none",
                                            transition: "0.3s"
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = "#ff8a00"}
                                        onBlur={(e) => e.currentTarget.style.borderColor = "#ccc"}
                                    ></textarea>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        style={{
                                            background: "#ff8a00",
                                            color: "#fff",
                                            fontSize: "18px",
                                            padding: "12px",
                                            border: "none",
                                            borderRadius: "10px",
                                            cursor: "pointer",
                                            transition: "0.3s"
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    >
                                        {status === "loading" ? "Sending..." : "Send Now"}
                                    </button>

                                    {status === "success" && <p style={{ color: "#28a745", fontWeight: "bold", textAlign: "center" }}>Message sent successfully!</p>}
                                    {status === "error" && <p style={{ color: "#dc3545", fontWeight: "bold", textAlign: "center" }}>Failed to send message. Try again!</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
