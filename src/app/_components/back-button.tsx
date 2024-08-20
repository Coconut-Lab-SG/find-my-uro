'use client'

import { MoveLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'

export function BackButton() {
  const router = useRouter()

  return (
    <Button variant="ghost" className="justify-start w-fit p-0 hover:bg-transparent" onClick={() => router.back()}>
      <MoveLeft size={20} strokeWidth={2} />
    </Button>
  )
}
