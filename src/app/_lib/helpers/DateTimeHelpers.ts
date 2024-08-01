/**
 * Convert YYYY-MM-DD into MMMM DD, YYYY
 * Example input: 1995-11-20
 * Example output: November 20, 1995
 */
export function formatDate(inputDate: string) {
  const date = new Date(inputDate)
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' }
  return date.toLocaleDateString('en-US', options)
}

/**
 * Convert into 24hrs time format with period
 * Example input: 10:43:20
 * Example output: 10:43 AM
 */
export function convertTo12HourFormat(time: string) {
  const [hours, minutes] = time.split(':')
  let hour = parseInt(hours)
  const minute = parseInt(minutes)
  const period = hour >= 12 ? 'PM' : 'AM'

  // Format the hour and minute with leading zeros if needed
  const formattedHour = hour.toString().padStart(2, '0')
  const formattedMinute = minute.toString().padStart(2, '0')

  return `${formattedHour}:${formattedMinute} ${period}`
}
