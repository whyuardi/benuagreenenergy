export default function ContactLoading() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="h-10 w-72 shimmer rounded-lg mx-auto mb-4" />
        <div className="h-5 w-96 shimmer rounded-lg mx-auto" />
      </div>

      <div className="grid lg:grid-cols-5 gap-16 items-start">
        {/* Form skeleton */}
        <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-3xl border border-[#2C3E50]/10 shadow-sm">
          <div className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="h-14 shimmer rounded-xl" />
              <div className="h-14 shimmer rounded-xl" />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="h-14 shimmer rounded-xl" />
              <div className="h-14 shimmer rounded-xl" />
            </div>
            <div className="h-14 shimmer rounded-xl" />
            <div className="h-14 shimmer rounded-xl" />
            <div className="h-28 shimmer rounded-xl" />
            <div className="h-14 shimmer rounded-full" />
          </div>
        </div>

        {/* Info skeleton */}
        <div className="lg:col-span-2 space-y-8">
          <div className="h-6 w-40 shimmer rounded-lg" />
          <div className="h-56 shimmer rounded-3xl" />
          <div className="grid sm:grid-cols-2 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-2xl border border-[#2C3E50]/10 shadow-sm">
                <div className="h-3 w-16 shimmer rounded mb-2" />
                <div className="h-4 w-40 shimmer rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
