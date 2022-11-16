// import {
//   Autocomplete,
//   GoogleMap,
//   useJsApiLoader,
// } from "@react-google-maps/api";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const position: any = [27.679974174817087, 85.31693137409195];

const SearchRider = () => {
  //   const { isLoaded } = useJsApiLoader({
  //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
  //     libraries: ["places"],
  //   });

  //   if (!isLoaded) return <span>Loading...</span>;

  return (
    <section className="text-gray-600 body-font relative h-full">
      <div className="absolute inset-0 bg-gray-300">
        <MapContainer center={position} zoom={16} zoomControl={false}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}></Marker>
        </MapContainer>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-[1000] shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font ">
            Search Rides
          </h2>

          <div className="relative mb-4">
            <label
              htmlFor="start_location"
              className="leading-7 text-sm text-gray-600"
            >
              Pickup
            </label>
            <input
              type="text"
              name="start_location"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="end_location"
              className="leading-7 text-sm text-gray-600"
            >
              Destination
            </label>
            <input
              type="text"
              name="end_location"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button className="bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
            Find Rider
          </button>
        </div>
      </div>
    </section>
  );
};

export default SearchRider;
