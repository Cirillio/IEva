import { Icon } from "@/icons";

function Header({ cover }) {
  return (
    <div className="w-full max-h-60 bg-red-400 relative">
      <picture className="w-full h-full overflow-hidden flex relative">
        <img
          src="/public/covers/cov1.png"
          alt="cover "
          className="w-full h-full object-cover object-center"
        />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-base-100 to-transparent"></div>
      </picture>
      <div className="flex absolute z-10 bottom-0 left-20  translate-y-1/2">
        <div className="relative">
          <div class="avatar">
            <div class="size-32 border-4 border-base-100 rounded-full">
              <img
                src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                alt="avatar"
              />
            </div>
          </div>
          <button className="btn absolute right-full mr-2 top-1/4 -translate-y-1/2 shadow-sm shadow-black p-1 btn-gradient btn-circle">
            <Icon name={"edit-one"} size="28" />
          </button>
          <div className="absolute ml-2 left-full top-1/4 min-w-full  -translate-y-1/2 font-bold text-2xl">
            <p className="leading-6 text-shadow-sm text-shadow-black text-white">
              Иванов
            </p>
            <p className="leading-6 text-shadow-sm text-shadow-black text-white">
              Иван
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
