export function SelfProfileName({ firstname, lastname }) {
  return (
    <div className="text-3xl font-bold italic text-center sm:text-start flex flex-col gap-1">
      {lastname && <p className="leading-6 text-shadow-sm">{lastname}</p>}
      <p className="leading-6 text-shadow-sm">{firstname}</p>
    </div>
  );
}
