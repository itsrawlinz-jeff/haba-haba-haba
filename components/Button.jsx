import { twMerge } from "tailwind-merge";

export default function Button({ title, className }) {
  return (
    <button
   
      className={twMerge(
        "bg-[#FF0066] hover:bg-[#ED147D] text-zinc-100 py-2 px-5 rounded-[25px] capitalize transition-all duration-300 ease-in-out",
        className
      )}
    >
      <h2 className="tracking-loose">{title}</h2>
    </button>
  );
}
