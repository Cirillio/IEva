import { useEffect, useMemo } from "react";
import "@/styles/chat-list.css";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ParamMinButton } from "../../components/ui/ParamMinButton";
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
      {
        id: 3123,
        name: "Saul",
        avatar: "av1.png",
      },
      {
        id: 43255,
        name: "Saul2",
        avatar: "av1.png",
      },
      {
        id: 9874237,
        name: "Saul3",
        avatar: "av1.png",
      },
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
    <div className="flex h-full gap-1 sm:gap-4 w-full">
      <div
        id="chat-list"
        className={`${
          chatState ? "active" : ""
        } h-full transition-all duration-400 p-0 flex-col items-center sm:flex min-[100px]:hidden`}
      >
        <ChatList members={chat_members} />
      </div>
      <div
        id="chat-window"
        className="h-full w-full flex flex-col gap-2 transition-all"
      >
        <AnimatePresence mode="wait">
          {chatState ? (
            <motion.div
              key="current-chat"
              className="w-full flex h-full flex-col items-center rounded-2xl shadow-base-300/20 shadow-md"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-2 my-2 w-full">
                <Link
                  to="/messanger"
                  onClick={() => dispatch(closeChat())}
                  className="chat-window__close btn my-auto btn-circle btn-primary"
                >
                  X
                </Link>
                <h2 className="py-1 px-2 bg-base-200  mr-auto flex items-center shadow-md rounded-full">
                  Chat Window - {chatMember.name}
                </h2>
                <ParamMinButton />
              </div>
              <div className="w-full flex-1 h-full flex flex-col rounded-2xl px-1 sm:px-4">
                <div className="h-full w-full bg-base-100/20"></div>
                <div className="w-full mb-1 sm:mb-4 flex items-center gap-1 sm:gap-4">
                  <div className="w-full h-full flex max-w-lg">
                    <textarea
                      className="w-full h-full rounded-2xl outline-2 duration-25 focus:outline-primary outline-secondary placeholder:text-neutral placeholder:italic px-3 py-2 bg-base-100/20 shadow-sm shadow-base-300/20 resize-none transition-all"
                      placeholder="Напишите сообщение"
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="flex sm:flex-row flex-col gap-1 sm:gap-4">
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
          ) : (
            <motion.div
              key="no-chat"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full shadow-md bg-gray-400 rounded-3xl"
            >
              <div className="flex items-center justify-center h-full text-lg font-semibold text-white">
                Чат закрыт
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
