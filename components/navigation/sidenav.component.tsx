"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "../global/icon.component";
import NavigationItem from "./navigation-item.component";
import { getNavigationPathData } from "@lib/utils";

export default function SideNavigation() {
  const [active, setActive] = useState(false);

  const currentPath = usePathname();
  const navigationData = getNavigationPathData(currentPath);

  /** Some types defined */
  type Item = { path: string; slug: string };
  type BigItem = { subtitle: string; items: Array<Item> };

  useEffect(() => {
    if (navigationData) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [navigationData]);

  return (
    <>
      <div
        className="fixed top-0 bottom-0 w-[220px] bg-black03"
        onMouseOver={() => setActive(false)}
        onMouseLeave={() => {
          if (navigationData) {
            setActive(true);
          }
        }}
      >
        {/** Logo + logo Text */}
        <div>
          <Link className="block py-3 px-[15px]" href="/">
            <div className="flex items-center h-[30px]">
              <span className="mr-1">
                <Image
                  src="/images/svg/logo.svg"
                  width={26}
                  height={26}
                  alt="Logo"
                />
              </span>
              <span>
                <Image
                  src="/images/svg/logo-text.svg"
                  width={126}
                  height={30}
                  alt="Logo text"
                />
              </span>
              <div
                className={`absolute w-0 left-[220px] h-8 transition-all duration-[450ms] ease-out delay-0 ${
                  active && "w-[176px] left-[44px] bg-black03"
                }`}
              ></div>
            </div>
          </Link>
        </div>

        {/** Bouton `Nouveau` */}
        <div className="px-5 pt-4 pb-8">
          <button
            type="button"
            className={`flex justify-center gap-2 text-[12px] leading-5 border-2 rounded-3xl hover:shadow-btn transition-all duration-[450ms] ease-out delay-0 ${
              active
                ? "rounded-full text-black bg-white font-bold w-6"
                : "w-full text-white font-medium"
            }`}
          >
            <span>+</span>
            <span className={`${active && "hidden"}`}>Nouveau</span>
          </button>
        </div>

        {/** Elements de navigation */}
        <div>
          <div className="flex items-center mb-2">
            <button
              className={`ml-5 transition-all duration-[450ms] ease-out delay-0 ${
                !active && "hidden"
              }`}
            >
              <Icon name="hamburger" width={20} height={20} />
            </button>
            <div
              className={`flex items-center justify-between ml-5 mr-3 text-xs text-white w-full transition-width duration-[450ms] ease-out delay-0 ${
                active && "w-1 opacity-0"
              }`}
            >
              <span className="leading-3">MENU</span>
              <button>
                <Icon name="pen" width={20} height={20} color="white" />
              </button>
            </div>
          </div>

          <div className="text-gray02 text-sm">
            <ul>
              <NavigationItem
                path="/get-things-done"
                iconName="home"
                label="A faire"
                active={active}
                selected={currentPath === "/get-things-done"}
              />
              <NavigationItem
                path="/business-overview"
                iconName="scale"
                label="Mon entreprise"
                active={active}
                selected={currentPath === "/business-overview"}
              />
              <NavigationItem
                path="/banking"
                iconName="calculator"
                label="Ma gestion comptable"
                active={active}
                selected={currentPath === "/banking"}
              />
              <NavigationItem
                path="/customers"
                iconName="payment"
                label="Ma gestion commerciale"
                active={active}
                selected={currentPath === "/customers"}
              />
            </ul>
          </div>
        </div>
      </div>

      {/** sub-side navigation */}
      {navigationData && (
        <div
          className={`absolute top-0 bottom-0 text-sm text-white bg-black01 transition-width duration-[450ms] ease-out delay-0 ${
            active ? "left-[60px] w-[160px]" : "left-[220px] w-0 opacity-0"
          }`}
        >
          <div
            className={`p-4 font-bold transition-opacity duration-[400ms] ease-out delay-0  ${
              !active && "opacity-0 hidden"
            }`}
          >
            {navigationData.title}
          </div>

          <>
            {navigationData.items && (
              <ul>
                {navigationData.items.map((item: Item) => (
                  <li
                    key={item.path}
                    className={`flex items-center h-10 pl-4 cursor-pointer ${
                      item.path == currentPath && "bg-black text-white"
                    } transition-all hover:bg-black03`}
                  >
                    <Link href={item.path} className="w-full">
                      {item.slug}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {navigationData.data && (
              <>
                {navigationData.data.map((obj: BigItem) => (
                  <div key={obj.subtitle}>
                    <div className="flex items-center h-8 pl-4 mt-4 text-[13px] font-semibold uppercase">
                      {obj.subtitle}
                    </div>
                    <ul>
                      {obj.items.map((item) => (
                        <li
                          key={item.path}
                          className={`flex items-center h-10 pl-4 font-light text-gray02 cursor-pointer ${
                            item.path == currentPath && "bg-black text-white"
                          } transition-all hover:bg-black03`}
                        >
                          <Link href={item.path} className="w-full">
                            {item.slug}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </>
            )}
          </>
        </div>
      )}
    </>
  );
}
