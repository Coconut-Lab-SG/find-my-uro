'use client'

import { Button } from '@/components/ui/button'
import { Calendar, Phone } from 'lucide-react'

export function UrologistLocation() {
  // TODO: tweak later
  function showAppointmentModal() {
    return null
  }

  function redirectPhoneNumber() {
    window.open(`https://wa.me/2123704170`)
  }

  return (
    <div className="flex flex-col bg-white gap-4 shadow tablet:flex-row tablet:w-[455px]">
      {/* Google Map container */}
      <div className="h-[172px] tablet:w-[220px] tablet:h-auto bg-slate-400 w-full">{/* Embeed Google Map component here */}</div>

      {/* Urologist Appointment */}
      <div className="flex flex-col gap-2.5 px-2 py-4 text-center tablet:text-left">
        <div className="flex flex-col leading-5">
          <span className="font-bold">Dr. Yaniv M. Larish</span>
          <span>Upper East Side Manhattan</span>
          <p>
            <a
              href="http://maps.google.com/?q=Dr.%20Yaniv%20M.%20Larish,%20Upper%20East%20Side%20Manhattan,%20New%20York,%20NY,%2010021"
              target="_blank"
            >
              (Directions)
            </a>{' '}
            New York, NY 10021
          </p>
        </div>
        <div className="flex flex-col gap-3 text-white">
          <Button className="rounded py-1 text-center" style={{ background: 'linear-gradient(90.49deg, #02616A 0.28%, #00838F 96.69%)' }}>
            <div className="flex items-center gap-1">
              <Calendar size="17" />
              <span>Appointment</span>
            </div>
          </Button>
          <Button className="rounded py-1 text-center bg-[#f6a404]" onClick={redirectPhoneNumber}>
            <div className="flex items-center gap-1">
              <Phone size="17" fill="#fff" />
              <span>(212) 370-4170</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}