import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../../assets/Logo/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-richblack-900 text-richblack-300 py-12">
      <div className="w-11/12 max-w-maxContent mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="space-y-4">
          <img src={logo} alt="Company Logo" className="h-10" />
          <p className="text-sm">Classic cuts with modern style</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.instagram.com/sunny8080_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/sunny80801/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black p-2 rounded-full"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Services</Link></li>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex items-start gap-2 text-sm mb-2">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <span>
              518 Acme St unit 101, Denton, TX 76205, United States
            </span>
          </div>
          <p className="text-sm mt-2">+1 940 808 1569</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to receive updates and news.
          </p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md text-black"
          />
          <button className="mt-2 w-full bg-yellow-400 text-black py-2 rounded-md font-semibold hover:bg-yellow-300">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-12 border-t border-richblack-700 pt-6 text-center text-sm">
        © 2023 PMC Barbershop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
