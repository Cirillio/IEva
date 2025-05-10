export function ParamItem({ func, children, type = "primary" }) {
  if (type == "primary") {
    return (
      <button
        onClick={func}
        className="btn-soft  justify-start hover:btn-primary btn btn-sm border-0 rounded-none btn-not-scale btn-outline w-full p-2 flex-1 flex outline-0 active:opacity-70  transition-all duration-300"
      >
        {children}
      </button>
    );
  } else if (type == "error") {
    return (
      <button className="btn-error  justify-start btn btn-sm border-0 rounded-none btn-not-scale btn-outline w-full p-2 flex-1 flex outline-0 active:opacity-70  transition-all duration-300">
        {children}
      </button>
    );
  }
}
