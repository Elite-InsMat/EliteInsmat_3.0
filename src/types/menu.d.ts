export type ApiResponse = {
  ErrorText: string | null;
  Footer: string;
  MenusForDays: Menu[];
  PriceHeader: unknown;
  RestaurantName: string;
  RestaurantUrl: string;
};
  
export type Menu = {
  Date: string;
  LunchTime: string;
  SetMenus: MenuItem[];
};
  
export type MenuItem = {
  Components: string[];
  Name: string;
  Price: string;
  SortOrder: number;
};
  