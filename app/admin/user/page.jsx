"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Menu, Calendar, User } from "lucide-react";

const UserManagementPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white shadow-sm">
        <div className="p-6 text-center border-b">
          <div className="relative w-16 h-16 mx-auto mb-2">
            <Image
              src="/logo.svg"
              alt="Domang Sushi"
              width={64}
              height={64}
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
          <Link
            href="/admin/reservasi"
            className="flex items-center px-4 py-2 mb-2 text-gray-700 hover:bg-orange-50 rounded-lg"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Reservation
          </Link>
          <Link
            href="/admin/tableReservation"
            className="flex items-center px-4 py-2 mb-2 text-gray-700 hover:bg-orange-50 rounded-lg"
          >
            <Calendar className="w-5 h-5 mr-3" />
            Table
          </Link>
          <Link
            href="/admin/user"
            className="flex items-center px-4 py-2 text-white bg-orange-600 rounded-lg"
          >
            <User className="w-5 h-5 mr-3" />
            Users
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome to Domang Sushi Admin!</p>
          </div>
          <div className="text-right">
            <p className="text-gray-800 font-medium">Banajar</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>

        <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">User</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Username</th>
                  <th className="text-left py-3 px-4">Password</th>
                  <th className="text-left py-3 px-4">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Rajarandes@gmail.com</td>
                  <td className="py-3 px-4">DenaiCanztik</td>
                  <td className="py-3 px-4">Di**********</td>
                  <td className="py-3 px-4">26 March 2020, 12:42 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              Edit
            </button>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg">
                Previous
              </button>
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg">
                1
              </button>
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                2
              </button>
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                3
              </button>
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg">
                Next
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Admin</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Email</th>
                  <th className="text-left py-3 px-4">Username</th>
                  <th className="text-left py-3 px-4">Password</th>
                  <th className="text-left py-3 px-4">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Rajarandes@gmail.com</td>
                  <td className="py-3 px-4">DenaiCanztik</td>
                  <td className="py-3 px-4">Di**********</td>
                  <td className="py-3 px-4">26 March 2020, 12:42 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
              Edit
            </button>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg">
                Previous
              </button>
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg">
                1
              </button>
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                2
              </button>
              <button className="px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">
                3
              </button>
              <button className="px-4 py-2 text-white bg-orange-600 rounded-lg">
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserManagementPage;