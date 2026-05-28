export interface LocationResult {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  timezone: string;
}

export interface GeocodingApiResponse {
  results?: LocationResult[];
}

export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  timezone: string;
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    precipitation_probability_max: number[];
    precipitation_sum: number[];
    wind_speed_10m_max: number[];
  };
}

export interface WeatherDay {
  date: string;
  weatherCode: number;
  weatherLabel: string;
  weatherIcon: string;
  maxTemp: number;
  minTemp: number;
  maxApparentTemp: number;
  minApparentTemp: number;
  precipitationProbability: number;
  precipitationSum: number;
  maxWindSpeed: number;
}

export interface SelectedLocation {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

export interface WeatherState {
  location: SelectedLocation | null;
  weatherDays: WeatherDay[];
  isLoading: boolean;
  errorMessage: string | null;
}

export const initialState: WeatherState = {
  location: null,
  weatherDays: [],
  isLoading: false,
  errorMessage: null,
};
