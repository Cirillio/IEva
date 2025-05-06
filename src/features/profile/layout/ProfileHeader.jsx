import { Icon } from "@/icons";
import { CopyButton } from "../../../components/ui/CopyButton";
import { UserTag } from "./UserTag";
function Header() {
  return (
    <>
      <div className="w-full max-h-60 ">
        <picture className="w-full h-full overflow-hidden flex relative">
          <img
            src="/public/covers/cov1.png"
            alt="cover "
            className="w-full h-full object-cover object-center"
          />
          <button className="btn absolute btn-sm sm:btn-md right-2 top-2 opacity-50 hover:opacity-100 active:opacity-100 transition-all duration-300 shadow-sm shadow-black p-1 btn-gradient btn-circle">
            <Icon name={"edit-one"} size="28" />
          </button>
          <div className="w-full h-4/5 absolute bottom-0 bg-gradient-to-t from-base-100 to-transparent"></div>
        </picture>
      </div>
      <div className="flex flex-wrap px-2 gap-4 ">
        <div className="w-1/4 min-w-32 mx-auto h-fit rounded-full overflow-hidden border-4 border-base-100 aspect-square -mt-[10%] relative ">
          <div className="w-full aspect-square  rounded-full">
            <img
              className="w-full object-cover object-center "
              src="/public/avatars/av1.png"
              alt="avatar"
            />
          </div>
        </div>

        <div className="w-full sm:flex-1  flex flex-wrap flex-col sm:flex-row gap-1 items-center justify-center sm:justify-between">
          <div className="text-3xl font-bold italic text-center sm:text-start flex flex-col gap-1">
            {/* <p className="leading-6 text-shadow-sm">Иванов</p> */}
            <p className="leading-6 text-shadow-sm">Cirillio</p>
          </div>

          <CopyButton data="@imcirillio">
            <UserTag tag={"imcirillio"} />
          </CopyButton>

          <div className="flex gap-1 flex-col flex-wrap items-center sm:items-start justify-center ">
            <a href="#" className="flex gap-2">
              <span className="opacity-80">Подписчиков:</span>
              <span>1111111</span>
            </a>
            <a href="#" className="flex gap-2">
              <span className="opacity-80">Подписок:</span>
              <span>12312</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
