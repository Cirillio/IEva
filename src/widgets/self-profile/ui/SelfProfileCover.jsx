import { Icon } from "@/shared/ui/Icon";

export function SelfProfileCover({ img }) {
  return (
    <picture className="w-full h-full overflow-hidden flex relative">
      <img
        src={"/covers/" + img}
        alt="cover "
        className="w-full h-full object-cover object-center"
      />
      <button className="btn absolute btn-sm sm:btn-md right-2 top-2 opacity-50 hover:opacity-100 active:opacity-100 transition-all duration-300 shadow-sm shadow-black p-1 btn-gradient btn-circle">
        <Icon name={"edit-one"} size="28" />
      </button>
      <div className="w-full h-4/5 absolute bottom-0 bg-gradient-to-t from-base-100 to-transparent"></div>
    </picture>
  );
}
