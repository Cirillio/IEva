import { Link, useParams } from "react-router-dom";
import { SmallAvatar } from "../../../components/ui/AvatarSizes";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { openChat } from "../ChatSlice";
import { ParamDivider } from "../../../components/ui/functional/ParamButton/ParamDevider";
import { ParamMenu } from "../../../components/ui/functional/ParamButton/ParamMenu";
import { ParamItem } from "../../../components/ui/functional/ParamButton/ParamItem";
import { Icon } from "@/icons";

export function ChatListMember({ member }) {
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
      className={`user--chat__list border h-16 ${
        chatState ? "w-16 overflow-x-hidden" : "w-full"
      } relative justify-start flex duration-400 transition-all focus:outline-none p-1 btn  btn-circle btn-outline hover:bg-base-200/40 border-0 btn-not-scale`}
    >
      <div className="user--chat__list__node relative h-full mr-auto aspect-square items-center justify-center flex">
        <SmallAvatar img={member.avatar} />
        <div className="text-nowrap absolute top-1/2 -translate-y-1/2 left-full w-fit ml-1">
          {member.name}
        </div>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="mr-2 z-40"
      >
        <ParamMenu>
          <ParamItem
            func={() => {
              console.log("Закреплен: " + member.name);
            }}
          >
            <Icon name="bookmark-plus" size="24" />
            <p>Закрепить</p>
          </ParamItem>
          <ParamDivider />
          <ParamItem
            func={() => {
              console.log("Удален: " + member.name);
            }}
          >
            <Icon name="x-circle" size="24" />
            <p>Удалить</p>
          </ParamItem>
        </ParamMenu>
      </div>
      <div
        className={`${
          user_id == member.id ? "opacity-100" : "opacity-0"
        } absolute w-full h-full z-0 border-2 duration-500 border-primary rounded-full left-0 transition-all`}
      ></div>
    </Link>
  );
}
