import { Check, Clock, Info, MapPin, Phone } from 'lucide-react'

export function AboutUrologist() {
  return (
    <div className="flex flex-col gap-3">
      {/* Urologist About */}
      <div className="flex flex-col gap-3 border-b border-gray-300 py-4">
        <span className="italic text-lg font-medium text-center">About Yaniv Larish</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">NPI</span>
            <span>1841515376</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Experience</span>
            <span>15 years</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Language Spoken</span>
            <span>English, Japanese, Sundanese</span>
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
              <span className="font-bold">Dr. Yaniv M. Larish</span>
              <span>Upper East Side Manhattan</span>
              <span>New York, NY 10021</span>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Phone size={20} />
            <a className="flex-1">(212) 370-4170</a>
          </div>
          <div className="flex gap-3 items-center">
            <Check size={20} />
            <span className="flex-1">Accepting New Patients</span>
          </div>
          <div className="flex gap-3">
            <Clock size={20} />
            <div className="flex flex-col flex-1">
              <span>Monday 08:00 am - 05:00 pm</span>
              <span>Tuesday 08:00 am - 05:00 pm</span>
              <span>Wednesday 08:00 am - 05:00 pm</span>
              <span>Thursday 08:00 am - 05:00 pm</span>
              <span>Friday 08:00 am - 05:00 pm</span>
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
