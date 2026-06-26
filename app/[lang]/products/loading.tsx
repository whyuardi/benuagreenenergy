export default function ProductsLoading() {
  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <div className="h-10 w-64 shimmer rounded-lg mx-auto mb-4" />
        <div className="h-5 w-48 shimmer rounded-lg mx-auto" />
      </div>

      {/* Tabs skeleton */}
      <div className="flex gap-2 mb-6 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-10 w-28 shimmer rounded-xl shrink-0" />
        ))}
      </div>

      {/* Grid skeleton */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#2C3E50]/10 shadow-sm overflow-hidden">
            <div className="h-48 shimmer" />
            <div className="p-5 space-y-3">
              <div className="h-4 shimmer rounded w-3/4" />
              <div className="h-3 shimmer rounded w-1/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
