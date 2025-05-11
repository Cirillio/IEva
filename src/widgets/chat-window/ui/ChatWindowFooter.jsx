import { ChatFooterButton } from "./ChatFooterButton";
import { ChatMessageField } from "@/features/message-send";
import { Icon } from "@/shared/ui/Icon";

export function ChatWindowFooter() {
  return (
    <div className="w-full flex items-center gap-2 p-2 bg-base-300/10 rounded-t-2xl ">
      <div className="w-full h-full flex max-w-lg">
        <ChatMessageField />
      </div>
      <div className="flex sm:flex-row w-fit flex-col gap-1 sm:gap-2">
        <ChatFooterButton>
          <Icon name="send" size="30" />
        </ChatFooterButton>
        <ChatFooterButton>
          <Icon name="add-queue" size="30" />
        </ChatFooterButton>
      </div>
    </div>
  );
}
