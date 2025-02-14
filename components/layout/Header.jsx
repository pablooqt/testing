"use client";
import Image from "next/image";
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

export default function Header() {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const smoothScroll = useCallback((targetId) => {
    if (isClient) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [isClient]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 shadow-md text-sm">
      <div className="max-w-6xl mx-auto px-4 flex items-center py-4">
        <Link href="/" className="flex-shrink-0">
          <div className="flex items-center space-x-2">
            <Image src="/newlogo.png" alt="Logo" width={60} height={64} />
            <h1 className="text-base font-bold">
              <span style={{ color: "#FF7100" }}>DOMANG</span>{" "}
              <span className="text-white">SUSHI</span>
            </h1>
          </div>
        </Link>

        <div className="hidden md:flex flex-grow justify-center">
          <nav>
            <ul className="flex space-x-6 text-white">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("hero");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("menu");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("about");
                  }}
                  className="hover:text-[#C06014]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("services");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("location");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Location
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="ml-auto mr-4">
          <Link
            href="/member"
            className="bg-white text-[#C06014] py-2 px-6 rounded-full hover:bg-[#AD4C10] focus:outline-none text-base"
          >
            Member
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-80 text-white py-4">
          <nav>
            <ul className="space-y-4 text-center">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("hero");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("menu");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("about");
                  }}
                  className="hover:text-[#C06014]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("services");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScroll("location");
                  }}
                  className="hover:text-[#C06014]"
                >
                  Location
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}