import { SelfProfileCover } from "./SelfProfileCover";
import { SelfProfileName } from "./SelfProfileName";
import { CopyButton } from "@/shared/ui/CopyButton";
import { UserTag } from "@/shared/ui/Tag";
import { Avatar } from "@/shared/ui/AvatarSizes";
import { StatSpan } from "@/shared/ui/StatSpan";
export function SelfProfileHeader() {
  return (
    <>
      <div className="w-full max-h-60 z-0">
        <SelfProfileCover img={"cov1.png"} />
      </div>
      <div className="flex flex-wrap px-2 gap-4 ">
        <div className="w-1/4 flex justify-center mx-auto h-fit -mt-[10%]">
          <Avatar img={"av1.png"} />
        </div>

        <div className="w-full sm:flex-1  flex flex-wrap flex-col sm:flex-row gap-1 items-center justify-center sm:justify-between">
          <SelfProfileName firstname={"Cirillio"} />

          <CopyButton data="@imcirillio">
            <UserTag tag={"imcirillio"} />
          </CopyButton>

          <div className="flex gap-1 flex-col flex-wrap items-center sm:items-start justify-center ">
            <StatSpan name="Подписок" stat={"12312"} />
            <StatSpan name="Подписчиков" stat={"12312"} />
          </div>
        </div>
      </div>
    </>
  );
}
