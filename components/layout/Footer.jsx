"use client";
import Link from 'next/link';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';

export default function Footer() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const smoothScroll = useCallback((e, targetId) => {
        e.preventDefault();
        if (isClient) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    }, [isClient]);

    return (
        <footer className="bg-white text-black py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div className="text-center sm:text-left">
                        <h3 className="text-black text-lg md:text-xl font-semibold mb-3 md:mb-4">DOMANG SUSHI</h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            Domang Sushi adalah salah satu restoran sushi terbaik yang ada di Gianyar yang sudah ada sejak tahun 2020. 
                            Domang adalah panggilan kecil dari owner Domang Sushi yang berasal dari Jembrana, Bali.
                        </p>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-black text-lg md:text-xl font-semibold mb-3 md:mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <a
                                    href="#about"
                                    onClick={(e) => smoothScroll(e, 'about')}
                                    className="hover:text-[#C06014] cursor-pointer text-sm md:text-base"
                                >
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-black text-lg md:text-xl font-semibold mb-3 md:mb-4">Sushi</h3>
                        <ul className="space-y-2 text-gray-600">
                            {['Home', 'Menu', 'Our Services', 'Location'].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        onClick={(e) => smoothScroll(e, item.toLowerCase().replace(' ', '-'))}
                                        className="hover:text-[#C06014] cursor-pointer text-sm md:text-base"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="text-center sm:text-left">
                        <h3 className="text-black text-lg md:text-xl font-semibold mb-3 md:mb-4">Contact Us</h3>
                        <div className="flex justify-center sm:justify-start space-x-4">
                            <Link href="https://www.instagram.com/domang_sushi/" target="_blank" className="hover:opacity-80">
                                <i className="text-[#C13584] text-2xl ion-logo-instagram"></i>
                            </Link>
                            <Link href="https://wa.me/+6281353997347" target="_blank" className="hover:opacity-80">
                                <i className="text-[#25D366] text-2xl ion-logo-whatsapp"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t-2 border-gray-300"></div>
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-6 md:pt-8 space-y-4 md:space-y-0">
                    <div className="order-2 md:order-1 relative w-[80px] h-[80px]">
                        <Image 
                            src="/logo.svg" 
                            alt="Sushi Domang Logo" 
                            fill
                            className="object-contain mx-auto md:mx-0"
                            sizes="(max-width: 768px) 80px, 80px"
                        />
                    </div>
                    <p className="text-xs md:text-sm text-gray-500 order-1 md:order-2">
                        2024 © Domang Sushi - All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}