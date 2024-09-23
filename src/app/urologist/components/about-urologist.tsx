'use client'

import { Button } from '@/app/_components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/app/_components/ui/carousel'
import { UrologistType } from '@/app/_lib/definitions/urologist'
import { convertTo12HourFormat } from '@/app/_lib/helpers/DateTimeHelpers'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { formatPhoneNumber } from '@/app/_lib/helpers/NumberHelpers'
import { Check, Clock, Info, MapPin, Phone } from 'lucide-react'

type Props = {
  data: UrologistType
}

export function AboutUrologist({ data }: Props) {
  const { practices } = data

  return (
    <div className="flex flex-col gap-3 tablet:ml-10">
      {/* Urologist About */}
      <div className="flex flex-col gap-3 border-b border-gray-300 py-4">
        <span className="italic text-lg font-medium text-center">About {data.name}</span>
        <div className="flex flex-col gap-4">
          {data.npi_id && (
            <div className="flex flex-col gap-2">
              <span className="italic font-medium">NPI</span>
              <span>{data.npi_id}</span>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Full Name</span>
            <span>
              {data.name}, {data.suffix}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Gender</span>
            <span className="capitalize">{data.gender}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Educations</span>
            {data.educations ? (
              <ul className="flex flex-col gap-1 list-disc">
                {data.educations.map((education) => (
                  <li key={education.id}>{education.institution}</li>
                ))}
              </ul>
            ) : (
              <span>-</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Experience</span>
            {data.year_of_experience ? (
              <span>
                {data.year_of_experience} {data.year_of_experience < 2 ? 'year' : 'years'}
              </span>
            ) : (
              '0 year'
            )}
          </div>
          <div className="flex flex-col gap-2">
            <span className="italic font-medium">Speciality</span>
            <span>{data.speciality}</span>
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
        <Carousel className="w-auto">
          {/* Utilizing slideshow carousel for multiple practice places */}
          <CarouselContent>
            {practices.map((practice) => (
              <CarouselItem key={practice.id}>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3 items-center">
                    <MapPin size={20} />
                    <div className="flex flex-col flex-1">
                      <span>{practice.address}</span>
                      <span>
                        {practice.city.name}, {practice.city.country_code}, {practice.zip_code}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone size={20} />
                    <Button
                      variant="ghost"
                      className="flex-1 justify-start p-0 h-fit text-blue-500 bg-transparent hover:bg-transparent hover:text-blue-500 focus:ring-0"
                      onClick={() => {
                        window.open(`https://wa.me/${formatPhoneNumber(practice.phone_number)}`)
                        sendAnalyticEvent({
                          event_category: 'inquiry_uro',
                          event_value: {
                            website: window.location.href,
                            uroname: data.name,
                            isAffiliation: data.amthAffiliations.map((affiliation) => affiliation.name).join(', '),
                          },
                        })
                      }}
                    >
                      {practice.phone_number}
                    </Button>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Check size={20} />
                    <span className="flex-1">Accepting New Patients</span>
                  </div>
                  {/* TODO: Enable later after we get clear information from BE regarding practice hours */}
                  <div className="flex gap-3">
                    <Clock size={20} />
                    {practice.hours.length ? (
                      <div className="flex flex-col flex-1">
                        {practice.hours.map((time) =>
                          time.is_practice === 1 ? (
                            <span
                              key={time.id}
                            >{`${time.day} ${convertTo12HourFormat(time.practice_start)} - ${convertTo12HourFormat(time.practice_end)}`}</span>
                          ) : (
                            <span>No Schedule.</span>
                          )
                        )}
                      </div>
                    ) : (
                      <span>No available information at the moment</span>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden tablet:flex" />
          <CarouselNext className="hidden tablet:flex" />
        </Carousel>
        <div className="flex gap-3">
          <Info size={20} />
          <p className="flex-1">All consultations are by appointment only. House calls only for Saturday and Sunday</p>
        </div>
      </div>
    </div>
  )
}
