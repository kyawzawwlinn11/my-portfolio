export default function Loading() {
  return (
    <div className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="h-4 w-40 animate-pulse rounded bg-primary/20" />
        <div className="mt-6 h-10 max-w-xl animate-pulse rounded bg-muted" />
        <div className="mt-4 h-24 max-w-3xl animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
}
