import "./App.css";
import Form from "./components/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import Forcast from "./components/Forcast";
import Forecasts from "./components/Forecasts";
import Empty from "./components/Empty";

function App() {
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
    <div
      className="app bg-[url('../public/imgs/sea.jfif')]
    bg-no-repeat bg-cover bg-center h-screen relative min-h-[1000px] bg-fixed"
    >
      <div className="overlay fixed  bg-black opacity-60 top-0 left-0 h-full w-full"></div>
      <div className="z-10 relative">
        <h1 className="text-slate-100 text-2xl  sm:text-5xl  font-bold text-center pt-10">
          Weather App
        </h1>
        <Form
          city={city}
          setcity={setcity}
          getWeatherByCity={getWeatherByCity}
          getWeatherByGeoLocation={getWeatherByGeoLocation}
        />
        {!loading ? (
          <>
            <Forcast weather={weather} />
            <Forecasts weather={weather} />
          </>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export default App;
