'use client'

import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/app/_components/ui/pagination'
import { useRouter, useSearchParams } from 'next/navigation'
import { PaginationMetaType } from '../_lib/definitions/pagination'

type Props = {
  meta: PaginationMetaType | null
  currentPage: string
}

export function CustomPagination({ meta, currentPage }: Props) {
  const router = useRouter()
  const currentSearchParams = useSearchParams()

  function handleClickPagination(query: string | null) {
    if (query) {
      const params = new URLSearchParams(currentSearchParams.toString())
      const page = query.split('=')[1]

      params.set('page', page)
      router.push(`?${params.toString()}`)
    }
  }

  return (
    <Pagination>
      <PaginationContent>
        {meta?.links.map((link) => {
          if (link.label.includes('Previous')) {
            return (
              <PaginationItem key={link.label}>
                <PaginationPrevious
                  aria-disabled={!link.query}
                  tabIndex={!link.query ? -1 : undefined}
                  onClick={() => handleClickPagination(link.query)}
                  className={!link.query ? 'pointer-events-none opacity-50' : undefined}
                />
              </PaginationItem>
            )
          }
          if (link.label.includes('Next')) {
            return (
              <PaginationItem key={link.label}>
                <PaginationNext
                  aria-disabled={!link.query}
                  tabIndex={!link.query ? -1 : undefined}
                  onClick={() => handleClickPagination(link.query)}
                  className={!link.query ? 'pointer-events-none opacity-50' : undefined}
                />
              </PaginationItem>
            )
          }

          return (
            <PaginationItem key={link.label}>
              <PaginationLink onClick={() => handleClickPagination(link.query)} isActive={currentPage === link.label}>
                {link.label}
              </PaginationLink>
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
}
