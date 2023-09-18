import { Icon } from "@components/global/icon.component";

export default function CustomSelect({ label }: { label: string }) {
  return (
    <div className="text-sm">
      <p className="leading-7">{label}</p>
      <div className="flex flex-1 items-center border border-gray03 py-1.5 px-2 rounded-[3px] text-black01 hover:shadow-input">
        <input className="flex-1 focus:outline-none" />
        <span className="cursor-pointer">
          <Icon name="arrow-down" width={22} height={22} />
        </span>
      </div>
    </div>
  );
}
