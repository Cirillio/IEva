export function SmallAvatar({ img }) {
  return (
    <picture className="w-12 rounded-full aspect-square  overflow-hidden">
      <img src={"/avatars/" + img} alt="avatar" />
    </picture>
  );
}

export function MicroAvatar({ img }) {
  return (
    <picture className="w-8 rounded-full aspect-square  overflow-hidden">
      <img src={"/avatars/" + img} alt="avatar" />
    </picture>
  );
}

export function SmallNoAvatar({ letter }) {
  return (
    <picture className="w-12 border-2 border-base-content/60  text-base-content/60 flex items-center justify-center not-italic uppercase font-semibold text-xl rounded-full aspect-square  overflow-hidden">
      <span>{letter}</span>
    </picture>
  );
}

export function MicroNoAvatar({ letter }) {
  return (
    <picture className="w-8 border-2 border-base-content/60  text-base-content/60 flex items-center justify-center not-italic uppercase font-semibold text-xl rounded-full aspect-square  overflow-hidden">
      <span>{letter}</span>
    </picture>
  );
}

export function Avatar({ img }) {
  return (
    <div className="w-full rounded-full overflow-hidden border-4 border-base-100 aspect-square relative min-w-32">
      <div className="w-full aspect-square rounded-full">
        <img
          className="w-full object-cover object-center "
          src={"/avatars/" + img}
          alt="avatar"
        />
      </div>
    </div>
  );
}
