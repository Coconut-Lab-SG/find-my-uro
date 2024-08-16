export function UrologistReviewSkeleton() {
  // Generate an array of 5 elements
  const listItems = Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`)

  return (
    <div className="flex flex-col gap-4">
      <span className="w-full h-[28px] bg-gray-200 animate-pulse rounded-md"></span>
      <div className="flex flex-col gap-3">
        <span className="w-1/2 h-[24px] bg-gray-200 animate-pulse rounded-md"></span>
        <span className="w-1/2 h-[24px] bg-gray-200 animate-pulse rounded-md"></span>
        <span className="w-1/2 h-[24px] bg-gray-200 animate-pulse rounded-md"></span>
      </div>
      {listItems.map((_, idx) => (
        <div key={idx} className="w-full h-[76px] bg-gray-200 animate-pulse rounded-md" />
      ))}
    </div>
  )
}
