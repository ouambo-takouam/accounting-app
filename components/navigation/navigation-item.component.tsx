import Link from "next/link";
import { Icon } from "../global/icon.component";

export default function NavigationItem({
  path,
  iconName,
  label,
  active,
  selected,
}: {
  path: string;
  iconName: string;
  label: string;
  active: boolean;
  selected: boolean;
}) {
  return (
    <li className="flex items-center h-10 cursor-pointer transition-all hover:bg-black">
      <Link href={path} className="flex items-center w-full">
        <span className="py-2 pl-[18px] pr-2">
          <Icon
            name={iconName}
            width={20}
            height={20}
            color={selected ? "white" : "rgb(141, 144, 150)"}
          />
        </span>
        <span
          className={`transition-opacity duration-300 ease-out delay-0 ${
            active && "opacity-0"
          } ${selected && "text-white"}`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
