import { Icon as Iconify } from "@iconify/react";

function Icon({ name, size }) {
  return <Iconify icon={`mynaui:${name}`} width={size} height={size} />;
}

export { Icon };
