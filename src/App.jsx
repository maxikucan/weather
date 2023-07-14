import { useEffect, useState } from "react";
import { fetchData } from "./service/fetchData";
import Card from "./components/Card";

function App() {
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [inputData, setInputData] = useState("");
  const [city, setCity] = useState("Rosario");

  const URL = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`;

  /**
   * Updates city name state with the word you type in input
   */
  function handleCityName(e) {
    setInputData(e.target.value);
  }

  /**
   * Submit function to change city name in API URL.
   */
  function handleSubmit(e) {
    e.preventDefault();
    setCity(inputData);
  }

  /**
   * Calls API when Url changes. This will happen when city name is changed.
   */
  useEffect(() => {
    /**
     * fetchData will retrieve a promise so we should resolve it to get the data.
     */
    fetchData(URL).then((weather) => setWeatherInfo(weather));
  }, [URL]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search city weather..."
          onChange={handleCityName}
        />
      </form>

      <Card
        city={weatherInfo.location?.name || "No info"}
        region={weatherInfo.location?.region || "No info"}
        country={weatherInfo.location?.country || "No info"}
        weather={weatherInfo.current?.temp_c || "No info"}
        time={weatherInfo.location?.localtime || "No info"}
        isDay={weatherInfo.current?.is_day}
      />
    </div>
  );
}

export default App;
