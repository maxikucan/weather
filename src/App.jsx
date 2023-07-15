import { useEffect, useState } from "react";
import { fetchData } from "./service/fetchData";
import Card from "./components/Card";

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [inputData, setInputData] = useState("");
  const [city, setCity] = useState("Rosario");

  /**
   * Updates city name state with the word you type in input.
   */
  function handleCityName(e) {
    setInputData(e.target.value);
  }

  /**
   * Submit function to change city name in API URL.
   */
  function handleSubmit(e) {
    e.preventDefault();

    /**
     * Prevent search if input is empty.
    */
    if (inputData.length > 0) setCity(inputData);
  }

  /**
   * Calls API when Url changes. This will happen when city name is changed.
   */
  useEffect(() => {
    /**
     * fetchData will retrieve a promise so we should resolve it to get the data.
     */
    fetchData(city).then((weather) => setWeatherInfo(weather));
  }, [city]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city weather..."
          maxLength={22}
          onChange={handleCityName}
        />
        <button>Buscar</button>
      </form>

      <Card info={weatherInfo} />
    </div>
  );
}

export default App;
