import { Link } from "react-router-dom";
import { ParamMinButton } from "../ui/ParamMinButton";
import { SmallAvatar } from "../ui/AvatarSizes";
const UserButton = ({ name, username, avatar }) => (
  <div className="btn btn-text btn-lg xl:py-8 aspect-square px-0 xl:px-4 rounded-full btn-not-scale cursor-default relative">
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

    <div className="min-[100px]:hidden xl:flex">
      <ParamMinButton />
    </div>
  </div>
);

export default UserButton;
