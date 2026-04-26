export default function Loading() {
  return (
    <main className="relative min-h-screen px-4 pt-24">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="skeleton h-8 w-48" />
        <div className="skeleton h-14 w-3/4 max-w-2xl" />
        <div className="skeleton h-14 w-2/3 max-w-xl" />
        <div className="space-y-3 pt-4">
          <div className="skeleton h-4 w-full max-w-2xl" />
          <div className="skeleton h-4 w-11/12 max-w-2xl" />
          <div className="skeleton h-4 w-9/12 max-w-2xl" />
        </div>
        <div className="flex gap-3 pt-6">
          <div className="skeleton h-10 w-40" />
          <div className="skeleton h-10 w-32" />
        </div>
      </div>
    </main>
  );
}
