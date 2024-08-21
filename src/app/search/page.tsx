import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { UrologistListContainer } from './container/page-container'

export type SearchParamsProps = {
  keyword: string
  location: string
  state_id: string
  city_id: string
  distance: string
  location_based: string
  latitude: string
  longitude: string
  is_featured: string
  is_highest_rated: string
  title?: string
  page?: string
}

export default function SearchUrologists({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const queryParams = searchParams as SearchParamsProps

  return (
    <div className="flex flex-col gap-y-4 px-5 max-w-[1140px] mx-auto">
      <div className="flex flex-col gap-y-2.5 pb-10">
        <Link prefetch={false} href="/" className="flex items-center gap-3">
          <MoveLeft size={20} />
          <span className="text-lg">{queryParams.location ?? 'Back to Home'}</span>
        </Link>

        {/* Page content section */}
        <UrologistListContainer queryParams={queryParams} />
      </div>
    </div>
  )
}
