const Form = ({ city, setcity, getWeatherByCity, getWeatherByGeoLocation }) => {
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
    </>
  );
};

export default Form;
