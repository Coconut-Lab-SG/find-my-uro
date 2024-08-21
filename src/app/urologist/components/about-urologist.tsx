import { UrologistType } from '@/app/_lib/definitions/urologist'
import { convertTo12HourFormat } from '@/app/_lib/helpers/DateTimeHelpers'
import { Check, Clock, Info, MapPin, Phone } from 'lucide-react'

type Props = {
  data: UrologistType
}

export function AboutUrologist({ data }: Props) {
  const { practice } = data

  return (
    <div className="flex flex-col gap-3">
      {/* Urologist About */}
      <div className="flex flex-col gap-3 border-b border-gray-300 py-4">
        <span className="italic text-lg font-medium text-center">About {data.name}</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">NPI</span>
            <span>{data.npi_id}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Experience</span>
            <span>
              {data.year_of_experience} {data.year_of_experience < 2 ? 'year' : 'years'}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Language Spoken</span>
            <span>{data.language}</span>
          </div>
        </div>
      </div>

      {/* Urologist Practice Info */}
      <div className="flex flex-col gap-3 border-b border-gray-300 py-4">
        <span className="italic text-lg font-medium text-center">Practice Information</span>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <MapPin size={20} />
            <div className="flex flex-col flex-1">
              <span className="font-bold">{data.name}</span>
              <span>{practice.address}</span>
              <span>
                {practice.city.name}, {practice.city.country_code}, {practice.zip_code}
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Phone size={20} />
            <a className="flex-1">{practice.phone_number}</a>
          </div>
          <div className="flex gap-3 items-center">
            <Check size={20} />
            <span className="flex-1">Accepting New Patients</span>
          </div>
          <div className="flex gap-3">
            <Clock size={20} />
            <div className="flex flex-col flex-1">
              {practice.hours.map(
                (time) =>
                  time.is_practice === 1 && (
                    <span
                      key={time.id}
                    >{`${time.day} ${convertTo12HourFormat(time.practice_start)} - ${convertTo12HourFormat(time.practice_end)}`}</span>
                  )
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <Info size={20} />
            <p className="flex-1">All consultations are by appointment only. House calls only for Saturday and Sunday</p>
          </div>
        </div>
      </div>
    </div>
  )
}
