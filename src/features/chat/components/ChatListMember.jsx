import { Link, useParams } from "react-router-dom";
import { SmallAvatar } from "../../../components/ui/AvatarSizes";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { openChat } from "../ChatSlice";
import { ParamMinButton } from "../../../components/ui/ParamMinButton";

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
        chatState ? "w-16" : "w-full"
      } relative justify-start flex duration-400 transition-all btn p-1 btn-circle btn-outline border-0 overflow-x-hidden btn-not-scale`}
    >
      <div className="user--chat__list__node relative h-full mr-auto aspect-square items-center justify-center flex">
        <SmallAvatar img={member.avatar} />
        <div className="text-nowrap absolute top-1/2 -translate-y-1/2 left-full w-fit ml-1">
          {member.name}
        </div>
      </div>
      <div className="mr-2 z-20">
        <ParamMinButton />
      </div>
      <div
        className={`${
          user_id == member.id ? "opacity-100" : "opacity-0"
        } absolute w-full h-full border-2 duration-500 border-primary rounded-full left-0 transition-all`}
      ></div>
    </Link>
  );
}
