// Convert YYYY-MM-DD into MMMM DD, YYYY
export function formatDate(inputDate: string) {
  const date = new Date(inputDate)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' }
  return date.toLocaleDateString('en-US', options)
}
