export default function Skeleton({ className = "" }) {
  return (
    <div className={`animate-pulse bg-neutral-200 h-48 w-full rounded ${className}`} />
  );
}