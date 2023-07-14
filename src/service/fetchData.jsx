/**
 * @param url the API url
 * @returns promise with API response data
 */
export async function fetchData(url) {
  const data = await fetch(url);

  return await data.json();
}
