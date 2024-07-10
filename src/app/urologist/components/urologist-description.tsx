'use client'

import { ModalDialog } from '@/components/modal-dialog'
import { ReviewDialog } from '@/components/modal-dialog/contents/review-dialog'
import { VouchDialog } from '@/components/modal-dialog/contents/vouch-dialog'
import { StarGenerator } from '@/components/star-generator'
import { Button } from '@/components/ui/button'
import { Heart, Share2, Star } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function UrologistDescription() {
  const [openVouchDialog, setOpenVouchDialog] = useState(false)
  const [openReviewDialog, setOpenReviewDialog] = useState(false)

  function toggleVouchDialog(val: boolean) {
    setOpenVouchDialog(val)
  }

  function toggleReviewDialog(val: boolean) {
    setOpenReviewDialog(val)
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Urologist Description */}
        <div className="flex items-center gap-x-8">
          <div className="relative h-[105px] w-[105px]">
            <Image alt="urologist-img" className="border-4 border-white rounded-full" src="/assets/images/urologist/dummy-urologist-img.png" fill />
          </div>
          <div className="flex flex-col gap-y-8">
            <span className="text-lg italic font-medium text-white">Yaniv Larish, M.D</span>
            <span className="text-sm">Vouch or leave a review for Dr. Larish!</span>
          </div>
        </div>
        {/* Urologist Rating */}
        <StarGenerator count={5} />

        {/* CTA */}
        <div className="flex items-center justify-between gap-3">
          <Button variant="default" className="rounded-lg w-[135px]" style={{ background: 'linear-gradient(96.65deg, #b20000 0%, #ff7c52 95.82%)' }} onClick={() => toggleVouchDialog(true)}>
            <Heart size="16" />
          </Button>
          <Button variant="default" className="rounded-lg w-[135px]" style={{ background: 'linear-gradient(90.49deg,#243b6c .28%,#432f91 96.69%)' }} onClick={() => toggleReviewDialog(true)}>
            <Star size="16" />
          </Button>
          <Button variant="default" className="rounded-lg w-[135px] bg-[#dadada]">
            <Share2 size="16" className="text-black" />
          </Button>
        </div>
      </div>

      <ModalDialog title='Find My Uro!' isOpen={openVouchDialog} setOpen={setOpenVouchDialog}>
        <VouchDialog />
      </ModalDialog>

      <ModalDialog title='Write a review' isOpen={openReviewDialog} setOpen={setOpenReviewDialog}>
        <ReviewDialog />
      </ModalDialog>
    </>
  )
}
