
import React from "react";

function WeatherCard() {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mx-auto my-4 w-full max-w-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Weather
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold text-gray-900">
            24°C
          </h3>
          <p className="text-gray-600">Kigali, Rwanda</p>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
          alt="weather icon"
          className="w-16 h-16"
        />
      </div>

      <p className="text-gray-500 mt-3 text-sm">
        Sunny • Humidity: 60%
      </p>
    </div>
  );
}

export default WeatherCard;
