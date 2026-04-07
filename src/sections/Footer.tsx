"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#647985] text-white py-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Sisi Kiri: Navigasi Utama */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 order-2 md:order-1">
          <Link href="/" className="">
            Home
          </Link>
          <Link href="#about" className="">
            About
          </Link>
          <Link href="#menu" className="">
            Service
          </Link>
          <Link href="#contact" className="">
            Contact
          </Link>
        </nav>

        {/* Tengah: Logo Bulat */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24 bg-[#e8e2d6] p-2 rounded-full p-4 flex items-center justify-center overflow-hidden border-2 border-[#647985] shadow-xl">
            {/* Ganti src dengan path logo asli milik Rumah Restaurant */}
            <Image 
              src="/assets/images/logo.png" 
              alt="Rumah Restaurant Logo" 
              width={80} 
              height={80} 
              className="object-contain"
            />
          </div>
        </div>

        {/* Sisi Kanan: Legal & Privacy */}
        <div className="flex justify-center md:justify-end gap-4 order-3">
          <Link href="/legal" className="hover:underline underline-offset-4 decoration-[#c5a059]">
            Legal Notice
          </Link>
          <span className="">|</span>
          <Link href="/privacy" className="hover:underline underline-offset-4 decoration-[#c5a059]">
            Privacy Policy
          </Link>
        </div>

      </div>

      {/* Baris Bawah: Copyright (Opsional namun umum) */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 text-center">
        <p className="">
          &copy; {new Date().getFullYear()} Rumah Restaurant. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;