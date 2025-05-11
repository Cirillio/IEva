import { SmallAvatar } from "@/shared/ui/AvatarSizes";
import { Link } from "react-router-dom";

export function SelfCard({ avatar, name, username }) {
  return (
    <Link
      to="/profile"
      className="text-start xl:mr-28 flex gap-1 items-center cursor-pointer"
    >
      <SmallAvatar img={avatar} />
      <div className="flex flex-col min-[100px]:hidden xl:flex">
        <span className="text-secondary text-xl">{name}</span>
        <p className="text-sm font-light ">@{username}</p>
      </div>
    </Link>
  );
}
