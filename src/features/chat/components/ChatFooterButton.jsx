export function ChatFooterButton({ children }) {
  return (
    <button className="btn bg-base-100 active:btn-primary border-2 duration-150 p-2 sm:p-3 aspect-square h-fit active:border-primary border-base-100  btn-outline rounded-2xl shadow-sm shadow-base-300/20">
      {children}
    </button>
  );
}
