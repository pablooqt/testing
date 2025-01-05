import React from 'react';
import Image from 'next/image';
import MenuItem from './MenuItem';
import Link from 'next/link';

export default function Menu() {
  return (
    <section id="menu" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 mb-8 md:mb-12">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2 relative h-48 sm:h-64 md:h-80">
            <Image
              src="/menusushi.svg"
              alt="Sushi Dish"
              layout="fill"
              className="rounded-lg object-contain"
              priority
            />
          </div>
          
          <div className="hidden md:block h-80 border-l-4 border-black" />
          
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Sensasi Sushi dengan Sentuhan Bali di{' '}
              <span className="text-[#FF7100]">Domang Sushi</span>
            </h1>
            <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 px-4 md:px-0">
              Domang Sushi Bali menyajikan sushi autentik dengan sentuhan khas Bali, 
              menggunakan bahan segar berkualitas tinggi untuk menghadirkan cita rasa 
              Jepang yang otentik di tengah keindahan pulau dewata.
            </p>
            <Link 
              href="/menu" 
              className="inline-block bg-[#FF7100] text-white px-6 py-2.5 rounded-lg font-bold shadow hover:bg-orange-500 transition-colors"
            >
              Lihat Menu
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8 md:pt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-8 md:mb-12 px-4 md:px-0">
          MENU POPULER
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <MenuItem 
            name="Salmon Nigiri" 
            price={35000} 
            imageSrc="/salmon-nigiri.png" 
          />
          <MenuItem 
            name="California Roll" 
            price={50000} 
            imageSrc="/api/placeholder/200/200" 
          />
          <MenuItem 
            name="Tuna Sashimi" 
            price={45000} 
            imageSrc="/api/placeholder/200/200" 
          />
          <MenuItem 
            name="Matcha Ice Cream" 
            price={25000} 
            imageSrc="/api/placeholder/200/200" 
          />
        </div>
      </div>
    </section>
  );
}