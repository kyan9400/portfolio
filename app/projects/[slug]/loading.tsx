export default function Loading() {
  return (
    <main className="relative min-h-screen px-4 py-10 md:py-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="skeleton h-9 w-24" />
        <div className="rounded-3xl border border-border/10 bg-surface/[0.03] p-7 md:p-12 space-y-5">
          <div className="skeleton h-4 w-32" />
          <div className="skeleton h-10 w-3/4" />
          <div className="space-y-2.5 pt-2">
            <div className="skeleton h-3 w-full" />
            <div className="skeleton h-3 w-11/12" />
            <div className="skeleton h-3 w-10/12" />
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            <div className="skeleton h-5 w-16" />
            <div className="skeleton h-5 w-20" />
            <div className="skeleton h-5 w-14" />
          </div>
          <div className="space-y-3 pt-4">
            <div className="skeleton h-16 w-full" />
            <div className="skeleton h-16 w-full" />
            <div className="skeleton h-16 w-full" />
          </div>
        </div>
      </div>
    </main>
  );
}
