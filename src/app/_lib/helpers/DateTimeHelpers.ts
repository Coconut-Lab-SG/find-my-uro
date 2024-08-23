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

/**
 * Format Shadcn Calendar input
 * Example input: Fri Aug 09 2024 00:00:00 GMT+0700 (Western Indonesia Time)
 * Example output: 2024-08-09
 */
export function formatCalendarInput(date: Date) {
  const dateTime = new Date(date)

  // Extract the parts
  const year = dateTime.getFullYear()
  const month = String(dateTime.getMonth() + 1).padStart(2, '0') // Months are zero-based
  const day = String(dateTime.getDate()).padStart(2, '0')

  // Format the date string
  return `${year}-${month}-${day}`
}

/**
 * Determine if a date is a weekend
 * @param date
 * @returns {boolean}
 */
export function isWeekend(date: Date) {
  const day = date.getDay()
  return day === 0 || day === 6 // Disable Sunday (0) and Saturday (6)
}

/**
 * Get the next business day (excluding weekends)
 * @returns {Date}
 */
export function getNextBusinessDay() {
  let date = new Date()
  date.setDate(date.getDate() + 1) // Start with tomorrow

  // Check if the new date is a Saturday (6) or Sunday (0) and adjust accordingly
  if (date.getDay() === 6) {
    date.setDate(date.getDate() + 2) // If Saturday, move to Monday
  } else if (date.getDay() === 0) {
    date.setDate(date.getDate() + 1) // If Sunday, move to Monday
  }

  return date
}
