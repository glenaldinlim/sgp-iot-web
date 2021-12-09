import Head from 'next/head';
import BottomNav from '../components/bottomNav';

const Control = () => {
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
          <div className="flex flex-col mb-5">
            <label className="font-semibold mb-2 text-gray-700">Durasi Pompa</label>
            <div className="flex justify-between">
              <input type="text" name="duration" id="duration" placeholder="Durasi Pompa" className="shadow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1" />
              <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm text-white font-semibold">Update</button>
            </div>
          </div>
          <div className="flex flex-col mb-5">
            <label className="font-semibold mb-2 text-gray-700">Waktu Penyiraman</label>
            <div className="flex justify-between mb-2">
              <input type="text" name="duration" id="duration" placeholder="Pagi" className="shadow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1 w-1/3" />
              <input type="text" name="duration" id="duration" placeholder="Siang" className="shadow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1 w-1/3 mx-1" />
              <input type="text" name="duration" id="duration" placeholder="Sore" className="shadow border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-400 h-10 px-3 py-1 w-1/3" />
            </div>
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-sm text-white font-semibold">Update</button>
          </div>
        </div>
      </main>
			<BottomNav />
		</div>
  );
}

export default Control;