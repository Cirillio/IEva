import { ChatListMember } from "./ChatListMember";

export function ChatList({ members }) {
  return (
    members && (
      <div
        className={`min-h-full hide-scrollbar w-full flex overflow-y-auto flex-col gap-1`}
      >
        {members.map((member) => (
          <ChatListMember key={member.id} member={member} />
        ))}
      </div>
    )
  );
}
