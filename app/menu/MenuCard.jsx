"use client";
import React from "react";
import Image from "next/image";

const MenuCard = ({ menu }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow">
        <div className="relative w-full h-48">
          <Image
            src={menu.image}
            alt={menu.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-orange-500 text-lg">{menu.price}</h3>
          <p className="font-semibold text-gray-800">{menu.name}</p>
          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            {menu.description}
          </p>
        </div>
      </div>
    );
  };
  
  export default MenuCard;