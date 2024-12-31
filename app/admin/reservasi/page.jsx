"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, List, Calendar, User } from "lucide-react";

const ReservationPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-center border-b">
          <Image
            src="/logo.svg"
            alt="Domang Sushi"
            width={64}
            height={64}
            className="mx-auto mb-2"
          />
          <h1 className="text-xl font-bold text-orange-600">DOMANG SUSHI</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="mb-2">
              <Link
                href="/admin"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-100 rounded-md"
              >
                <Home className="w-5 h-5 mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/admin/menu"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-100 rounded-md"
              >
                <List className="w-5 h-5 mr-2" />
                Menus
              </Link>
            </li>
            <li>
              <Link
                href="/admin/reservasi"
                className="flex items-center px-4 py-2 text-white bg-orange-500 rounded-md"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reservation
              </Link>
            </li>
            <li>
              <Link
                href="/admin/tableReservation"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Table
              </Link>
            </li>
            <li>
              <Link
                href="/admin/user"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                <User className="w-5 h-5 mr-2" />
                User
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Reservation</h1>
            <p className="text-sm text-gray-500">Check member reservation</p>
          </div>
          <div>
            <p className="text-gray-600">Banajar</p>
            <span className="text-sm text-gray-400">Admin</span>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">All Reservation</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-md shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Nama</th>
                  <th className="px-4 py-2 text-left">No. Telepon</th>
                  <th className="px-4 py-2 text-left">Jumlah Orang</th>
                  <th className="px-4 py-2 text-left">No. Meja</th>
                  <th className="px-4 py-2 text-left">Tanggal</th>
                  <th className="px-4 py-2 text-left">Waktu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Binjek</td>
                  <td className="px-4 py-2 border-b">08531934521</td>
                  <td className="px-4 py-2 border-b">3 orang</td>
                  <td className="px-4 py-2 border-b">3</td>
                  <td className="px-4 py-2 border-b">23 August 2023</td>
                  <td className="px-4 py-2 border-b">13:00 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Total Reservation</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-md shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Tanggal</th>
                  <th className="px-4 py-2 text-left">Jumlah Orang</th>
                  <th className="px-4 py-2 text-left">Total Meja Dipesan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">23 August 2023</td>
                  <td className="px-4 py-2 border-b">65 orang</td>
                  <td className="px-4 py-2 border-b">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ReservationPage;
