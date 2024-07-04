import { BackButton } from "@/components/ui/back-button";
import { ArticleThumbnail } from "./components/article-thumbnail";

export default function ArticleList() {
  return (
    <div className="flex flex-col gap-y-5 px-5 max-w-[1140px] mx-auto pb-10">
      <BackButton />

      <div className="flex">
        <a href="https://www.worstpainever.com/articles" target="_blank" className="text-lg">
          Originally posted on WorstPainEver.com
        </a>
      </div>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-3">
        <ArticleThumbnail />
        <ArticleThumbnail />
        <ArticleThumbnail />
        <ArticleThumbnail />
        <ArticleThumbnail />
      </div>
    </div>
  )
}