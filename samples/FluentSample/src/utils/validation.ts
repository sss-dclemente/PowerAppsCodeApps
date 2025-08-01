export function validateTimeEntry(entry: any) {
  // Add business rules here
  if (!entry.date || !entry.projectId || !entry.hours) return false;
  if (entry.hours < 0 || entry.hours > 24) return false;
  // Add more rules as needed
  return true;
}
