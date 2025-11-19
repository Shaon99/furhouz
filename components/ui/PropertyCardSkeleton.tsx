export default function PropertyCardSkeleton() {
  return (
    <article className="rounded-xl bg-white shadow-lg ring-1 ring-slate-200/60 overflow-hidden animate-pulse">
      <div className="relative aspect-[16/12] w-full bg-slate-200" />
      <div className="p-4 space-y-3">
        <div className="h-7 w-32 bg-slate-200 rounded" />
        <div className="h-4 w-24 bg-slate-200 rounded" />
        <div className="h-5 w-full bg-slate-200 rounded" />
        <div className="h-4 w-3/4 bg-slate-200 rounded" />
        <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
          <div className="h-4 w-8 bg-slate-200 rounded" />
          <div className="h-4 w-8 bg-slate-200 rounded" />
          <div className="h-4 w-12 bg-slate-200 rounded" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 flex-1 bg-slate-200 rounded-xl" />
          <div className="h-10 flex-1 bg-slate-200 rounded-xl" />
        </div>
      </div>
    </article>
  );
}

