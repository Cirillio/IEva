export function ChatMessageField() {
  return (
    <textarea
      className="w-full h-full bg-base-100 rounded-2xl outline-2 duration-150 focus:outline-primary outline-base-100 placeholder:text-neutral placeholder:italic px-3 py-2 shadow-sm shadow-base-300/20 resize-none transition-[outline]"
      placeholder="Напишите сообщение"
      rows={3}
    ></textarea>
  );
}
