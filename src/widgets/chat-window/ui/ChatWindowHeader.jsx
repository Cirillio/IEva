import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { closeChat } from "@/entities/chat/model/slice";
import { MicroAvatar, MicroNoAvatar } from "@/shared/ui/AvatarSizes";
import { ActionButton } from "@/shared/ui/ActionButton";
import { ParamMenu } from "@/shared/ui/ParamButton";
import { ParamItem } from "@/shared/ui/ParamButton";
import { Icon } from "@/shared/ui/Icon";
import { UserSubtitleLink } from "@/shared/ui/UserSubtitleLink";
import { StatusBadge } from "@/shared/ui/StatusBadge";

export function ChatWindowHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.chat.member);

  return (
    <div className="w-full flex p-2 gap-2 bg-base-300/10 rounded-b-2xl flex-col flex-1">
      <div className="grid grid-cols-[auto_1fr_auto] w-full items-center">
        <ActionButton
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
          <ActionButton icon="bell-slash" action={() => {}} />
          <ActionButton icon="search" action={() => {}} />
          <ParamMenu setOpen={setMenuOpen} open={menuOpen}>
            <ParamItem>
              <Icon name="bookmark-plus" size="24" />
              <p>Закрепить</p>
            </ParamItem>
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
        <StatusBadge />
      </div>
    </div>
  );
}
