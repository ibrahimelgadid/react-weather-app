import React from "react";

const Forecasts = ({ weather }) => {
  return (
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
          <div className="text-white text-2xl font-bold">{we.temp_c}℃</div>
        </div>
      ))}
    </div>
  );
};

export default Forecasts;
