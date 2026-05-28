import type { WeatherDay } from '../types/weather';
import { WeatherCard } from './WeatherCard';

interface WeatherListProps {
  days: WeatherDay[];
}

export function WeatherList({ days }: WeatherListProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {days.map((day) => (
        <WeatherCard key={day.date} day={day} />
      ))}
    </div>
  );
}
