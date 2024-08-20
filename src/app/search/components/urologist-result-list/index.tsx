'use client'

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/app/_components/ui/pagination'
import { Loader2Icon } from 'lucide-react'
import { SearchParamsProps } from '../../page'
import { UrologistResultCard } from '../urologist-result-card'
import { useUrologistResultList } from './hooks/useUrologistResultList'

type Props = {
  queryParams: SearchParamsProps
  setUrologistCoordinate: (latitude: number, longitude: number) => void
}

export function UrologistResultList({ queryParams, setUrologistCoordinate }: Props) {
  const { urologistList, loading, toNextPage } = useUrologistResultList(queryParams)

  if (loading) {
    return (
      <div className="flex justify-center h-52 items-center">
        <Loader2Icon size={20} className="animate-spin" />
      </div>
    )
  }

  if (urologistList?.length === 0) {
    return (
      <div className="flex justify-center h-52 items-center">
        <span className="text-xl">No urologist found.</span>
      </div>
    )
  }

  const links = [
    {
      url: null,
      label: '&laquo; Previous',
      active: false,
    },
    {
      url: 'http://127.0.0.1:8000/api/v1/locations/urologists?page=1',
      label: '1',
      active: true,
    },
    {
      url: 'http://127.0.0.1:8000/api/v1/locations/urologists?page=2',
      label: '2',
      active: false,
    },
    {
      url: 'http://127.0.0.1:8000/api/v1/locations/urologists?page=3',
      label: '3',
      active: false,
    },
    {
      url: 'http://127.0.0.1:8000/api/v1/locations/urologists?page=2',
      label: 'Next &raquo;',
      active: false,
    },
  ]

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {urologistList?.map((urologist, idx) => (
          <UrologistResultCard key={urologist.id} data={urologist} idx={idx + 1} setUrologistCoordinate={setUrologistCoordinate} />
        ))}
      </div>
      {/* TODO: Still WIP, enable later */}

      {/* 
      const links = [
    {
      "url": null,
      "label": "&laquo; Previous",
      "active": false,
      "query": "page=1"
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/locations/urologists?page=1",
      "label": "1",
      "active": true,
      "query": "page=1"
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/locations/urologists?page=2",
      "label": "2",
      "active": false,
      "query": "page=2"
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/locations/urologists?page=3",
      "label": "3",
      "active": false,
      "query": "page=3"
    },
    {
      "url": "http://127.0.0.1:8000/api/v1/locations/urologists?page=2",
      "label": "Next &raquo;",
      "active": false,
      "query": "page=2"
    }
  ]
      */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext onClick={toNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
