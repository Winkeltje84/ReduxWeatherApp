import axios from 'axios';
const API_KEY = '501cf5432e6aac36ac79822d3b928db7';
const API_CALL_ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
// above taken from http://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a1
// taken out:
        // the 'q=London,us'    -- this will be added by the search bar & added lateron
        // the '&mode=xml'      -- because we want JSON

export const FIND_WEATHER = 'FIND_WEATHER'
// this time we create a constant that we set to 'FIND_WEATHER' to prevent
// the possibility of future typo's

export function findWeather(city) {
  const url = `${API_CALL_ROOT_URL}&${city},nl`;
  const request = axios.get(url);
  // DOCUMENTATION: https://www.npmjs.com/package/axios
  // axios: does an ajax request (get) to the url and returns a promise
  // that promise we attach to the payload of this actioncreator

  return {
    type: FIND_WEATHER,
    payload: request
  }
}
