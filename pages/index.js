import Head from 'next/head';
import { useEffect, useState } from 'react'
import { ref, onValue } from "firebase/database";

import BottomNav from "../components/bottomNav";
import Card from "../components/Card";

import { db } from '../firebase';
import CardSkeleton from '../components/skeleton/CardSkeleton';

const Home = () => {
  const [monitoring, setMonitoring] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const monitoringRef = ref(db, '/v1/monitoring')
    const unsubcribe = onValue(monitoringRef, (snapshot) => {
      setMonitoring(snapshot.val())
      setLoading(false)
    })

    return unsubcribe
  }, [])

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
        {
          loading ?
            <>
              <div className="grid grid-cols-1 gap-4 px-10">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
              </div>
              <div className="animate-pulse flex justify-center mt-4">
                <div className="h-4 bg-gray-200 rounded w-2/4"></div>
              </div>
            </>
          : 
            <>
              <div className="grid grid-cols-1 gap-4 px-10">
                <Card icon="bi-thermometer-snow" title="Temperature" value={monitoring.temperature} unit="C" />
                <Card icon="bi-cloud-fog2" title="Humidity" value={monitoring.humidity} unit="%" />
                <Card icon="bi-moisture" title="Soil Moisture" value={(monitoring.soilMoistureA + monitoring.soilMoistureB) / 2} unit="%" />
                <Card icon="bi-droplet" title="Height" value={monitoring.waterHeight} unit="cm" />
              </div>
              <p className="text-xs text-center mt-3 text-gray-600">
                Update Terakhir: {monitoring.updated_at}
              </p>
            </>
        }
      </main>
      <BottomNav />
    </div>
  );
}

export default Home;