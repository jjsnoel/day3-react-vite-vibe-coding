import type { WeatherDay } from '../types/weather';
import { formatDate } from '../utils/formatDate';

interface WeatherCardProps {
  day: WeatherDay;
}

export function WeatherCard({ day }: WeatherCardProps) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-5 shadow-md transition hover:shadow-lg">
      <p className="text-sm font-semibold text-sky-600">{formatDate(day.date)}</p>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-4xl" role="img" aria-label={day.weatherLabel}>
          {day.weatherIcon}
        </span>
        <div>
          <p className="text-lg font-bold text-slate-800">{day.weatherLabel}</p>
          <p className="text-2xl font-bold text-slate-900">
            {Math.round(day.maxTemp)}° / {Math.round(day.minTemp)}°
          </p>
        </div>
      </div>

      <dl className="mt-4 space-y-2 text-sm text-slate-600">
        <div className="flex justify-between">
          <dt>체감</dt>
          <dd className="font-medium text-slate-800">
            {Math.round(day.maxApparentTemp)}° / {Math.round(day.minApparentTemp)}°
          </dd>
        </div>
        <div className="flex justify-between">
          <dt>강수 확률</dt>
          <dd className="font-medium text-slate-800">{day.precipitationProbability}%</dd>
        </div>
        <div className="flex justify-between">
          <dt>강수량</dt>
          <dd className="font-medium text-slate-800">{day.precipitationSum} mm</dd>
        </div>
        <div className="flex justify-between">
          <dt>최대 풍속</dt>
          <dd className="font-medium text-slate-800">{Math.round(day.maxWindSpeed)} km/h</dd>
        </div>
      </dl>
    </article>
  );
}
