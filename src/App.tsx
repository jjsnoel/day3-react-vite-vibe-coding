import { ErrorMessage } from './components/ErrorMessage';
import { LoadingMessage } from './components/LoadingMessage';
import { SearchBar } from './components/SearchBar';
import { WeatherList } from './components/WeatherList';
import { useWeather } from './hooks/useWeather';

function App() {
  const { location, weatherDays, isLoading, errorMessage, searchWeather } = useWeather();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-4xl">
            Weekly Weather App
          </h1>
          <p className="mt-2 text-slate-600">한 주간의 날씨를 간단하게 확인하세요</p>
        </header>

        <section className="mb-6 rounded-2xl bg-white/70 p-5 shadow-md backdrop-blur-sm sm:p-6">
          <SearchBar onSearch={searchWeather} isLoading={isLoading} />
        </section>

        {location && !errorMessage && (
          <section className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-slate-800">
              {location.name}, {location.country}
            </h2>
          </section>
        )}

        {isLoading && <LoadingMessage />}

        {!isLoading && errorMessage && <ErrorMessage message={errorMessage} />}

        {!isLoading && !errorMessage && weatherDays.length > 0 && (
          <WeatherList days={weatherDays} />
        )}
      </main>
    </div>
  );
}

export default App;
