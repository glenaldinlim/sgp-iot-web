import Head from 'next/head';
import { useEffect, useState } from 'react'

import BottomNav from '../components/bottomNav';
import Modal from "../components/Modal";

const Record = () => {
  const [open, setOpen] = useState(false)
  const [dump, setDump] = useState([])

  const onChangeOpen = () => {
    setOpen(!open)
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Head>
        <title>SGP IoT | Record</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full text-2xl font-semibold text-center py-5">
        Riwayat
      </div>
      <main className="mb-auto">
        <div className="px-4">
          <div className="flex justify-center px-2 mb-5">
            {
              dump == undefined ? 
                <h1>Loading...</h1>
              :
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
            }
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default Record;