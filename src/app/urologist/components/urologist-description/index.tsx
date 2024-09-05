'use client'

import { ModalDialog } from '@/app/_components/modal-dialog'
import { ReviewDialog } from '@/app/_components/modal-dialog/contents/review-dialog'
import { VouchDialog } from '@/app/_components/modal-dialog/contents/vouch-dialog'
import { StarGenerator } from '@/app/_components/star-generator'
import { Button } from '@/app/_components/ui/button'
import { DEFAULT_AVATAR_PATH } from '@/app/_lib/constants/string-vars'
import { UrologistType } from '@/app/_lib/definitions/urologist'
import { UserDetailResponse } from '@/app/_lib/definitions/user'
import { sendAnalyticEvent } from '@/app/_lib/helpers/GoogleAnalyticsHelpers'
import { CheckIcon, Heart, Share2, Star } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'
import { useUrologistDescription } from './hooks/useUrologistDescription'

type Props = {
  data: UrologistType
  slug: string
  user: UserDetailResponse | null
}

export function UrologistDescription({ data, slug, user }: Props) {
  const { copySuccess, isUserAlreadyVouch, openReviewDialog, openVouchDialog, setOpenReviewDialog, setOpenVouchDialog, handleShareUrologist } =
    useUrologistDescription({ data, user })

  useEffect(() => {
    const affiliations = data.amthAffiliations.map((affiliation) => affiliation.name).join(', ')
    sendAnalyticEvent({ event_category: 'view_uro', event_value: { uroname: data.name, isAffiliation: affiliations } })
  }, [])

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Urologist Description */}
        <div className="flex items-center gap-x-8">
          <div className="relative h-[105px] w-[105px]">
            <Image alt="urologist-img" className="border-4 border-white rounded-full h-fit" src={data.avatar ?? DEFAULT_AVATAR_PATH} fill />
          </div>
          <div className="flex flex-col gap-y-8">
            <span className="text-lg italic font-medium text-white">{data.name}</span>
            <span className="text-sm">Vouch or leave a review for {data.name}!</span>
          </div>
        </div>
        {/* Urologist Rating */}
        <StarGenerator rating={data.rate} />

        {/* CTA */}
        <div className="flex items-center justify-between gap-3">
          <Button
            variant="default"
            className="rounded-lg w-[135px]"
            style={{ background: 'linear-gradient(96.65deg, #b20000 0%, #ff7c52 95.82%)' }}
            onClick={() => setOpenVouchDialog(true)}
          >
            <Heart size="16" />
          </Button>
          <Button
            variant="default"
            className="rounded-lg w-[135px]"
            style={{ background: 'linear-gradient(90.49deg,#243b6c .28%,#432f91 96.69%)' }}
            onClick={() => setOpenReviewDialog(true)}
          >
            <Star size="16" />
          </Button>
          <Button variant="default" disabled={copySuccess} className="rounded-lg w-[135px] bg-[#dadada]" onClick={handleShareUrologist}>
            {copySuccess ? <CheckIcon size="16" className="text-black" /> : <Share2 size="16" className="text-black" />}
          </Button>
        </div>
      </div>

      <ModalDialog title="Find My Uro!" isOpen={openVouchDialog} setOpen={setOpenVouchDialog}>
        <VouchDialog data={data} closeVouchDialog={() => setOpenVouchDialog(false)} isUserAlreadyVouched={isUserAlreadyVouch} slug={slug} />
      </ModalDialog>

      <ModalDialog title="Write a review" isOpen={openReviewDialog} setOpen={setOpenReviewDialog}>
        <ReviewDialog
          name={data.name}
          avatar={data.avatar ?? DEFAULT_AVATAR_PATH}
          urologist_id={data.id}
          closeReviewDialog={() => setOpenReviewDialog(false)}
        />
      </ModalDialog>
    </>
  )
}
