"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const ReservationPage = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleConfirm = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Konfirmasi Reservasi",
      text: "Apakah Anda yakin ingin melanjutkan reservasi?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Lanjutkan",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Reservasi Berhasil",
          text: "Anda akan diarahkan ke halaman Home.",
          icon: "success",
        }).then(() => {
          router.push("/");
        });
      }
    });
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black bg-opacity-100">
      <div className="absolute inset-0 z-0">
        <Image
          src="/sushi2.png"
          alt="Sushi Background"
          fill
          objectFit="cover"
          className="blur-md opacity-60"
        />
      </div>
      <section className="relative z-10 bg-white shadow-lg p-6 sm:p-8 rounded-lg w-full sm:w-[90%] max-w-md">
        <h1 className="text-center text-xl sm:text-2xl font-bold mb-4 underline">
          RESERVATION
        </h1>
        <form onSubmit={handleConfirm} className="space-y-4">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>
          <div>
            <label htmlFor="telp" className="block text-sm font-medium text-gray-700">
              No. Telp (WhatsApp)
            </label>
            <input
              type="text"
              id="telp"
              name="telp"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan nomor WhatsApp"
              required
            />
          </div>
          <div>
            <label htmlFor="jumlah" className="block text-sm font-medium text-gray-700">
              Jumlah Orang
            </label>
            <input
              type="number"
              id="jumlah"
              name="jumlah"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Masukkan jumlah orang"
              required
            />
          </div>
          <div>
            <label htmlFor="meja" className="block text-sm font-medium text-gray-700">
              No. Meja
            </label>
            <select
              id="meja"
              name="meja"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Pilih meja</option>
              <option value="1">Meja 1</option>
              <option value="2">Meja 2</option>
            </select>
          </div>
          <div>
            <label htmlFor="letak" className="block text-sm font-medium text-gray-700">
              Letak Meja
            </label>
            <select
              id="letak"
              name="letak"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Pilih letak meja</option>
              <option value="depan">Depan</option>
              <option value="tengah">Tengah</option>
              <option value="belakang">Belakang</option>
            </select>
          </div>
          <div>
            <label htmlFor="tanggal" className="block text-sm font-medium text-gray-700">
              Tanggal
            </label>
            <input
              type="date"
              id="tanggal"
              name="tanggal"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="waktu" className="block text-sm font-medium text-gray-700">
              Waktu
            </label>
            <input
              type="time"
              id="waktu"
              name="waktu"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800"
            >
              Confirm
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ReservationPage;
