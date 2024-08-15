import { ArticleThumbnailType } from '@/app/_lib/definitions/articles'
import Image from 'next/image'
import Link from 'next/link'

type ArticleCardProps = {
  data: ArticleThumbnailType
}

export function ArticleCard({ data }: ArticleCardProps) {
  return (
    <Link prefetch={false} href={data.link} target="_blank">
      <div className="flex flex-col items-center gap-5 mobileL:flex-row">
        <Image
          alt="article-thumbnail"
          src={data.thumbnail ?? '/assets/images/home/stone-supplement-thumbnail.webp'}
          width={200}
          height={130}
          className="w-full mobileL:w-[200px]"
        />
        <div className="flex flex-col">
          <span className="text-xl italic font-medium mb-2.5">{data.title}</span>
          <span className="text-xs text-[#9d9d9d] mb-1.5">Expert Opinion</span>
          <p className="text-lg line-clamp-2">{data.description}...</p>
        </div>
      </div>
    </Link>
  )
}
