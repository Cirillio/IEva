export function SmallAvatar({ img }) {
  return (
    <picture className="w-12 rounded-full aspect-square  overflow-hidden">
      <img src={"/avatars/" + img} alt="avatar" />
    </picture>
  );
}

export function SmallNoAvatar({ letter }) {
  return (
    <picture className="w-12 bg-base-300/20 text-base-content/90 flex items-center justify-center uppercase font-semibold text-xl rounded-full aspect-square  overflow-hidden">
      <span>{letter}</span>
    </picture>
  );
}
