import React from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import imageLogo from "../../public/assets/img/download.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 text-center md:text-left">
          {/* Company Information */}
          <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-3">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <Image src={imageLogo} alt="Logo" className="w-10 h-10" />
              {/* Company Name */}
              <span className="text-2xl font-mono font-bold">KIRA JEWELRY</span>
            </div>
            <div className="text-gray-400 text-sm">
              <p>Hotline: 123123123</p>
              <p>Address: 12AS, Austin, 123</p>
              <p>Email: abc1234@fpt.edu.vn</p>
            </div>
          </div>

          {/* Policy Section */}
          <div className="space-y-2">
            <h2 className="text-base font-semibold">Policy</h2>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><a href="#" className="hover:text-white">Return and Refund</a></li>
              <li><a href="#" className="hover:text-white">Cancellation</a></li>
              <li><a href="#" className="hover:text-white">Delivery</a></li>
              <li><a href="#" className="hover:text-white">See more</a></li>
            </ul>
          </div>

          {/* Resource Section */}
          <div className="space-y-2">
            <h2 className="text-base font-semibold">Resources</h2>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><Link href="/" className="hover:text-white">Gold price</Link></li>
              <li><Link href="/" className="hover:text-white">Blogs</Link></li>
              <li><Link href="/" className="hover:text-white">Jewelry price</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-2">
            <h2 className="text-base font-semibold">Company</h2>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="contact" className="hover:text-white">Join us</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="space-y-2">
            <h2 className="text-base font-semibold">Support</h2>
            <ul className="text-gray-400 text-sm space-y-1">
              <li><Link href="/" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/" className="hover:text-white">Chat support</Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <span>&copy;2024, DIAMOND - JEWELRY - STORE.</span>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/profile.php?id=100028204926907" className="hover:text-white">
              <FaFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://github.com/Andy-doit/PetSpa_391" className="hover:text-white">
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.instagram.com/duyhoangto.37/" className="hover:text-white">
              <FaInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://www.linkedin.com/" className="hover:text-white">
              <FaLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
