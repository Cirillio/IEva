import { Icon as Iconify } from "@iconify/react";

export function Icon({ name, size }) {
  if (!name) return <span className="text-error">?</span>;
  return <Iconify icon={`mynaui:${name}`} width={size} height={size} />;
}
