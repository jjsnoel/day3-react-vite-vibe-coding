const WEEKDAY_LABELS = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

export function formatDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00`);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = WEEKDAY_LABELS[date.getDay()];
  return `${month}월 ${day}일 ${weekday}`;
}
