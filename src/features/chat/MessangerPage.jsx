import { useEffect, useMemo, useState } from "react";
import { ParamMenu } from "../../components/ui/functional/ParamButton/ParamMenu";
import { ParamItem } from "../../components/ui/functional/ParamButton/ParamItem";
import { ParamDivider } from "../../components/ui/functional/ParamButton/ParamDevider";
import { HorizontalDivider } from "../../components/ui/HorizontalDivider";
import "@/styles/chat-list.css";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openChat, closeChat } from "./ChatSlice";
import { motion } from "framer-motion";
import { Icon } from "@/icons";

import { ChatList } from "./ChatList";
import { ChatWindowHeader } from "./components/ChatWindowHeader";
import { ChatWindowFooter } from "./components/ChatWindowFooter";
export function MessangerPage() {
  const { user_id } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useAppDispatch();
  const chatState = useAppSelector((state) => state.chat.value);
  const chatMember = useAppSelector((state) => state.chat.member);
  console.log(chatMember);

  const chat_members = useMemo(
    () => [
      { id: 1, name: "Пабло Эскобар" },
      { id: 2, name: "Дональд Трамп" },
      { id: 3, name: "Канье Уэст" },
      { id: 4, name: "Борат Сагдиев" }, // Персонаж Саши Барона Коэна
      { id: 5, name: "Дэдпул" }, // Персонаж комиксов Marvel
      { id: 6, name: "Джокер", avatar: "av1.png" }, // Персонаж комиксов DC
      { id: 7, name: "Майк Тайсон" },
      { id: 8, name: "Чарли Шин" },
      { id: 9, name: "Остап Бендер" }, // Персонаж Ильфа и Петрова
      { id: 10, name: "Шерлок Холмс" }, // Персонаж Артура Конан Дойля
      { id: 11, name: "Доктор Хаус" }, // Персонаж сериала "Доктор Хаус"
      { id: 12, name: "Капитан Джек Воробей" }, // Персонаж "Пиратов Карибского моря"
      { id: 13, name: "Мистер Бин" }, // Персонаж Роуэна Аткинсона
      { id: 14, name: "Гомер Симпсон" }, // Персонаж мультсериала "Симпсоны"
      { id: 15, name: "Джонни Депп" },
      { id: 16, name: "Форест Гамп" }, // Персонаж фильма "Форрест Гамп"
      { id: 17, name: "Тони Старк" }, // Персонаж комиксов Marvel (Железный Человек)
      { id: 18, name: "Гарри Поттер" }, // Персонаж серии книг Дж. К. Роулинг
      { id: 19, name: "Дон Кихот" }, // Персонаж романа Сервантеса
      { id: 20, name: "Барон Мюнхгаузен" }, // Литературный персонаж
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
        className="
      h-full flex-0 md:flex-1/3 overflow-hidden flex flex-col items-center w-fit"
      >
        <ChatList members={chat_members} />
      </div>
      <motion.div
        layout
        initial={false}
        animate={{ width: chatState ? "100%" : "0" }}
        transition={{ duration: 0.4 }}
        className="h-full flex-2/3 overflow-hidden"
      >
        <div className="w-full h-full">
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
                        <ParamDivider h="2" />
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
                        <ParamDivider h="2" />
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
      </motion.div>
    </div>
  );
}
