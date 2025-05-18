"use client";
import React from "react";
import Icon from "./base/Icon";

const usefulLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Ticket Refund", href: "#" },
  { label: "Purchase Guide", href: "#" },
  { label: "Rules & Regulations", href: "#" },
];

const certifications = [
  "/cert1.png",
  "/cert2.png",
  "/cert3.png",
  "/cert4.png",
  "/cert5.png",
];

const socialLinks = [
  { icon: "fa-twitter", href: "#" },
  { icon: "fa-facebook", href: "#" },
  { icon: "fa-instagram", href: "#" },
  { icon: "fa-youtube", href: "#" },
  { icon: "fa-linkedin", href: "#" },
];

const Footer: React.FC = () => (
  <footer className="w-full bg-gray-50 border-t border-gray-200 pt-8 pb-4 text-gray-700">
    <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
      {/* App Download Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-right md:text-left">
          <span className="text-gray-8 h5">Bilito App</span><br />
          <span className="body-md text-gray-7">With the Bilito app, enjoy convenience and speed in booking your flight tickets.</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="inline-block">
            <img src="/appleStore.png" alt="Apple Store" width={182} height={66} className="rounded-md shadow" />
          </a>
          <a href="#" className="inline-block">
            <img src="/playStore.png" alt="Play Store" width={182} height={66} className="rounded-md shadow" />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8 border-t border-gray-200 pt-8">
        {/* Useful Links */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="font-bold mb-2">Useful Links</div>
          <ul className="space-y-1">
            {usefulLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-primary transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Address & Support */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <img src="/logo.svg" alt="Bilito Logo" width={100} className="mb-2" />
          <div className="font-bold text-primary text-lg mb-1">Bilito</div>
          <div className="mb-1">Support: <a href="tel:02198765432" className="text-primary">021-98765432</a></div>
          <div className="mb-1">Address: Tehran, Azadi Square, Azadi St., Chichun St., West Toos</div>
        </div>
      </div>

      {/* Certifications */}
      <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
        {certifications.map((src, idx) => (
          <img key={idx} src={src} alt={`certification-${idx+1}`} width={56} height={56} className="object-contain" />
        ))}
      </div>

      {/* Social & Email */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 gap-2">
        <div className="flex gap-6">
          {/* Replace with your icon components or use react-icons */}
          <a href="#" aria-label="Twitter" className=""><Icon name="twitter" /></a>
          <a href="#" aria-label="Facebook" className=""><Icon name="faceBook" /></a>
          <a href="#" aria-label="Instagram" className=""><Icon name="instagram" /></a>
          <a href="#" aria-label="YouTube" className=""><Icon name="youTube" /></a>
          <a href="#" aria-label="Linkedin" className=""><Icon name="linkedin" /></a>
          <a href="#" aria-label="Telegram" className=""><Icon name="telegram" /></a>
        </div>
        <div className="text-primary underline">Shiva.Arghvni1996@Gmail.com</div>
      </div>

      {/* Back to Top */}
      <div className="flex flex-col items-center mt-6">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full border border-gray-300 p-2 mb-1 hover:bg-gray-100 transition">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="text-sm text-gray-500">Back to Top</span>
      </div>
    </div>
  </footer>
);

export default Footer; 