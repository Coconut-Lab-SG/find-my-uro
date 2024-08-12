'use client'

import { GoogleMapsComponent } from '@/app/_components/maps/google-maps-component'
import { Button } from '@/app/_components/ui/button'
import Link from 'next/link'
import { UrologistResultList } from '../components/urologist-result-list'
import { SearchParamsProps } from '../page'
import { usePageContainer } from './hooks/usePageContainer'

type Props = {
  queryParams: SearchParamsProps
}

export function UrologistListContainer({ queryParams }: Props) {
  const { coordinate, setUrologistCoordinate } = usePageContainer(queryParams)

  return (
    <div className="flex flex-col gap-4 laptop:flex-row-reverse">
      {/* Map section */}
      <div className="relative -mx-5 laptopM:mx-0">
        <div className="h-[230px] w-screen bg-gray-400 mx-auto laptopM:h-[824px] laptopM:w-[360px]">
          {/* TODO: Change lat lng accordingly based on API data later */}
          <GoogleMapsComponent location={{ lat: coordinate.latitude, lng: coordinate.longitude }} />
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-3 text-center border-b border-gray-300 pb-3">
          <span className="text-lg font-medium">Top Urologist</span>
          {queryParams.location ? (
            <p className="text-sm italic">
              Looking for <strong>top urologist in {queryParams.location}</strong>? <br /> Search from our wide range of well-equipped and
              highly-skilled doctors, to find the best fit for YOUR urology condition. Discover <strong>local urologist near you now!</strong>
            </p>
          ) : (
            <p className="text-sm italic">
              Search result for: <strong>{queryParams.type}</strong>. <br /> Search from our wide range of well-equipped and highly-skilled doctors,
              to find the best fit for YOUR urology condition. Discover <strong>local urologist near you now!</strong>
            </p>
          )}
        </div>

        {/* Urologist result list */}
        <div className="flex flex-col gap-5 h-[440px] overflow-y-auto grow">
          {/* Filter */}

          {/* NOTE: Taken down temporarily */}
          {/* <div className="flex-shrink-0">
            <div className="flex gap-2.5 overflow-x-auto hide-scrollbar">
              <select className="button-chip focus:outline-none">
                <option value="-">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <ButtonFilterChip label="Pain Management" />
              <ButtonFilterChip label="Quick Turnaround" />
              <ButtonFilterChip label="No Stent" />
              <ButtonFilterChip label="Stent Experience" />
            </div>
          </div> */}
          <UrologistResultList queryParams={queryParams} setUrologistCoordinate={setUrologistCoordinate} />

          <div className="text-center">
            <Link
              href="https://forms.office.com/pages/responsepage.aspx?id=tXzsnSV_jkWuqf22QWHt-W6KMDTPCD5HkLgtkIWuSnRUOFc3SldJVDNMUVZLMk5UN0lZV1JFWUMySC4u"
              target="_blank"
            >
              Are we missing any Urologists?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Composing component
type ButtonChipProps = {
  label: string
}

function ButtonFilterChip({ label }: ButtonChipProps) {
  return (
    <Button variant="ghost" className="font-normal text-[#767676] border border-[#767676] p-1 text-sm w-fit rounded-lg h-fit bg-white">
      {label}
    </Button>
  )
}
