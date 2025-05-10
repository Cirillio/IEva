import { Link } from "react-router-dom";

export function UserSubtitleLink({ id, children }) {
  return (
    <Link
      to={"/profile/" + id}
      className="flex w-fit text-lg gap-2 items-center text-nowrap italic font-semibold"
    >
      {children}
    </Link>
  );
}
