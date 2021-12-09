import Head from 'next/head';
import { useState } from 'react'

import BottomNav from "../components/bottomNav";
import Card from "../components/Card";
import Modal from "../components/Modal";

const Home = () => {
  const [open, setOpen] = useState(false)
  
  const onChangeOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Head>
        <title>SGP IoT | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="w-full text-2xl font-semibold text-center py-5">
        Home
      </h1>
      <main className="mb-auto">
        <div className="grid grid-cols-2 gap-2 px-2">
          <Card icon="bi-thermometer-snow" title="Temperature" value="30.0" unit="C" />
          <Card icon="bi-cloud-fog2" title="Humidity" value="30.1" unit="%" />
          <Card icon="bi-moisture" title="Soil Moisture" value="30.1" unit="%" />
          <Card icon="bi-droplet" title="Height" value="5" unit="cm" />
        </div>
        <p className="text-xs text-center mt-3 text-gray-600">
          Update Terakhir: 05 Des 2021 08:10
        </p>
        <hr className="my-5" />
        <div className="flex justify-center px-2 mb-5">
          <table className="border-collapse border border-gray-400 table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-1 px-2">Tanggal</th>
                <th className="py-1 px-2">Temperature</th>
                <th className="py-1 px-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-400">
                <td className="p-1">04/12/2021 18:50</td>
                <td className="p-1">30.1 C</td>
                <td className="p-1">
                  <button className="bg-green-400 hover:bg-green-500 px-3 rounded-md" onClick={() => setOpen(true)}>
                    <i className="bi bi-eye-fill text-white hover:text-gray-100"></i>
                  </button>
                </td>
                { open ? <Modal open={onChangeOpen} /> : null }
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default Home;