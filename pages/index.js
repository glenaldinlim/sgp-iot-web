import BottomNav from "../components/bottomNav";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="w-full text-2xl font-semibold text-center py-5">
        Home
      </div>
      <div className="grid grid-cols-2 gap-4 px-4 ">
        <Card icon="bi-thermometer-snow" title="Temperature" value="30.0" unit="C" />
        <Card icon="bi-cloud-fog2" title="Humidity" value="30.1" unit="%" />
        <Card icon="bi-moisture" title="Soil Moisture" value="30.1" unit="%" />
        <Card icon="bi-droplet" title="Height" value="5" unit="cm" />
      </div>
      <div className="text-sm text-center mt-3 text-gray-600">
        Update Terakhir: 05 Des 2021 08:10
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;