'use client'

import { GoogleMapsComponent } from '@/app/_components/maps/google-maps-component'
import { ModalDialog } from '@/app/_components/modal-dialog'
import { AppointmentDialog } from '@/app/_components/modal-dialog/contents/appointment-dialog'
import { Button } from '@/app/_components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/_components/ui/carousel'
import { UrologistType } from '@/app/_lib/definitions/urologist'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { formatPhoneNumber } from '@/app/_lib/helpers/NumberHelpers'
import { Calendar, Phone } from 'lucide-react'
import { useState } from 'react'

type Props = {
  data: UrologistType
  slug: string
}

export function UrologistLocation({ data, slug }: Props) {
  const { practices } = data
  const [selectedPracticeId, setSelectedPracticeId] = useState('')
  const [openAppointmentDialog, setOpenAppointmentDialog] = useState(false)

  function toggleAppointmentModal(val: boolean) {
    setOpenAppointmentDialog(val)
    sendAnalyticEvent({ event_category: 'button_clicks', event_value: { type: 'Appointment' } })
  }

  function redirectPhoneNumber(phone_num: string) {
    window.open(`https://wa.me/${formatPhoneNumber(phone_num)}`)
    sendAnalyticEvent({
      event_category: 'inquiry_uro',
      event_value: {
        website: window.location.href,
        uroname: data.name,
        isAffiliation: data.amthAffiliations.map((affiliation) => affiliation.name).join(', '),
      },
    })
  }

  return (
    <>
      <Carousel className="w-full tablet:w-[455px]">
        {/* Utilizing slideshow carousel for multiple practice places */}
        <CarouselContent>
          {practices.map((practice) => (
            <CarouselItem className="w-fit">
              <div key={practice.id} className="flex flex-col bg-white gap-4 shadow tablet:flex-row tablet:w-[455px]">
                {/* Google Map container */}
                <div className="h-[172px] tablet:w-[220px] tablet:h-auto bg-slate-400 w-full">
                  {/* TODO: Change lat lng accordingly based on API data later */}
                  <GoogleMapsComponent location={{ lat: practice.latitude, lng: practice.longitude }} />
                </div>
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
                      onClick={() => {
                        setSelectedPracticeId(practice.id)
                        toggleAppointmentModal(true)
                      }}
                      // TODO: Enable later
                      // disabled={!data.is_allowed_booking_appointment}
                    >
                      <div className="flex items-center gap-2">
                        <Calendar size="17" />
                        {/* TODO: Enable later */}
                        {/* {data.is_allowed_booking_appointment ? <span>Appointment</span> : <span>Not Available</span>} */}
                        <span>Appointment</span>
                      </div>
                    </Button>
                    <Button className="rounded py-1 text-center bg-[#f6a404]" onClick={() => redirectPhoneNumber(practice.phone_number)}>
                      <div className="flex items-center gap-1">
                        <Phone size="17" fill="#fff" />
                        <span>{practice.phone_number}</span>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden tablet:flex" />
        <CarouselNext className="hidden tablet:flex" />
      </Carousel>

      <ModalDialog isOpen={openAppointmentDialog} setOpen={toggleAppointmentModal} title="Request Appointment">
        <AppointmentDialog data={data} practice_id={selectedPracticeId} slug={slug} closeAppointmentDialog={() => toggleAppointmentModal(false)} />
      </ModalDialog>
    </>
  )
}
