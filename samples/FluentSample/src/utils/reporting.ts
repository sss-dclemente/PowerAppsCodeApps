export function getTotalHours(entries: any[]) {
  return entries.reduce((sum, e) => sum + (e.hours || 0), 0);
}
