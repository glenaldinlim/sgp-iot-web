import Head from 'next/head';
import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";

import BottomNav from '../components/BottomNav';
import { db } from '../firebase';

const Control = () => {
  const [configure, setConfigure] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const configureRef = ref(db, '/v1/config')
    const unsubscribe = onValue(configureRef, (snapshot) => {
      setConfigure(snapshot.val())
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
		<div className="w-full min-h-screen bg-gray-50">
      <Head>
        <title>SGP IoT | Controlling</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-full text-2xl font-semibold text-center py-5">
        Control
      </div>
      <main className="mb-auto">
        <div className="px-4">
          {
            loading ? 
              <h1>Loading...</h1>
            :
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col mb-5">
                  <label className="font-semibold mb-2 text-gray-700">Durasi Pompa (Detik) </label>
                  <input type="text" name="duration" id="duration" placeholder="Durasi Pompa" value={configure.pompDuration} className="shadow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1" />
                </div>
                <div className="flex flex-col mb-5">
                  <label className="font-semibold mb-2 text-gray-700">Waktu Penyiraman</label>
                  <div className="table w-full">
                    <div className="table-row">
                      <label className="text-gray-700 table-cell">Pagi</label>
                      <input type="time" name="times[]" id="time_morn" placeholder="Pagi" value={configure.timeSettings[0]} className="mb-2 table-cell shadow border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1" />
                    </div>
                    <div className="table-row">
                      <label className="text-gray-700 table-cell">Siang</label>
                      <input type="time" name="times[]" id="time_noon" placeholder="Pagi" value={configure.timeSettings[1]} className="mb-2 table-cell shadow border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1" />
                    </div>
                    <div className="table-row">
                      <label className="text-gray-700 table-cell">Sore</label>
                      <input type="time" name="times[]" id="time_evening" placeholder="Pagi" value={configure.timeSettings[2]} className="mb-2 table-cell shadow border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm text-white font-semibold">Update</button>
              </form>
          }
        </div>
      </main>
			<BottomNav />
		</div>
  );
}

export default Control;