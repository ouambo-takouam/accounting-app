import navigation from "./constants/navigation.json";

export type ColorsType = "white" | "rgb(212, 215, 220)" | "rgb(141, 144, 150)";

export type IconsType =
  | "pen"
  | "hamburger"
  | "home"
  | "scale"
  | "calculator"
  | "payment"
  | "customer"
  | "employee"
  | "arrow-down"
  | "arrow-up"
  | "filter-arrow-up"
  | "filter-arrow-down"
  | "filter-arrow-up-down"
  | "search"
  | "print"
  | "export"
  | "close"
  | "address"
  | "place"
  | "attachment"
  | "payment-mode"
  | "file"
  | string;

export const getNavigationPathData = (currentPath: string) => {
  switch (currentPath) {
    case "/get-things-done":
      return undefined;
    case "/business-overview":
    case "/cashflow-global-overview":
    case "/reports":
      return navigation["/business-overview"];
    case "/banking":
    case "/olbrules":
    case "/chartofaccounts":
    case "tags":
    case "reconcile":
      return navigation["/banking"];
    case "/customers":
    case "/items":
    case "/vendors":
      return navigation["/customers"];
    default:
      return undefined;
  }
};
