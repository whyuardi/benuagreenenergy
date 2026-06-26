export default function LangLoading() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Title shimmer */}
      <div className="text-center mb-16">
        <div className="h-10 w-64 shimmer rounded-lg mx-auto mb-4" />
        <div className="h-5 w-96 shimmer rounded-lg mx-auto" />
      </div>

      {/* Content shimmer blocks */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl border border-[#2C3E50]/10 shadow-sm overflow-hidden">
            <div className="h-48 shimmer" />
            <div className="p-5 space-y-3">
              <div className="h-4 shimmer rounded w-3/4" />
              <div className="h-3 shimmer rounded w-1/2" />
              <div className="h-3 shimmer rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
