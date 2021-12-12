import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";

import BottomNav from '../components/BottomNav';
import Modal from "../components/Modal";
import { db } from '../firebase';

const Record = () => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [records, setRecords] = useState()

  useEffect(() => {
    const recordsRef = ref(db, '/v1/dump')
    const unsubscribe = onValue(recordsRef, (snapshot) => {
      setRecords(snapshot.val())
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const handleButtonClick = (data) => {
    setOpen(true)
    console.log(data)
  }

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
        <div className="flex sm:justify-center px-2 mb-5 overflow-x-auto">
          {
            loading ?
              <h1>Loading...</h1>
            :
              <>
                <table className="min-w-full border border-gray-200 shadow text-left table-auto">
                  <thead className="border-b bg-gray-50 text-gray-500">
                    <tr className="whitespace-nowrap">
                      <th className="py-1 px-2">Tanggal</th>
                      <th className="py-1 px-2">Temperature</th>
                      <th className="py-1 px-2">Humidity</th>
                      <th className="py-1 px-2">Water Height</th>
                      <th className="py-1 px-2">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-300">
                    {
                      Object.keys(records).map((key) => (
                        <tr className="whitespace-nowrap" key={key}>
                          <td className="py-1 px-2">{records[key].timestamp}</td>
                          <td className="py-1 px-2">{records[key].temperature} C</td>
                          <td className="py-1 px-2">{records[key].humidity} %</td>
                          <td className="py-1 px-2">{records[key].waterHeight} cm</td>
                          <td className="py-1 px-2">
                              <button className="px-2" onClick={() => handleButtonClick(records[key])}>
                                  <i className="bi bi-eye-fill text-lg text-blue-400 hover:text-blue-500"></i>
                              </button>
                          </td>
                      </tr>
                      ))
                    }
                  </tbody>
                </table>
                { open ? <Modal open={onChangeOpen} /> : null }
              </>
          }
      </div>
      </main>
      <BottomNav />
    </div>
  );
}

export default Record;