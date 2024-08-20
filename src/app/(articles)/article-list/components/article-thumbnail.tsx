import { ArticleThumbnailType } from '@/app/_lib/definitions/articles'
import Image from 'next/image'
import Link from 'next/link'

type ArticleThumbnailProps = {
  data: ArticleThumbnailType
}

export function ArticleThumbnail({ data }: ArticleThumbnailProps) {
  return (
    <Link prefetch={false} href={data.link} target="_blank" className="flex flex-col gap-4">
      <Image
        alt="article-thumbnail-img"
        width={0}
        height={0}
        src={data.thumbnail ?? '/assets/images/home/stone-supplement-thumbnail.webp'}
        style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
        sizes="100vw"
      />
      <span className="text-[#9D9D9D] text-xl">Expert Opinion</span>
      <p className="text-2xl text-[#3d5294] font-extrabold leading-9">{data.title}</p>

      <p className="text-xl text-black line-clamp-5 leading-8 tablet:line-clamp-4">{data.description}</p>
    </Link>
  )
}
