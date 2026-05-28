const weatherCodeMap: Record<number, { label: string; icon: string }> = {
  0: { label: '맑음', icon: '☀️' },
  1: { label: '대체로 맑음', icon: '🌤️' },
  2: { label: '부분적으로 흐림', icon: '⛅' },
  3: { label: '흐림', icon: '☁️' },
  45: { label: '안개', icon: '🌫️' },
  48: { label: '서리 안개', icon: '🌫️' },
  51: { label: '약한 이슬비', icon: '🌦️' },
  53: { label: '이슬비', icon: '🌦️' },
  55: { label: '강한 이슬비', icon: '🌧️' },
  61: { label: '약한 비', icon: '🌧️' },
  63: { label: '비', icon: '🌧️' },
  65: { label: '강한 비', icon: '🌧️' },
  71: { label: '약한 눈', icon: '🌨️' },
  73: { label: '눈', icon: '🌨️' },
  75: { label: '강한 눈', icon: '❄️' },
  80: { label: '약한 소나기', icon: '🌦️' },
  81: { label: '소나기', icon: '🌧️' },
  82: { label: '강한 소나기', icon: '⛈️' },
  95: { label: '뇌우', icon: '⛈️' },
};

const DEFAULT_WEATHER = { label: '알 수 없음', icon: '❓' };

export function getWeatherInfo(code: number): { label: string; icon: string } {
  return weatherCodeMap[code] ?? DEFAULT_WEATHER;
}
