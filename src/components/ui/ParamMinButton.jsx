import { Icon } from "@/icons";

export function ParamMinButton() {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
      className="text-center items-center btn btn-text btn-circle "
    >
      <Icon name="dots" size="32" />
    </button>
  );
}
