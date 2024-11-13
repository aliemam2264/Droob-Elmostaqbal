import React from "react";
import ContactSection from "../components/ContactSection";
import contactHero from "../assets/support and communication/contactHero.png";
import { NavLink } from "react-router-dom";
import HeaderImage from "../components/HeaderImage";

const SupportAndCommunication = () => {
  return (
    <div className="bg-[#F8FBFB]" dir="rtl">
      <HeaderImage img={contactHero} title="تواصل معنا" />
      <ContactSection />
    </div>
  );
};

export default SupportAndCommunication;
