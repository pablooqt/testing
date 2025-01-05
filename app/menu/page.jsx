"use client";

import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const menus = [
  {
    id: 1,
    name: "Sushi Denay",
    price: "Rp 15.000",
    category: "Sushi", 
    description: "Sushi Denay dibuat dengan olahan salmon yang lezat.",
    image: "/images/sushi.jpg",
  },
  {
    id: 2,
    name: "Ocha Tea",
    price: "Rp 10.000",
    category: "Minuman", 
    description: "Minuman ocha segar untuk menemani santapan Anda.",
    image: "/images/ocha.jpg",
  },
  {
    id: 3,
    name: "Paket Bento",
    price: "Rp 25.000",
    category: "Paket", 
    description: "Paket Bento komplit dengan lauk yang menggugah selera.",
    image: "/images/bento.jpg",
  },
  {
    id: 4,
    name: "Sushi Deluxe",
    price: "Rp 30.000",
    category: "Sushi", 
    description: "Sushi Deluxe dengan variasi premium.",
    image: "/images/sushi-deluxe.jpg",
  },
];

const MenusPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredMenus =
    selectedCategory === "Semua"
      ? menus 
      : menus.filter((menu) => menu.category === selectedCategory);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white mt-20">
        <header className="text-center py-6 border-b">
          <h1 className="text-4xl font-bold text-orange-500">Semua Menu</h1>
          <p className="text-sm text-gray-500 mt-2">
            Menu apa yang kamu inginkan hari ini?
          </p>
        </header>

        <div className="flex justify-center mt-6 space-x-4 flex-wrap">
          {["Semua", "Sushi", "Minuman", "Paket"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 font-semibold text-sm sm:text-base ${
                selectedCategory === category
                  ? "text-orange-500 border-b-4 border-orange-500"
                  : "text-gray-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
          {filteredMenus.map((menu) => (
            <MenuCard key={menu.id} menu={menu} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MenusPage;
