import { useCallback, useEffect, useState } from 'react';
import { fetchWeeklyWeather, searchCity, toSelectedLocation } from '../api/weatherApi';
import type { SelectedLocation, WeatherDay } from '../types/weather';
import { initialState } from '../types/weather';

const DEFAULT_CITY = 'Seoul';

export function useWeather() {
  const [location, setLocation] = useState<SelectedLocation | null>(initialState.location);
  const [weatherDays, setWeatherDays] = useState<WeatherDay[]>(initialState.weatherDays);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [errorMessage, setErrorMessage] = useState<string | null>(initialState.errorMessage);

  const loadWeather = useCallback(async (cityName: string) => {
    const trimmed = cityName.trim();

    if (!trimmed) {
      setErrorMessage('도시명을 입력해주세요.');
      setWeatherDays([]);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const result = await searchCity(trimmed);

      if (!result) {
        setLocation(null);
        setWeatherDays([]);
        setErrorMessage('해당 도시를 찾을 수 없습니다.');
        return;
      }

      const selected = toSelectedLocation(result);
      const days = await fetchWeeklyWeather(selected);

      setLocation(selected);
      setWeatherDays(days);
    } catch {
      setLocation(null);
      setWeatherDays([]);
      setErrorMessage('날씨 정보를 불러오지 못했습니다. 네트워크를 확인하고 다시 검색해주세요.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadWeather(DEFAULT_CITY);
  }, [loadWeather]);

  return {
    location,
    weatherDays,
    isLoading,
    errorMessage,
    searchWeather: loadWeather,
  };
}
