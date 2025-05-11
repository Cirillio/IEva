import { useNavigate } from "react-router-dom";
import { SelfCard } from "@/entities/self/ui/SelfCard";
import { ParamItem, ParamMenu } from "@/shared/ui/ParamButton";
import { Icon } from "@/shared/ui/Icon";

export function SelfPanel({ name, username, avatar }) {
  const navigate = useNavigate();

  return (
    <div className="btn btn-text btn-lg xl:py-8 aspect-square px-0 xl:px-2 rounded-full btn-not-scale cursor-default relative">
      <SelfCard name={name} username={username} avatar={avatar} />
      <div className="min-[100px]:hidden xl:flex">
        <ParamMenu>
          <ParamItem
            func={() => {
              navigate("/config");
            }}
          >
            <Icon name="config" size="24" />
            <p>Настройки</p>
          </ParamItem>
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
}
