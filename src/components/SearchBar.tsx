import { useState, type FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (cityName: string) => void;
  isLoading: boolean;
  defaultValue?: string;
}

export function SearchBar({ onSearch, isLoading, defaultValue = 'Seoul' }: SearchBarProps) {
  const [input, setInput] = useState(defaultValue);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSearch(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 sm:flex-row"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="도시명을 입력하세요 (예: Seoul, Gwangju, Busan)"
        disabled={isLoading}
        className="flex-1 rounded-xl border border-sky-200 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 disabled:opacity-60"
        aria-label="도시명 검색"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="rounded-xl bg-sky-500 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        검색
      </button>
    </form>
  );
}
