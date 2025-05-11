export function StatSpan({ name, stat }) {
  return (
    <span className="flex gap-2">
      <span className="opacity-80">{name}:</span>
      <span>{stat}</span>
    </span>
  );
}
