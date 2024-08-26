// Prevent page from cache
export const revalidate = 0

import { UserDetailResponse } from '@/app/_lib/definitions/user'
import { getUrologistProfile } from '@/app/_lib/services/urologist/urologist-profile'
import { getUserDetail } from '@/app/_lib/services/user/getUserDetail'
import { cookies } from 'next/headers'
import { AboutUrologist } from '../components/about-urologist'
import { UrologistDescription } from '../components/urologist-description'
import { UrologistLocation } from '../components/urologist-location'
import { UrologistReview } from '../components/urologist-review'

type UrologistServerProps = {
  params: {
    slug: string
  }
}

export default async function Urologist({ params }: UrologistServerProps) {
  const urologist = await getUrologistProfile({ name: params.slug })

  const token = cookies().get('access_token')?.value
  let user: UserDetailResponse | null = null
  if (token) {
    user = await getUserDetail({ token: token })
  }

  return (
    <div className="flex flex-col gap-y-4 max-w-[1140px] mx-auto">
      <div className="relative">
        <div className="absolute -top-8 bg-urologist-top-bg h-[105px] bg-cover w-full -z-10"></div>
      </div>

      <div className="flex flex-col gap-8 px-5 pb-5">
        {/* Urologist Details section */}
        <div className="flex flex-col gap-12 tablet:flex-row tablet:items-center tablet:justify-between">
          <UrologistDescription data={urologist.data} user={user} slug={params.slug} />
          <UrologistLocation data={urologist.data} slug={params.slug} />
        </div>

        <div className="flex flex-col gap-6 tablet:flex-row">
          <div className="flex flex-col tablet:w-2/3">
            {/* Urologist Review section */}
            <UrologistReview slug={params.slug} />
            {/* Community Notes section */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-3 border-b border-gray-300 py-4">
                <span className="italic text-lg font-medium">Vouches</span>
                {urologist.vouches_count === 0 ? (
                  <p className="text-[#767676]">There are currently no notes. You can be the first to Vouch!</p>
                ) : (
                  <p className="text-[#767676]">
                    This urologist has been vouched {urologist.vouches_count} {urologist.vouches_count < 2 ? 'time' : 'times'}.
                  </p>
                )}
              </div>
              {/* Insurance Plan section */}
              <div className="flex flex-col gap-3 border-b border-gray-300 py-4">
                <span className="italic text-lg font-medium">Insurance Plan Accepted</span>
                <p className="text-[#767676]">Please check insurance information directly with the doctor's office.</p>
              </div>
            </div>
          </div>
          {/* About Urologist section */}
          <div className="flex-auto tablet:w-1/3">
            <AboutUrologist data={urologist.data} />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <a href="mailto:info@findmyuro.com?subject=Claim%20this%20profile,%20Find%20My%20Uro%20-%20Dr.%20Yaniv%20Larish">Claim this profile</a>
          <a
            href="https://forms.office.com/pages/responsepage.aspx?id=tXzsnSV_jkWuqf22QWHt-W6KMDTPCD5HkLgtkIWuSnRURVlXSzhBMzRJWDQ5WDdWVkJESFVUUEdSTy4u"
            target="_blank"
          >
            Report innacurate information
          </a>
        </div>
      </div>
    </div>
  )
}
