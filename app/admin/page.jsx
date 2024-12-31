"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  List,
  Calendar,
  User,
  Users,
} from "lucide-react";

const Dashboard = () => {
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
          <h1 className="text-xl font-bold text-gray-700">DOMANG SUSHI</h1>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="mb-2">
              <Link
                href="/admin"
                className="flex items-center px-4 py-2 text-white bg-orange-500 rounded-md"
              >
                <Home className="w-5 h-5 mr-2" />
                Dashboard
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/admin/menu"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                <List className="w-5 h-5 mr-2" />
                Menus
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/admin/reservasi"
                className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reservation
              </Link>
            </li>
            <li className="mb-2">
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
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div>
            <p className="text-gray-600">Banajar</p>
            <span className="text-sm text-gray-400">Admin</span>
          </div>
        </header>

        <section className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center justify-between p-4 bg-orange-500 text-white rounded-lg shadow-md">
            <div>
              <h2 className="text-3xl font-bold">40</h2>
              <p>Total Menus</p>
            </div>
            <List className="w-10 h-10" />
          </div>
          <div className="flex items-center justify-between p-4 bg-orange-500 text-white rounded-lg shadow-md">
            <div>
              <h2 className="text-3xl font-bold">120</h2>
              <p>Total Members</p>
            </div>
            <Users className="w-10 h-10" />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-700 mb-4">Our Member</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-md shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Username</th>
                  <th className="px-4 py-2 text-left">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Bajarsandes@gmail.com</td>
                  <td className="px-4 py-2 border-b">DenaiCanztik</td>
                  <td className="px-4 py-2 border-b">26 March 2020, 12:42 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 bg-gray-200 rounded-md">Previous</button>
          <div>
            <button className="px-3 py-1 bg-orange-500 text-white rounded-full mx-1">
              1
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-full mx-1">
              2
            </button>
            <button className="px-3 py-1 bg-gray-200 rounded-full mx-1">
              3
            </button>
          </div>
          <button className="px-4 py-2 bg-gray-200 rounded-md">Next</button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
