import { useNavigate } from "react-router-dom";
import { SmallAvatar, SmallNoAvatar } from "../../components/ui/AvatarSizes";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openChat } from "./ChatSlice";
import { ParamDivider } from "../../components/ui/functional/ParamButton/ParamDevider";
import { ParamMenu } from "../../components/ui/functional/ParamButton/ParamMenu";
import { ParamItem } from "../../components/ui/functional/ParamButton/ParamItem";
import { Icon } from "@/icons";
import { useState } from "react";
export function ChatListMember({ member }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user_id = useAppSelector((state) => state.chat.id);

  function OpenChat(e) {
    if (user_id == member.id) {
      e.preventDefault();
      return;
    }
    dispatch(openChat({ id: member.id, member: member }));
  }

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`
        ${user_id == member.id ? "btn-soft" : ""}
        btn btn-text
        h-fit relative w-full justify-start p-0 flex btn-circle items-center group overflow-x-hidden transition-none btn-not-scale`}
    >
      <div className="relative h-full w-full flex px-2 py-2">
        <div className="grid grid-cols-[auto_1fr_auto] w-full">
          <div
            onClick={(e) => {
              OpenChat(e);
              navigate("/messanger/" + member.id);
            }}
            className="flex items-center h-full"
          >
            {member.avatar ? (
              <SmallAvatar img={member.avatar} />
            ) : (
              <SmallNoAvatar letter={member.name[0]} />
            )}
          </div>
          <div
            onClick={(e) => {
              OpenChat(e);
              navigate("/messanger/" + member.id);
            }}
            className="flex flex-col max-h-full text-start overflow-x-hidden px-2 h-full justify-center"
          >
            <span className="italic text-sm "> {member.name}</span>
            <span className="text-xs opacity-70 font-normal text-nowrap">
              Did you know what you have rights? The constition says yes! Im
              Saul Goodman and I know your rights!!!
            </span>
          </div>
          <div className="z-60 m-auto truncate">
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
                type="error"
              >
                <Icon name="x-circle" size="24" />
                <p>Удалить</p>
              </ParamItem>
            </ParamMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
