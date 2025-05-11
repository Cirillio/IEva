import { Icon } from "@/shared/ui/Icon";
import { useState } from "react";
import { Tooltip } from "@nextui-org/react";

export function CopyButton({ children, data }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!data) return;

    try {
      await navigator.clipboard.writeText(data);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000); // Скрыть тултип через 2 секунды
    } catch (err) {
      console.error("Failed to copy: ", err);
      // Можно добавить обработку ошибки, например, отобразить сообщение об ошибке
    }
  };

  return (
    <Tooltip
      className="bg-primary text-white select-none py-1 px-2 rounded-full text-sm shadow-md"
      content={"Скопировано!"}
      placement="top"
      isOpen={isCopied}
    >
      <button
        onClick={handleCopy}
        className="items-center gap-1 flex cursor-pointer sm:mr-auto hover:opacity-100 active:opacity-100 opacity-80  bg-transparent active:bg-base-200 hover:bg-base-200 rounded-full active:scale-95 px-2 py-1 transition-all duration-300"
      >
        {children}
        <Icon name="copy" size="20" />
      </button>
    </Tooltip>
  );
}
