import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export function UrologistsPagination() {
  return (
    <div className="flex items-center justify-center gap-4">
      {/* Prev */}
      <Button variant="ghost" className="p-0">
        <ArrowLeft size={24} />
      </Button>

      <div className="flex font-bold">
        <span>1 - 10 of 225</span>
      </div>

      {/* Next */}
      <Button variant="ghost" className="p-0">
        <ArrowRight size={24} />
      </Button>
    </div>
  )
}
