import React, { useEffect, useState } from "react";

function WeatherCard() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "c745050c1708764fd9f71f0ca65de8b0"; // API key

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        () => {
          setError("Location permission denied.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  const fetchWeather = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch {
      setError("Failed to fetch data.");
      setLoading(false);
    }
  };

  if (loading) return <p className="p-4 text-white">Loading...</p>;
  if (error) return <p className="p-4 text-yellow-500">{error}</p>;

  // Wind in km/h
  const windKmh = (weather.wind.speed * 3.6).toFixed(1);

  // System/laptop time
  const localTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Current Weather
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            {Math.round(weather.main.temp)}°C
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{weather.name}</p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {weather.weather[0].main}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Humidity: {weather.main.humidity}%
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Wind: {windKmh} km/h
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Time: {localTime}
          </p>
        </div>

        {/* Yellow gradient circle behind icon */}
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-md">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            className="w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
