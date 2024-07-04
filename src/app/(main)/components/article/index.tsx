import Image from 'next/image'
import Link from 'next/link'
import { ArticleCard } from './article-card'

export function ArticleSection() {
  return (
    <div className="flex flex-col gap-y-16 max-w-[1140px] mx-auto w-full px-5">
      {/* Title section */}
      <div className="flex flex-col gap-y-3 text-center mobileL:text-left">
        <p className="text-[32px] italic font-bold">
          Learn from our <span className="text-[#42328d]">Worst Pain Ever</span> community
        </p>
        <a href="https://www.facebook.com/worstpainever/" target="_blank" className="text-lg">
          Visit our facebook page
        </a>
      </div>

      {/* Article list section */}
      <div className="flex flex-col gap-6 text-center mobileL:text-left">
        <div className="flex flex-col items-center gap-4 mobileL:flex-row">
          <span className="text-xl italic font-medium">Get in-depth insights</span>
          <a href="https://www.worstpainever.com/articles" target="_blank" className="text-lg">
            Originally posted on WorstPainEver.com
          </a>
        </div>

        <div className="flex flex-col gap-y-5">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>

        <Link href="/article">See all articles</Link>
      </div>

      {/* Community Highlight banner section */}
      <section className="flex flex-col items-center gap-4 mobileL:flex-row">
        <Image alt="community-banner" src="/assets/images/home/community-highlight-banner.webp" width={468} height={290} />
        <div className="flex flex-col gap-3 text-center mobileL:text-left">
          <p className="text-[32px] italic font-semibold">
            The <span className="text-[#42328d]">Best Care</span> on Your Terms
          </p>
          <p className="text-xl">
            Our Community highlights the most important qualities so that you can make informed decisions on what kind of care to get.
          </p>
        </div>
      </section>
    </div>
  )
}
