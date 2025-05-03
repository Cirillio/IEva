const UserButton = ({ name, username, avatar }) => (
  <>
    <div className="btn btn-text btn-lg py-8 aspect-square px-0 xl:px-4 rounded-full btn-not-scale cursor-default relative">
      <a className="text-start xl:mr-28 flex gap-1 items-center cursor-pointer">
        <picture className="w-10 rounded-full aspect-square  overflow-hidden">
          <img src={"/public/avatars/" + avatar} alt="avatar" />
        </picture>
        <div className="flex flex-col min-[100px]:hidden xl:flex">
          <span className="text-secondary text-xl">{name}</span>
          <p className="text-sm font-light ">@{username}</p>
        </div>
      </a>
      <button className="text-center min-[100px]:hidden xl:flex items-center btn btn-text btn-circle absolute right-4 z-20 top-1/2 -translate-y-1/2">
        ...
      </button>
    </div>
  </>
);

export default UserButton;
