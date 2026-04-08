"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <Mail size={20} />,
      content: "l.alhakeem@rumahrestaurant.com",
      link: "mailto:l.alhakeem@rumahrestaurant.com",
    },
    {
      id: 2,
      icon: <Mail size={20} />,
      content: "@rumahrestaurant",
      link: "https://www.instagram.com/rumahrestaurant_dxb/",
    },
    {
      id: 3,
      icon: <Phone size={20} />,
      content: "+9714-3293229",
      link: "tel:+97143293229",
    },
    {
      id: 4,
      icon: <Phone size={20} />,
      content: "+9715-65216026",
      link: "tel:+971565216026",
    },
    {
      id: 5,
      icon: <MapPin size={20} />,
      content: "S01, Wasl Bay, 33 Rebat St, Al Garhoud, Dubai",
      link: "https://www.google.com/maps/place/Rumah+Restaurant+Dubai",
    },
  ];

  return (
    <section className="bg-[#dad1c1] py-24 px-6 md:px-12 font-sans overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        
        {/* Kiri */}
        <div className="space-y-10">
          <h2 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
            Visit Us
          </h2>
          
          <div className="flex flex-col gap-8 font-playfair">
            {contactInfo.map((item) => (
              <div key={item.id} className="flex items-center gap-5 group">
                
                <div className="text-black w-6 flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <a 
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="cursor-pointer text-black lowercase text-base md:text-lg leading-relaxed hover:underline underline-offset-4 decoration-[#c5a059]"
                >
                  {item.content}
                </a>

              </div>
            ))}
          </div>
        </div>

        {/* Kanan (Map) */}
        <div className="space-y-6">

          {/* Map 1 */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl group/map">
            <a 
              href="https://maps.app.goo.gl/beiwRrFveuGANFHz6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image 
                src="https://cdn1.site-media.eu/images/0/24527406/kontak-fW-dYKvFm96ggYtWUIzxMg.jpeg" 
                alt="Map"
                fill
                className="object-cover transition-transform duration-700 group-hover/map:scale-110 group-hover/map:brightness-90"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-[#647985]/90 text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide border border-white/20 shadow-xl">
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>

          {/* Map 2 */}
          <div className="relative w-full h-[350px] rounded-2xl overflow-hidden border-[6px] border-white shadow-2xl group/map">
            <a 
              href="https://maps.app.goo.gl/beiwRrFveuGANFHz6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              <Image 
                src="/assets/images/map.png" 
                alt="Map"
                fill
                className="object-cover transition-transform duration-700 group-hover/map:scale-110 group-hover/map:brightness-90"
              />
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/map:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-[#647985]/90 text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide border border-white/20 shadow-xl">
                  Open in Google Maps
                </span>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;