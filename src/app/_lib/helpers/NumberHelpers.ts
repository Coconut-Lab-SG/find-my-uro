/**
 * Format phone number by removing non-numeric characters
 * Example -> Input: +1-972-561-2743 , Output: 19725612743
 */
export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(?!^\+)\D/g, '')
}
