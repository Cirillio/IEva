import * as Popover from "@radix-ui/react-popover";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@/icons";

export function ParamMenu({ children }) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="btn btn-circle btn-text focus:outline-none">
          <Icon name="dots" size="32" />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <AnimatePresence>
          <Popover.Content align="end" forceMount asChild>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -5 }}
              transition={{ duration: 0.1, ease: "easeIn" }}
              className="z-[9999] mt-1 w-fit rounded-2xl bg-base-100 p-0 overflow-hidden items-center shadow-sm shadow-neutral/20 flex flex-col gap-0"
            >
              {children}
            </motion.div>
          </Popover.Content>
        </AnimatePresence>
      </Popover.Portal>
    </Popover.Root>
  );
}
