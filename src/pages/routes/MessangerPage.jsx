import { useEffect, useMemo, useState } from "react";
import { ParamMenu } from "../../shared/ui/ParamButton";
import { ParamItem } from "../../shared/ui/ParamButton";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openChat, closeChat } from "../../entities/chat/model/slice";
import { Icon } from "@/shared/ui/Icon";
import { ChatList } from "../../entities/chat";
import { ChatWindowHeader } from "../../widgets/chat-window";
import { ChatWindowFooter } from "../../widgets/chat-window";
export function MessangerPage() {
  const { user_id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useAppDispatch();
  const chatState = useAppSelector((state) => state.chat.value);
  const chatMember = useAppSelector((state) => state.chat.member);
  console.log(chatMember);
  const chat_members = useMemo(
    () => [
      { id: 1, name: "Alice Blackwood" },
      { id: 2, name: "Bruce Gadget" },
      { id: 3, name: "Camille Starlight" },
      { id: 4, name: "Diana Frostbite" },
      { id: 5, name: "Elijah Stormbringer" },
      { id: 6, name: "Felicity Bytebandit", avatar: "av1.png" },
      { id: 7, name: "Gwen Sparklesong" },
      { id: 8, name: "Harrison Gearhive" },
      { id: 9, name: "Iris Luminaria" },
      { id: 10, name: "Julian Spectra" },
      { id: 11, name: "Kate Valtor" },
      { id: 12, name: "Lucas Emberfist" },
      { id: 13, name: "Maya Celestialsong" },
      { id: 14, name: "Natalie Shadowglow" },
      { id: 15, name: "Oliver Darkfire" },
      { id: 16, name: "Pamela Petalstorm" },
      { id: 17, name: "Quentin Moonwhisper" },
      { id: 18, name: "Ray Sunblaze" },
      { id: 19, name: "Sara Starseeker" },
      { id: 20, name: "Thea Windrunner" },
    ],
    []
  );

  useEffect(() => {
    user_id
      ? dispatch(
          openChat({
            id: user_id,
            member: chat_members.find((member) => member.id == user_id),
          })
        )
      : dispatch(closeChat());
  }, [chat_members, dispatch, user_id]);

  return (
    <div className="flex h-full lg:gap-2 gap-1 w-full">
      <div
        className={` ${
          chatState ? "flex-0" : " flex-1"
        } h-full overflow-hidden md:flex-1/3 flex flex-col items-center w-fit`}
      >
        <ChatList members={chat_members} />
      </div>

      {chatState && chatMember && (
        <div className="flex-2/3 h-full overflow-hidden">
          <div className="w-full flex h-full flex-col items-center">
            <div className="flex flex-col min-h-fit  w-full">
              <ChatWindowHeader chatMember={chatMember ?? {}} />
            </div>
            <div className="h-full w-full flex overflow-y-auto hide-scrollbar flex-col">
              <div class="chat chat-receiver p-2 group hover:bg-base-300/20 rounded-2xl transition-[background] flex flex-nowrap items-center gap-2">
                <div class="chat-avatar mb-auto avatar">
                  <div class="size-12 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div>
                  <div class="chat-header w-full flex flex-nowrap  text-base-content">
                    {chatMember ? chatMember.name : ""}
                    <time class="text-base-content/50 ml-1">12:45</time>
                  </div>
                  <div className="flex gap-2">
                    <div class="bg-base-300/10 rounded-2xl px-3 py-2 text-md">
                      I started learning guitar I started learning guitar I
                      started learning guitar I started learning guitar I
                      started learning guitar I started learning guitar I
                      started learning guitar I started learning guitar I
                      started learning guitar I started learning guitar I
                      started learning guitar
                    </div>
                    <div className="opacity-0 group-hover:opacity-100">
                      <ParamMenu setOpen={setMenuOpen} open={menuOpen}>
                        <ParamItem>
                          <Icon name="star" size="24" />
                          <p>Закрепить</p>
                        </ParamItem>
                        <ParamItem type="error">
                          <Icon name="trash-one" size="24" />
                          <p>Удалить</p>
                        </ParamItem>
                      </ParamMenu>
                    </div>
                  </div>
                  <div class="chat-footer text-sm text-base-content/50">
                    <div>Delivered</div>
                  </div>
                </div>
              </div>
              <div class="chat chat-sender p-2 group hover:bg-base-300/20 rounded-2xl transition-[background] flex flex-nowrap items-center gap-2">
                <div class="chat-avatar mb-auto avatar">
                  <div class="size-12 rounded-full">
                    <img
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png"
                      alt="avatar"
                    />
                  </div>
                </div>
                <div>
                  <div class="chat-header w-full flex flex-nowrap text-base-content">
                    Cirillio
                    <time class="text-base-content/50 ml-1">12:46</time>
                  </div>
                  <div className="flex gap-2">
                    <div class="bg-primary text-primary-content px-3 py-2 rounded-2xl text-md">
                      Не пиши сюда.
                    </div>
                    <div className="opacity-0 group-hover:opacity-100">
                      <ParamMenu>
                        <ParamItem>
                          <Icon name="star" size="24" />
                          <p>Закрепить</p>
                        </ParamItem>
                        <ParamItem type="error">
                          <Icon name="trash-one" size="24" />
                          <p>Удалить</p>
                        </ParamItem>
                      </ParamMenu>
                    </div>
                  </div>
                  <div class="chat-footer text-sm text-base-content/50">
                    Seen
                    <span class="icon-[tabler--checks] text-success align-bottom ml-1"></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col  min-h-fit">
              <ChatWindowFooter />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
