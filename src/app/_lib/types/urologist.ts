export type UrologistResponse = {
  data: UrologistType
}

export type UrologistType = {
  id: string
  name: string
  suffix: string
  rate: number
  avatar: string
  latitude: string
  longitude: string
  board_certified: string
  npi_id: string
  pac_id: string
  year_of_experience: string
  is_allowed_booking_appointment: string
  speciality: string
  educations: UrologistEducationType[]
  practice: UrologistPracticeType
  amthAffiliations: AmthAffiliationType[]
  reviews: UrologistReviewType[]
}

type UrologistEducationType = {
  id: string
  type: string
  institution: string
  graduation_year: number | null
}

type UrologistPracticeType = {
  id: string
  type: string
  is_accepting_new_patients: number
  is_primary_practice: number
  practice_name: string | null
  address: string
  longitude: string
  latitude: string
  zip_code: string
  city: string
  phone_number: string
  fax_number: string | null
  email: string | null
  alternative_email: string | null
  website: string | null
  description: string | null
}

type AmthAffiliationType = {
  name: string
}

export type UrologistReviewType = {
  id: string
  rating: number
  date: string
  link: string
  source: string
  review: string
  author: string
}
