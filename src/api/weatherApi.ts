import type {
  GeocodingApiResponse,
  LocationResult,
  SelectedLocation,
  WeatherApiResponse,
  WeatherDay,
} from '../types/weather';
import { resolveCitySearchName } from '../utils/cityAliases';
import { getWeatherInfo } from '../utils/weatherCode';

const GEOCODING_BASE = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_BASE = 'https://api.open-meteo.com/v1/forecast';

const DAILY_VARIABLES = [
  'weather_code',
  'temperature_2m_max',
  'temperature_2m_min',
  'apparent_temperature_max',
  'apparent_temperature_min',
  'precipitation_probability_max',
  'precipitation_sum',
  'wind_speed_10m_max',
].join(',');

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('API request failed');
  }
  return response.json() as Promise<T>;
}

export async function searchCity(cityName: string): Promise<LocationResult | null> {
  const searchName = resolveCitySearchName(cityName);

  const params = new URLSearchParams({
    name: searchName,
    count: '5',
    language: 'ko',
    format: 'json',
  });

  const data = await fetchJson<GeocodingApiResponse>(`${GEOCODING_BASE}?${params}`);
  return data.results?.[0] ?? null;
}

export async function fetchWeeklyWeather(
  location: SelectedLocation,
): Promise<WeatherDay[]> {
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    daily: DAILY_VARIABLES,
    timezone: location.timezone,
    forecast_days: '7',
  });

  const data = await fetchJson<WeatherApiResponse>(`${FORECAST_BASE}?${params}`);
  const { daily } = data;

  return daily.time.map((date, index) => {
    const code = daily.weather_code[index];
    const { label, icon } = getWeatherInfo(code);

    return {
      date,
      weatherCode: code,
      weatherLabel: label,
      weatherIcon: icon,
      maxTemp: daily.temperature_2m_max[index],
      minTemp: daily.temperature_2m_min[index],
      maxApparentTemp: daily.apparent_temperature_max[index],
      minApparentTemp: daily.apparent_temperature_min[index],
      precipitationProbability: daily.precipitation_probability_max[index],
      precipitationSum: daily.precipitation_sum[index],
      maxWindSpeed: daily.wind_speed_10m_max[index],
    };
  });
}

export function toSelectedLocation(result: LocationResult): SelectedLocation {
  return {
    name: result.name,
    country: result.country,
    latitude: result.latitude,
    longitude: result.longitude,
    timezone: result.timezone,
  };
}
