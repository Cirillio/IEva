import { Link, useParams } from "react-router-dom";
import { SmallAvatar, SmallNoAvatar } from "../../../components/ui/AvatarSizes";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { openChat } from "../ChatSlice";
import { ParamDivider } from "../../../components/ui/functional/ParamButton/ParamDevider";
import { ParamMenu } from "../../../components/ui/functional/ParamButton/ParamMenu";
import { ParamItem } from "../../../components/ui/functional/ParamButton/ParamItem";
import { Icon } from "@/icons";
import { useState } from "react";

export function ChatListMember({ member }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user_id } = useParams();
  const dispatch = useAppDispatch();
  const chatState = useAppSelector((state) => state.chat.value);

  function OpenChat(e, chatId) {
    if (user_id == member.id) {
      e.preventDefault();
      return;
    }
    dispatch(openChat({ id: chatId, member: member }));
  }

  return (
    <Link
      to={"/messanger/" + member.id}
      onClick={(e) => OpenChat(e, member.id)}
      className={`h-16 ${
        chatState ? "w-16 overflow-x-hidden" : "w-full"
      } relative justify-start flex duration-400 transition-all focus:outline-none btn bg-base-200/20 btn-circle btn-outline hover:bg-base-200/40 border-0 btn-not-scale`}
    >
      <div className="relative h-full w-full flex-nowrap justify-start mr-auto aspect-square items-center flex">
        <div className="grid grid-cols-[auto_1fr_auto] w-full px-2 py-2 gap-4">
          <div className="flex items-center h-full">
            {member.avatar ? (
              <SmallAvatar img={member.avatar} />
            ) : (
              <SmallNoAvatar letter={member.name[0]} />
            )}
          </div>
          <div className="flex flex-col text-start px-1 h-full min-w-0 truncate relative">
            <span className="italic"> {member.name}</span>
            <span className="font-light text-sm opacity-70">
              Did you know what you have rights?
            </span>
            <div className="absolute right-0 top-0 aspect-square h-full w-20 bg-gradient-to-r from-transparent to-base-200/20 opacity-100"></div>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="z-60 m-auto"
          >
            <ParamMenu setOpen={setMenuOpen} open={menuOpen}>
              <ParamItem
                func={() => {
                  setMenuOpen(false);
                  console.log("Закреплен: " + member.name);
                }}
              >
                <Icon name="bookmark-plus" size="24" />
                <p>Закрепить</p>
              </ParamItem>
              <ParamDivider />
              <ParamItem
                func={() => {
                  setMenuOpen(false);

                  console.log("Удален: " + member.name);
                }}
              >
                <Icon name="x-circle" size="24" />
                <p>Удалить</p>
              </ParamItem>
            </ParamMenu>
          </div>
        </div>
      </div>

      <div
        className={`${
          user_id == member.id ? "opacity-100" : "opacity-0"
        } absolute w-full h-full z-0 border-2 duration-100 border-primary rounded-full left-0 transition-all`}
      ></div>
    </Link>
  );
}
