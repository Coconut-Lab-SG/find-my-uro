'use client'

import { Loader2Icon } from 'lucide-react'
import { SearchParamsProps } from '../../page'
import { UrologistResultCard } from '../urologist-result-card'
import { useUrologistResultList } from './hooks/useUrologistResultList'

type Props = {
  queryParams: SearchParamsProps
  setUrologistCoordinate: (latitude: number, longitude: number) => void
}

export function UrologistResultList({ queryParams, setUrologistCoordinate }: Props) {
  const { urologistList, loading } = useUrologistResultList(queryParams)

  if (loading) {
    return (
      <div className="flex justify-center h-52 items-center">
        <Loader2Icon size={20} className="animate-spin" />
      </div>
    )
  }

  if (!urologistList?.length) {
    return (
      <div className="flex justify-center h-52 items-center">
        <span className="text-xl">No urologist found.</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {urologistList?.map((urologist, idx) => (
          <UrologistResultCard key={urologist.id} data={urologist} idx={idx + 1} setUrologistCoordinate={setUrologistCoordinate} />
        ))}
      </div>
      {/* TODO: Enable later */}
      {/* <UrologistsPagination /> */}
    </div>
  )
}
