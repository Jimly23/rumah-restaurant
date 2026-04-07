'use client'

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/assets/images/bg-fix.png" // GANTI DENGAN PATH GAMBAR KAMU DI FOLDER PUBLIC
        alt="Pemandangan Interior Rumah Restaurant yang Asri"
        fill
        priority
        quality={100}
        className="object-cover object-center" // Gambar akan ditengah dan meng-cover area
      />
    </section>
  );
};

export default Hero;