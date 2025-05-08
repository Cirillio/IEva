import { useEffect, useMemo } from "react";
import "@/styles/chat-list.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ParamMenu } from "../../components/ui/functional/ParamButton/ParamMenu";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { openChat, closeChat } from "./ChatSlice";
import { ChatList } from "./components/ChatList";
import { Icon } from "@/icons";
export function MessangerPage() {
  const { user_id } = useParams();

  const dispatch = useAppDispatch();
  const chatState = useAppSelector((state) => state.chat.value);
  const chatMember = useAppSelector((state) => state.chat.member);

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
    <div className="flex h-full w-full ">
      <div
        id="chat-list"
        className={`${
          chatState ? "active" : ""
        } h-full transition-all flex-1 sm:overflow-visible overflow-hidden flex duration-400 p-0 flex-col items-center `}
      >
        <ChatList members={chat_members} />
      </div>
      <div
        id="chat-window"
        className={`${
          chatState ? "w-full p-1" : "p-0 w-0"
        } h-full duration-500 flex flex-col gap-2 transition-all`}
      >
        <AnimatePresence mode="wait">
          {chatState && (
            <motion.div
              key="current-chat"
              className="w-full flex h-full flex-col items-center rounded-2xl border-2 border-neutral-200/30"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col w-full">
                <div className="grid grid-cols-[auto_1fr_auto] w-full p-2 items-center">
                  <Link
                    to="/messanger"
                    onClick={() => dispatch(closeChat())}
                    className="btn btn-sm p-1 btn-circle shadow-neutral-200/30 btn-outline border-0 shadow-sm"
                  >
                    <Icon size="24" name="fat-arrow-left" />
                  </Link>
                  <Link
                    to={"/profile/" + chatMember.id}
                    className="flex w-full text-lg overflow-x-hidden italic font-semibold px-4"
                  >
                    {chatMember.name}
                  </Link>
                  <div className="">
                    <ParamMenu size="sm" />
                  </div>
                </div>
                <div className="w-full p-2 flex">
                  <span className="text-xs text-secondary-content bg-secondary py-1 px-3 shadow-sm shadow-neutral/30 flex rounded-2xl">
                    Был в сети вчера
                  </span>
                </div>
                <div className="w-full h-[2px] bg-neutral-200/30"></div>
              </div>
              <div className="w-full flex-1 h-full flex flex-col rounded-2xl">
                <div className="h-full w-full"></div>
                <div className="w-full flex p-2 items-center gap-2">
                  <div className="w-full h-full flex max-w-lg">
                    <textarea
                      className="w-full h-full  rounded-2xl outline-2 duration-25 focus:outline-primary outline-secondary placeholder:text-neutral placeholder:italic px-3 py-2 bg-base-100/20 shadow-sm shadow-base-300/20 resize-none transition-all"
                      placeholder="Напишите сообщение"
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="flex sm:flex-row flex-col gap-1 sm:gap-2">
                    <button className="btn active:btn-primary border-2 duration-75 p-2 sm:p-3 aspect-square h-fit btn-outline rounded-2xl shadow-sm shadow-base-300/20">
                      <Icon name="send" size="30" />
                    </button>
                    <button className="btn active:btn-info border-2 duration-75 p-2 sm:p-3 aspect-square h-fit btn-outline rounded-2xl shadow-sm shadow-base-300/20">
                      <Icon name="add-queue" size="30" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
