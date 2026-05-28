interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      role="alert"
      className="rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-center shadow-sm"
    >
      <p className="text-base font-medium text-red-700">{message}</p>
      <p className="mt-1 text-sm text-red-500">다른 도시명으로 다시 검색해주세요.</p>
    </div>
  );
}
