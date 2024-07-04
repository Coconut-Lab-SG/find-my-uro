import Image from "next/image";
import Link from "next/link";

export function ArticleThumbnail() {
  return (
    <Link href="/article/123" className="flex flex-col gap-4">
      <Image
        alt="article-img"
        width={0}
        height={0}
        src="/assets/images/home/stone-supplement-thumbnail.webp"
        style={{ width: "auto", height: "auto", objectFit: 'contain' }}
        sizes="100vw"
      />
      <span className="text-[#9D9D9D] text-xl">Expert Opinion</span>
      <p className="text-2xl text-[#3d5294] font-extrabold leading-9">Kidney Stones Supplements: What’s Actually Good For You?</p>

      <p className="text-xl text-black line-clamp-5 leading-8 tablet:line-clamp-4">
        Introduction Thinking of taking supplements to meet your daily nutritional goals? You’re not alone! We teamed up with The Kidney Dietitian, Melanie Betz,...
      </p>
    </Link>
  )
}