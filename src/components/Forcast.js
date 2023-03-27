import React from "react";

const Forcast = ({ weather }) => {
  return (
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
  );
};

export default Forcast;
