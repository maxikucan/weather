/**
 * @param city the city to search 
 * @returns promise with API response data
 */
export async function fetchData(city) {
  const uri = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`;


  const data = await fetch(uri);

  return await data.json();
}
