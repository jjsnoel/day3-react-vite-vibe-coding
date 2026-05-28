export function LoadingMessage() {
  return (
    <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/80 px-6 py-10 shadow-md backdrop-blur-sm">
      <span className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-sky-200 border-t-sky-500" />
      <p className="text-lg font-medium text-slate-600">날씨 정보를 불러오는 중...</p>
    </div>
  );
}
