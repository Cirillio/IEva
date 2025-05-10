import { FuncButton } from "../../../components/ui/functional/FuncButton";
import { ParamMenu } from "../../../components/ui/functional/ParamButton/ParamMenu";
import { ParamDivider } from "../../../components/ui/functional/ParamButton/ParamDevider";
import { ParamItem } from "../../../components/ui/functional/ParamButton/ParamItem";
import { Icon } from "@/icons";
import { MicroAvatar, MicroNoAvatar } from "../../../components/ui/AvatarSizes";
import { UserSubtitleLink } from "../../../components/ui/UserSubtitleLink";
import { OnlineStatusBadge } from "../../../components/ui/OnlineStatusBadge";
import { closeChat } from "../ChatSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useState } from "react";

export function ChatWindowHeader({ chatMember }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.chat.member);

  return (
    <div className="w-full flex p-2 gap-2 bg-base-300/10 rounded-b-2xl flex-col flex-1">
      <div className="grid grid-cols-[auto_1fr_auto] w-full items-center">
        <FuncButton
          to={"/messanger"}
          icon="x-solid"
          action={() => dispatch(closeChat())}
        />
        <span className="px-2  w-full flex overflow-hidden">
          <UserSubtitleLink id={member ? member.id : 0}>
            {member && member.avatar ? (
              <MicroAvatar img={member ? member.avatar : ""} />
            ) : (
              <MicroNoAvatar letter={member ? member.name[0] : "N"} />
            )}
            {member ? member.name : "x"}
          </UserSubtitleLink>
        </span>
        <div className="flex items-center gap-2">
          <FuncButton icon="bell-slash" action={() => {}} />
          <FuncButton icon="search" action={() => {}} />
          <ParamMenu setOpen={setMenuOpen} open={menuOpen}>
            <ParamItem>
              <Icon name="bookmark-plus" size="24" />
              <p>Закрепить</p>
            </ParamItem>
            <ParamDivider />
            <ParamItem type="error">
              <Icon name="trash-two" size="24" />
              <p>Очистить</p>
            </ParamItem>
            <ParamItem type="error">
              <Icon name="ban" size="24" />
              <p>Заблокировать</p>
            </ParamItem>
          </ParamMenu>
        </div>
      </div>
      <div className="w-full flex">
        <OnlineStatusBadge />
      </div>
    </div>
  );
}
