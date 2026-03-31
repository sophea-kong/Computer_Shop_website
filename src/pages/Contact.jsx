import { useState } from "react"
import Navbar from '../components/NavBar'
import '../styles.css'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="flex flex-col justify-center px-10 py-15 gap-5 border-y border-gray-300"
        style={{ background: "linear-gradient(to bottom right, #fbfef9 50%, #296eb4)" }}>
        <h1 style={{ color: "#000300" }}>Contact the Shop</h1>
        <p className="!text-[25px]" style={{ color: "#296eb4" }}>
          Have questions? We're here to help you build your perfect PC.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10" style={{ background: "#fbfef9" }}>

        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <h2 className="text-2xl font-bold" style={{ color: "#000300" }}>Get in Touch</h2>

          <div className="flex flex-col gap-4">

            {/* Phone */}
            <div className="border border-gray-300 rounded-[15px] p-4 flex items-start gap-4" style={{ background: "#fbfef9" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "#e8f1fa", color: "#296eb4" }}>
                <Phone size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#000300" }}>Phone</p>
                <p className="text-sm" style={{ color: "#296eb4" }}>+855 (0) 123-4567</p>
                <p className="text-sm text-gray-400">Mon-Sat: 9am – 8pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="border border-gray-300 rounded-[15px] p-4 flex items-start gap-4" style={{ background: "#fbfef9" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "#fef0e6", color: "#ff8811" }}>
                <Mail size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#000300" }}>Email</p>
                <p className="text-sm" style={{ color: "#296eb4" }}>pcbuildershopkosupport@gmail.com</p>
                <p className="text-sm text-gray-400">24-hour response time</p>
              </div>
            </div>

            {/* Store Location */}
            <div className="border border-gray-300 rounded-[15px] p-4 flex items-start gap-4" style={{ background: "#fbfef9" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "#e8f1fa", color: "#296eb4" }}>
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#000300" }}>Store Location</p>
                <p className="text-sm text-gray-500">2nd Bridge, Prek Leab</p>
                <p className="text-sm text-gray-400">Phnom Penh, Cambodia</p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="border border-gray-300 rounded-[15px] p-4 flex items-start gap-4" style={{ background: "#fbfef9" }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "#fef0e6", color: "#ff8811" }}>
                <Clock size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#000300" }}>Opening Hours</p>
                <p className="text-sm text-gray-500">Monday – Friday: 9:00 AM – 8:00 PM</p>
                <p className="text-sm text-gray-500">Saturday: 10:00 AM – 6:00 PM</p>
                <p className="text-sm text-gray-400">Sunday: Closed</p>
              </div>
            </div>

          </div>

          
          <div className="rounded-[15px] p-5" style={{ background: "#296eb4" }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
              style={{ background: "rgba(255,255,255,0.18)" }}>
              <MessageCircle size={22} color="white" />
            </div>
            <p className="font-bold text-white text-base mb-1">Quick Support</p>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)" }}>
              Get instant answers through our chat platforms
            </p>
            <div className="flex gap-3">
              {/* BUG FIX: Changed from <button> to <a> for the Telegram link */}
              <a
                href="https://t.me/sopia_00"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-white text-sm font-semibold py-2 rounded-lg transition text-center"
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}>
                Telegram
              </a>
            </div>
          </div>

        
        {/* BUG FIX: Updated Maps URL to work properly */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=CADT+Innovation+Center+Phnom+Penh"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-300 rounded-[15px] h-48 flex flex-col items-center justify-center gap-2 transition"
          style={{ background: "#f3f4f6", textDecoration: "none" }}
          onMouseEnter={e => e.currentTarget.style.background = "#e8f1fa"}
          onMouseLeave={e => e.currentTarget.style.background = "#f3f4f6"}>
          <MapPin size={38} color="#296eb4" />
          <p className="text-sm font-semibold" style={{ color: "#296eb4" }}>View CADT on Google Maps</p>
          <p className="text-xs text-gray-400">Innovation Center · Phnom Penh</p>
        </a>

        </div>

        
        <div className="lg:col-span-1 border border-gray-300 rounded-[15px] p-7 shadow-sm h-fit"
          style={{ background: "#fbfef9" }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#000300" }}>Send a Message</h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#000300" }}>Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-lg px-3 py-2 text-sm placeholder-gray-400 outline-none border-none"
                style={{ background: "#f3f4f6", color: "#000300" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#000300" }}>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full rounded-lg px-3 py-2 text-sm placeholder-gray-400 outline-none border-none"
                style={{ background: "#f3f4f6", color: "#000300" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#000300" }}>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What can we help you with?"
                className="w-full rounded-lg px-3 py-2 text-sm placeholder-gray-400 outline-none border-none"
                style={{ background: "#f3f4f6", color: "#000300" }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: "#000300" }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows={4}
                className="w-full rounded-lg px-3 py-2 text-sm placeholder-gray-400 outline-none border-none resize-none"
                style={{ background: "#f3f4f6", color: "#000300" }}
              />
            </div>

            <button
              type="submit"
              className="flex py-2 px-4 rounded-lg gap-2 items-center justify-center font-semibold text-sm transition"
              style={{ background: "#296eb4", color: "#fbfef9" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 15px rgba(41, 110, 180, 0.55)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              <Send size={15} />
              Send Message
            </button>

          </form>

          {/* Response Note */}
          <div className="mt-4 border border-gray-300 rounded-lg px-4 py-3 text-sm"
            style={{ color: "#000300" }}>
            <span className="font-bold">Response Time: </span>
            We typically respond within 24 hours during business days.
          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #e5e7eb", background: "#fbfef9" }} className="mt-4">
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="col-span-2 md:col-span-1">
            <p className="font-bold text-base mb-3" style={{ color: "#000300" }}>PC Builder Shop</p>
            <p className="text-sm leading-relaxed text-gray-400">
              Build your dream PC with compatible parts and expert support.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3" style={{ color: "#000300" }}>Shop</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700">Build a PC</a></li>
              <li><a href="#" className="hover:text-gray-700">Browse Parts</a></li>
              <li><a href="#" className="hover:text-gray-700">Prebuilt Systems</a></li>
              <li><a href="#" className="hover:text-gray-700">Deals & Offers</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3" style={{ color: "#000300" }}>Support</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-700">Build Guide</a></li>
              <li><a href="#" className="hover:text-gray-700">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-700">Warranty Info</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3" style={{ color: "#000300" }}>Company</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-gray-700">About Us</a></li>
              <li><a href="#" className="hover:text-gray-700">Careers</a></li>
              <li><a href="#" className="hover:text-gray-700">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-700">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="py-4 text-center text-sm text-gray-400"
          style={{ borderTop: "1px solid #e5e7eb" }}>
          © 2026 PC Builder Shop. All rights reserved.
        </div>
      </footer>
    </>
  )
}