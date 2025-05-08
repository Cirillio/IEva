export function SmallAvatar({ img }) {
  return (
    <picture className="w-10 rounded-full aspect-square  overflow-hidden">
      <img src={"/public/avatars/" + img} alt="avatar" />
    </picture>
  );
}
