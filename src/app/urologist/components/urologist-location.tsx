'use client'

import { GoogleMapsComponent } from '@/app/_components/maps/google-maps-component'
import { ModalDialog } from '@/app/_components/modal-dialog'
import { AppointmentDialog } from '@/app/_components/modal-dialog/contents/appointment-dialog'
import { Button } from '@/app/_components/ui/button'
import { UrologistType } from '@/app/_lib/definitions/urologist'
import { formatPhoneNumber } from '@/app/_lib/helpers/NumberHelpers'
import { Calendar, Phone } from 'lucide-react'
import { useState } from 'react'

type Props = {
  data: UrologistType
}

export function UrologistLocation({ data }: Props) {
  const { practice } = data
  const [openAppointmentDialog, setOpenAppointmentDialog] = useState(false)

  // TODO: tweak later
  function toggleAppointmentModal(val: boolean) {
    setOpenAppointmentDialog(val)
  }

  function redirectPhoneNumber() {
    window.open(`https://wa.me/${formatPhoneNumber(practice.phone_number)}`)
  }

  return (
    <>
      <div className="flex flex-col bg-white gap-4 shadow tablet:flex-row tablet:w-[455px]">
        {/* Google Map container */}
        <div className="h-[172px] tablet:w-[220px] tablet:h-auto bg-slate-400 w-full">
          {/* TODO: Change lat lng accordingly based on API data later */}
          <GoogleMapsComponent location={{ lat: data.latitude, lng: data.longitude }} />
        </div>

        {/* Urologist Appointment */}
        <div className="flex flex-col gap-2.5 px-2 py-4 text-center tablet:text-left">
          <div className="flex flex-col leading-5">
            <span className="font-bold">{data.name}</span>
            <span>{practice.address}</span>
            <p>
              <a href={practice.map_url} target="_blank">
                (Directions)
              </a>{' '}
              {practice.city.name}, {practice.city.country_code}, {practice.zip_code}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-white">
            <Button
              className="rounded py-1 text-center"
              style={{ background: 'linear-gradient(90.49deg, #02616A 0.28%, #00838F 96.69%)' }}
              onClick={() => toggleAppointmentModal(true)}
              disabled={!data.is_allowed_booking_appointment}
            >
              <div className="flex items-center gap-2">
                <Calendar size="17" />
                {data.is_allowed_booking_appointment ? <span>Appointment</span> : <span>Not Available</span>}
              </div>
            </Button>
            <Button className="rounded py-1 text-center bg-[#f6a404]" onClick={redirectPhoneNumber}>
              <div className="flex items-center gap-1">
                <Phone size="17" fill="#fff" />
                <span>{practice.phone_number}</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <ModalDialog isOpen={openAppointmentDialog} setOpen={toggleAppointmentModal} title="Request Appointment">
        <AppointmentDialog data={data} closeAppointmentDialog={() => toggleAppointmentModal(false)} />
      </ModalDialog>
    </>
  )
}
