import axios from "axios";
import { useEffect, useState } from "react";
import Empty from "../Empty";
import "./Form.css";

const Form = () => {
  const [weather, setweather] = useState({});
  const [city, setcity] = useState("");

  const [loading, setloading] = useState(true);

  const api_keys = "6c86c38e528247e89bf73332232503";

  const getWeatherByGeoLocation = (e) => {
    if (e) {
      e.preventDefault();
    }
    navigator.geolocation.getCurrentPosition(async (pos) => {
      axios
        .get(
          `https://api.weatherapi.com/v1/forecast.json?key=${api_keys}&q=${pos.coords.latitude},${pos.coords.longitude}
          &days=1&aqi=no`
        )
        .then((response) => {
          setweather(response.data);

          setloading(false);
        })
        .catch((err) => console.log(err));
    });
  };
  const getWeatherByCity = (e) => {
    e.preventDefault();
    console.log(city);
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${api_keys}&q=${city}
          &days=1&aqi=no`
      )
      .then((response) => {
        setweather(response.data);

        setloading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeatherByGeoLocation();
  }, []);

  return (
    <>
      <form className="sm:py-12 py-6 flex justify-center sm:flex-row flex-col gap-4 px-4">
        <input
          className="text-slate-300 rounded-md  font-semibold text-lg  bg-transparent border-[3px]  border-red-700
          p-2  placeholder:text-slate-200 placeholder:text-lg 
          focus:outline-none  caret-red-600 
          "
          type="text"
          placeholder="Insert city name...."
          name="city"
          value={city}
          onChange={(e) => setcity(e.target.value)}
        />

        <button
          onClick={getWeatherByCity}
          className="bg-red-700 p-2 ml-2 text-white rounded-sm font-medium text-base"
        >
          Select City
        </button>
        <button
          onClick={getWeatherByGeoLocation}
          className="bg-red-700 p-2 ml-2 text-white rounded-sm font-medium text-base"
        >
          Currunt Location
        </button>
      </form>

      {!loading ? (
        <>
          <div className="location  px-10 sm:py-16 py-4 flex sm:flex-row flex-col gap-4">
            <div className="geo text-slate-100  font-semibold flex flex-col">
              <span className="text-slate-100 sm:text-xl text-md uppercase">
                {weather.location.region}
              </span>
              <span className="text-slate-100 sm:text-xl text-md uppercase">
                {weather.location.tz_id}
              </span>
              <span className="text-slate-100 font-extrabold ">
                {weather.location.lat + "E " + weather.location.lon + "N"}
              </span>
            </div>
            <div className="border w-60 rounded-lg overflow-hidden relative mx-auto bg-black bg-opacity-60">
              <h2 className="text-2xl text-white text-center py-2 font-bold z-10 relative">
                Now
              </h2>
              <ul className="z-10 relative">
                <li className="text-slate-200 flex justify-between mx-2 border-b-2 border-neutral-900 py-1 font-bold">
                  <span>Tempreture</span>
                  <span>{weather.current.temp_c}℃</span>
                </li>
                <li className="text-slate-200 flex justify-between mx-2 border-b-2 border-neutral-900 py-1 font-bold">
                  <span>Feels like</span>
                  <span>{weather.current.feelslike_c}℃</span>
                </li>
                <li className="text-slate-200 flex justify-between mx-2 border-b-2 border-neutral-900 py-1 font-bold">
                  <span>Status</span>
                  <span>{weather.current.condition.text}</span>
                </li>
                <li className="text-slate-200 flex justify-between mx-2 border-b-2 border-neutral-900 py-1 font-bold">
                  <span>Humidity</span>
                  <span>{weather.current.humidity}%</span>
                </li>
                <li className="text-slate-200 flex justify-between mx-2 border-b-2 border-neutral-900 py-1 font-bold">
                  <span>Wind Speed</span>
                  <span>{weather.current.wind_kph}km/h</span>
                </li>
                <li className="text-slate-200 flex justify-between mx-2 border-b-2 border-neutral-900 py-1 font-bold">
                  <span>Pressure</span>
                  <span>{weather.current.pressure_mb}hPa</span>
                </li>
              </ul>
              <div className="flex justify-center">
                <img
                  className="z-10 relative "
                  src={weather.current.condition.icon}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="bg-black opacity-60 flex gap-10 p-6 overflow-x-scroll ">
            {weather.forecast.forecastday[0].hour.map((we) => (
              <div
                key={we.time}
                className="border rounded-md p-4 flex flex-col gap-4"
              >
                <div className="text-white bg-slate-800 rounded-md px-1 text-lg">
                  {we.time.split(" ")[1]}
                </div>
                <div className="w-24">
                  <img className="w-full" src={we.condition.icon} alt="" />
                </div>
                <div className="text-white text-2xl font-bold">
                  {we.temp_c}℃
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Form;
