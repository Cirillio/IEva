export function ParamItem({ func, children }) {
  return (
    <button
      onClick={func}
      className="btn btn-sm w-full px-4 py-5 rounded-none btn-not-scale  justify-start btn-outline border-0 outline-0 hover:btn-secondary active:btn-primary transition-all duration-300"
    >
      {children}
    </button>
  );
}
