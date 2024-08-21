export function ArticlesSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 tablet:grid-cols-3">
      {[...new Array(9)].map((_, idx) => (
        <div key={idx}>
          <div className="h-[526px] w-full rounded-lg bg-gray-200 animate-pulse"> </div>
        </div>
      ))}
    </div>
  )
}
