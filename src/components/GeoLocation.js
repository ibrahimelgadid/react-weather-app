import axios from "axios";
import React, { useEffect, useState } from "react";

const GeoLocation = () => {
  const api_keys = "e33f4bfad39b6b214cfde0560cddc9a3";
  const geo = `https://api.openweathermap.org/data/2.5/weather?`;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);

      axios
        .get(
          `${geo}lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${api_keys}`
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    });
  }, []);

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "77dab1d9f8msh78ee47bc55e014cp1c103cjsnb772445200c0",
  //     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  //   },
  // };

  // fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions", options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  return <div>GeoLocation</div>;
};

export default GeoLocation;
