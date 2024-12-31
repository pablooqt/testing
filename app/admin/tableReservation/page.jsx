"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Menu, Calendar, User } from "lucide-react";

const TableReservationPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-sm">
        <div className="p-6 text-center border-b">
          <div className="relative w-16 h-16 mx-auto mb-2">
            <Image
              src="/logo.svg"
              alt="Domang Sushi"
              fill
              className="rounded-full"
            />
          </div>
          <h1 className="text-xl font-bold text-orange-600">DOMANG SUSHI</h1>
        </div>
        <nav className="p-4">
          <Link
            href="/admin"
            className="flex items-center px-4 py-2 mb-2 text-gray-700 hover:bg-orange-50 rounded-lg"
          >
            <Home className="w-5 h-5 mr-3" />
            Dashboard
          </Link>
          <Link
            href="/admin/menu"
            className="flex items-center px-4 py-2 mb-2 text-gray-700 hover:bg-orange-50 rounded-lg"
          >
            <Menu className="w-5 h-5 mr-3" />
            Menus
          </Link>
          <div className="relative">
            <Link
              href="/admin/reservasi"
              className="flex items-center px-4 py-2 mb-2 text-gray-700 bg-orange-100 rounded-lg"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Reservation
            </Link>
            <button className="w-full text-left px-8 py-2 mb-1 text-sm text-orange-700 bg-orange-50 rounded-lg">
              Table
            </button>
          </div>
          <Link
            href="/admin/user"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-50 rounded-lg"
          >
            <User className="w-5 h-5 mr-3" />
            Users
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Reservation</h1>
            <p className="text-sm text-gray-500">Check member reservation</p>
          </div>
          <div className="text-right">
            <p className="text-gray-800 font-medium">Banajar</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Table Reservation</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Tanggal</th>
                  <th className="text-left py-3 px-4">No.Telepon</th>
                  <th className="text-left py-3 px-4">Jumlah Orang</th>
                  <th className="text-left py-3 px-4">Jumlah Meja</th>
                  <th className="text-left py-3 px-4">Letak Meja</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">23 August 2023</td>
                  <td className="py-3 px-4 text-blue-600 underline">08531934521</td>
                  <td className="py-3 px-4">3 orang</td>
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">Indoor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                Edit Table
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                Tambah Table
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                Previous
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg">
                1
              </button>
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                2
              </button>
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                3
              </button>
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TableReservationPage;