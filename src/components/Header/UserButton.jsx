import { Link } from "react-router-dom";
import { ParamMenu } from "../ui/functional/ParamButton/ParamMenu";
import { ParamDivider } from "../ui/functional/ParamButton/ParamDevider";
import { ParamItem } from "../ui/functional/ParamButton/ParamItem";
import { SmallAvatar } from "../ui/AvatarSizes";
import { useNavigate } from "react-router-dom";
import { Icon } from "@/icons";

const UserButton = ({ name, username, avatar }) => {
  const navigate = useNavigate();

  return (
    <div className="btn btn-text btn-lg xl:py-8 aspect-square px-0 xl:px-2 rounded-full btn-not-scale cursor-default relative">
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
        <ParamMenu>
          <ParamItem
            func={() => {
              navigate("/config");
            }}
          >
            <Icon name="config" size="24" />
            <p>Настройки</p>
          </ParamItem>{" "}
          <ParamDivider />
          <ParamItem
            func={() => {
              navigate("/logout");
            }}
          >
            <Icon name="logout" size="24" />
            <p>Выйти</p>
          </ParamItem>
        </ParamMenu>
      </div>
    </div>
  );
};

export default UserButton;
