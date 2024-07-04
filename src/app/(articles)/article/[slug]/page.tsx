import { BackButton } from '@/components/ui/back-button'
import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Article({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col gap-y-4 px-5 max-w-[1140px] mx-auto pb-10">
      <BackButton />

      <div className="flex flex-col gap-4">
        <span className="text-[#9D9D9D] text-xl">Expert Opinion</span>
        <span className="text-4xl text-[#3d5294] font-extrabold">Kidney Stones Supplements: What’s Actually Good For You?</span>
        <Image
          alt="article-img"
          width={0}
          height={0}
          src="/assets/images/home/stone-supplement-thumbnail.webp"
          style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
          sizes="100vw"
        />
      </div>

      {/* Article content */}
      <div className="flex flex-col gap-10 pt-7 text-xl">
        <span>May 22, 2024</span>
        <p>
          <strong>Introduction</strong>
          <br /> <br />
          Thinking of taking supplements to meet your daily nutritional goals? You’re not alone! We teamed up with The Kidney Dietitian, Melanie Betz,
          to uncover the truth behind popular health supplements, and how they truly fair when it comes to kidney stone prevention.
        </p>
      </div>

      <div className="flex flex-col gap-10 text-xl">
        <div className="flex flex-col gap-3 tablet:text-center">
          <span>Note:</span>
          <Link href="https://www.worstpainever.com/kidney-stones-supplements-whats-actually-good-for-you/" target="_blank">
            This article was originally posted on WorstPainEver.com
          </Link>
        </div>

        <span className="text-4xl text-[#3d5295] font-bold text-center">Share this article</span>

        <div className="flex items-center gap-2 justify-center">
          <Link href="" target="_blank" className="py-2 px-2.5 bg-[#3b5998] rounded-full">
            <div className="flex items-center gap-2 text-white">
              <Facebook fill="#fff" strokeWidth={0} />
              <span className="text-xl font-bold hidden tablet:block">Facebook</span>
            </div>
          </Link>
          <Link href="" target="_blank" className="py-2 px-2.5  bg-[#0077b5] rounded-full">
            <div className="flex items-center gap-2 text-white">
              <Linkedin fill="#fff" strokeWidth={0} />
              <span className="text-xl font-bold hidden tablet:block">LinkedIn</span>
            </div>
          </Link>
          <Link href="" target="_blank" className="py-2 px-2.5  bg-[#1da1f2] rounded-full">
            <div className="flex items-center gap-2 text-white">
              <Twitter fill="#fff" strokeWidth={0} />
              <span className="text-xl font-bold hidden tablet:block">Twitter</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
