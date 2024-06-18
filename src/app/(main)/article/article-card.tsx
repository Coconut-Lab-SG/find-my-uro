import Image from 'next/image'

export function ArticleCard() {
  return (
    <div className="flex flex-col items-center gap-5 mobileL:flex-row">
      <Image alt="article-thumbnail" src="/assets/images/home/stone-supplement-thumbnail.webp" width={200} height={130} className='w-full mobileL:w-[200px]' />
      <div className="flex flex-col">
        <span className="text-xl italic font-medium mb-2.5">Kidney Stones Supplements: What’s Actually Good For You?</span>
        <span className="text-xs text-[#9d9d9d] mb-1.5">Expert Opinion</span>
        <p className="text-lg">
          Introduction Thinking of taking supplements to meet your daily nutritional goals? You’re not alone! We teamed up with The Kidney Dietitian,
          Melanie Betz,...
        </p>
      </div>
    </div>
  )
}
