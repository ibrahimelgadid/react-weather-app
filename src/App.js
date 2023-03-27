import "./App.css";
import Form from "./components/form/Form";

function App() {
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
        <Form />
      </div>
    </div>
  );
}

export default App;
