"use client";

import React from 'react';
import Image from 'next/image';

const Delivery = () => {
  const deliveryPlatforms = [
    {
      id: 'keeta',
      name: 'Keeta',
      description: 'Order via Keeta',
      logo: '/assets/images/keeta.png',
      url: 'https://gofood.link/a/your-restaurant-id',
    },
  ];

  const handleOpenApp = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className="bg-[#647985] py-20 px-5 font-sans text-center" id="delivery">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Delivery
        </h3>
        <p className="text-white mb-12">
          Fast, reliable, and right to your doorstep
        </p>

        {/* Delivery Grid */}
        <div className="flex justify-center">
          {deliveryPlatforms.map((platform) => (
            <div
              key={platform.id}
              onClick={() => handleOpenApp(platform.url)}
              className="group bg-white p-10 rounded-[20px] shadow-sm hover:shadow-2xl hover:shadow-[#c5a059]/20 hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center"
            >
              {/* Icon Wrapper */}
              <div className="h-20 w-[200px] flex items-center justify-center mb-5">
                <div className="relative w-40 h-20">
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-[#2b331f] mb-1">
                {platform.name}
              </h4>
              <p className="text-sm text-gray-400 mb-6">
                {platform.description}
              </p>

              {/* Order Button */}
              <span className="inline-block bg-[#2b331f] text-white py-2 px-7 rounded-full text-sm font-semibold group-hover:bg-[#647985] transition-colors duration-300">
                Order Now
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivery;